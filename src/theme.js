(function theme() {
	if (!(Spicetify.Player.data && Spicetify.Platform)) {
		setTimeout(theme, 100);
		return;
	}
	console.log("Theme: Initialised Spicetify Theme");

	/*
	MARK: THEME COMPONENTS
	*/

	const waitForElements = (elements, func, timeout = 100) => {
		const queries = elements.map((element) => document.querySelector(element));
		if (queries.every((a) => a)) {
			func(queries);
		} else if (timeout > 0) {
			setTimeout(waitForElements, 300, elements, func, timeout - 1);
		}
	};

	const createElement = (tag, className, textContent = "") => {
		const element = document.createElement(tag);
		if (className) element.className = className;
		if (textContent) element.textContent = textContent;
		return element;
	};

	const createButton = (className, textContent, onClick) => {
		const button = createElement("button", className, textContent);
		button.addEventListener("click", onClick);
		return button;
	};

	const createTippy = (element, content) => {
		if (content) {
			Spicetify.Tippy(element, {
				...Spicetify.TippyProps,
				content: content,
				placement: "top-start",
				delay: [0, 0],
				offset: [-40, 0],
				onShow(instance) {
					instance.popper.classList.add("options-tippy");
				},
			});
		}
	};

	const createOptionRow = ({ name, desc, prefixedName, defaultValue }) => {
		const optionRow = createElement("div", "themeOptionRow");
		optionRow.innerHTML = `
		 <div class="themeOptionContent">
			<div class="themeOptionName">${name}</div>
			<div class="themeOptionDesc">${desc}</div>
		 </div>
		 <div class="themeOptionControl"></div>`;
		optionRow.dataset.name = prefixedName;
		optionRow.dataset.default = JSON.stringify(defaultValue);
		return optionRow;
	};

	const createDropdown = (
		optionRow,
		prefixedName,
		defaultValue,
		options,
		run
	) => {
		const controlContainer = optionRow.querySelector(".themeOptionControl");
		const select = createElement("select", "themeOptionDropdown");
		options.forEach(({ value, label }) => {
			const option = createElement("option");
			option.value = value;
			option.textContent = label;
			select.appendChild(option);
		});
		controlContainer.appendChild(select);
		select.value =
			JSON.parse(localStorage.getItem(prefixedName)) ?? defaultValue;
		select.addEventListener("change", () => {
			const newValue = select.value;
			settingsCache[prefixedName] = newValue;
		});
		return select;
	};

	const createToggle = (optionRow, prefixedName, defaultValue, run) => {
		const controlContainer = optionRow.querySelector(".themeOptionControl");
		const toggleButton = createElement("button", "themeOptionToggle");
		toggleButton.innerHTML =
			'<span class="toggleWrapper"><span class="toggle"></span></span>';
		controlContainer.appendChild(toggleButton);

		const toggle = toggleButton.querySelector(".toggle");
		const isEnabled =
			JSON.parse(localStorage.getItem(prefixedName)) ?? defaultValue;
		toggle.classList.toggle("enabled", isEnabled);

		toggleButton.addEventListener("click", () => {
			const newState = !toggle.classList.contains("enabled");
			toggle.classList.toggle("enabled", newState);
			settingsCache[prefixedName] = newState;
		});

		return toggle;
	};

	const createControl = (option) => {
		const { type, name, desc, defaultValue, options, tippy, run } = option;
		const prefixedName = `theme:${name}`;
		const optionRow = createOptionRow({
			name,
			desc,
			prefixedName,
			defaultValue,
		});

		switch (type) {
			case "toggle":
				createToggle(optionRow, prefixedName, defaultValue, run);
				break;
			case "dropdown":
				createDropdown(optionRow, prefixedName, defaultValue, options, run);
				break;
			default:
				console.error(`Unknown control type: ${type}`);
				return null;
		}

		createTippy(optionRow, tippy);
		return optionRow;
	};

	const createCarousel = (items) => {
		const carouselContainer = createElement("div", "carouselContainer");
		const carousel = createElement("div", "carousel");

		items.forEach((itemText) => {
			const item = createElement("div", "carouselItem", itemText);
			item.addEventListener("click", () => {
				document
					.getElementById(`${itemText.toLowerCase()}Header`)
					?.scrollIntoView({ behavior: "smooth" });
			});
			carousel.appendChild(item);
		});

		const createControlButton = (direction, text) => {
			const button = createButton(`carouselControl ${direction}`, text, () => {
				carousel.scrollBy({
					left: (carousel.clientWidth / 2) * (direction === "prev" ? -1 : 1),
					behavior: "smooth",
				});
			});
			return button;
		};

		carouselContainer.append(
			createControlButton("prev", "<"),
			carousel,
			createControlButton("next", ">")
		);
		return carouselContainer;
	};

	/*
	MARK: DYNAMIC LYRICS BACKGROUND
	*/

	const updateSong = () => {
		const img = Spicetify.Player.data.item.metadata.image_xlarge_url.replace(
			"spotify:image:",
			"https://i.scdn.co/image/"
		);
		document.documentElement.style.setProperty("--image", `url("${img}")`);
	};
	Spicetify.Player.addEventListener("songchange", updateSong);
	updateSong();

	waitForElements([".main-yourLibraryX-navItem"], () => {
		const navItems = document.querySelectorAll(
			".main-yourLibraryX-navItem .main-yourLibraryX-navLink"
		);
		for (const navItem of navItems) {
			if (!navItem.querySelector(".main-yourLibraryX-navLink-accent")) {
				const accent = document.createElement("div");
				accent.classList.add("main-yourLibraryX-navLink-accent");
				navItem.appendChild(accent);
			}
		}
	});

	/*
	MARK: TRANSPARENT WINDOWS CONTROL
	stolen from comfy
	*/

	function updateZoomVariable() {
		let prevOuterWidth = window.outerWidth;
		let prevInnerWidth = window.innerWidth;
		let prevRatio = window.devicePixelRatio;
		function checkChanges() {
			const newOuterWidth = window.outerWidth;
			const newInnerWidth = window.innerWidth;
			const newRatio = window.devicePixelRatio;
			if (
				prevOuterWidth !== newOuterWidth ||
				prevInnerWidth !== newInnerWidth ||
				prevRatio !== newRatio
			) {
				const modified = newOuterWidth / newInnerWidth || 1;
				document.documentElement.style.setProperty("--zoom", modified);
				console.log(
					`Theme: Zoom updated: ${newOuterWidth} / ${newInnerWidth} = ${modified}`
				);
				prevOuterWidth = newOuterWidth;
				prevInnerWidth = newInnerWidth;
				prevRatio = newRatio;
			}
			requestAnimationFrame(checkChanges);
		}
		checkChanges();
	}
	updateZoomVariable();

	/*
	MARK: THEME SETTINGS FUNCTIONS
	*/

	const settingsCache = {};
	const resetOptions = () => {
		const options = document.querySelectorAll(".themeOptionRow");
		for (const option of options) {
			const toggle = option.querySelector(".toggle");
			const prefixedName = option.dataset.name;
			const defaultValue = option.dataset.default === "true";
			toggle.classList.toggle("enabled", defaultValue);
			localStorage.setItem(prefixedName, JSON.stringify(defaultValue));
		}
	};

	const saveOptions = async () => {
		for (const [prefixedName, value] of Object.entries(settingsCache)) {
			localStorage.setItem(prefixedName, JSON.stringify(value));
		}

		for (const option of options) {
			const prefixedName = `theme:${option.name}`;
			if (option.run) {
				const value =
					JSON.parse(localStorage.getItem(prefixedName)) ?? option.defaultValue;
				await option.run(value);
			}
		}

		await updateCSS();
	};

	const updateCSS = () => {
		options.forEach(({ name, type, defaultValue }) => {
			const prefixedName = `theme:${name}`;
			const value =
				JSON.parse(localStorage.getItem(prefixedName)) ?? defaultValue;

			if (type === "toggle") {
				document.body.classList.toggle(name, value);
			} // else if (type === "dropdown") {
			// }
		});
	};

	/*
	MARK: SETTINGS MENU OPTIONS
	*/

	// Add this to end to run something with toggle
	// run: (state) => {
	//   console.log("Setting turned " + (state ? "on" : "off"));
	//   if (state) prelibx();
	// },

	const options = [
		{
			type: "toggle",
			category: "Layouts",
			name: "PreLibX",
			desc: "Switches to old layout ~2023 (Pre LibX)",
			defaultValue: false,
		},
		{
			type: "toggle",
			category: "Layouts",
			name: "TestLayout",
			desc: "New test layout in now playing bar",
			defaultValue: false,
			tippy: 'This is not compatible with "newlayout"',
		},
		{
			type: "toggle",
			category: "Layouts",
			name: "newlayout",
			desc: "Switches Playbar and Cover art in now playing bar",
			defaultValue: true,
			tippy: 'This is not compatible with "Testlayout"',
		},
		{
			type: "toggle",
			category: "Layouts",
			name: "switchlayout",
			desc: "Makes left sidebar go infront of the now playing bar",
			defaultValue: true,
		},
		{
			type: "toggle",
			category: "Snippets",
			name: "hidetracklistnum",
			desc: "Hide tracklist numbers in playlist page",
			defaultValue: true,
		},
		{
			type: "toggle",
			category: "Snippets",
			name: "hidenowplayview",
			desc: "Hide cover art in now playing bar",
			defaultValue: false,
		},
		{
			type: "toggle",
			category: "Snippets",
			name: "horizontalnav",
			desc: "Makes navlinks horizontal (Home, Search, Marketplace)",
			defaultValue: false,
			tippy: 'Not compatible with "highlightnav and navlinkaccent"',
		},
		{
			type: "toggle",
			category: "Snippets",
			name: "transplayicon",
			desc: "Transparent play/pause button in now playing bar",
			defaultValue: true,
		},
		{
			type: "toggle",
			category: "Snippets",
			name: "npvlargerlyrics",
			desc: "Now playing view (Right sidebar) has lyrics only",
			defaultValue: false,
		},
		{
			type: "toggle",
			category: "Snippets",
			name: "navlinkaccent",
			desc: "Coloured fluent selector in navlink",
			defaultValue: true,
			tippy: 'Not compatible with "Not compatible with horizontalnav"',
		},
		{
			type: "toggle",
			category: "Snippets",
			name: "highlightnav",
			desc: "Highlights navlink background on hover/active ",
			defaultValue: true,
			tippy: 'Not compatible with "Not compatible with horizontalnav"',
		},
		{
			type: "toggle",
			category: "Snippets",
			name: "homeheader",
			desc: "Removes coloured gradient from the home page header",
			defaultValue: true,
		},
		{
			type: "dropdown",
			category: "test",
			name: "ea",
			desc: "Description",
			defaultValue: "test1",
			options: [
				{ value: "test1", label: "test1" },
				{ value: "test2", label: "test2" },
				{ value: "test3", label: "test3" },
				{ value: "test4", label: "test4" },
			],
		},
		{
			type: "dropdown",
			category: "test",
			name: "change-Spotify-mode",
			desc: "Changes Spotify Mode to either Normal, Developer or Employee",
			defaultValue: "Employee",
			tippy: "Only takes affect after a restart",
			options: [
				{ value: "Normal", label: "Normal" },
				{ value: "Developer", label: "Developer" },
				{ value: "Employee", label: "Employee" },
				{ value: "Both", label: "Both (Dev + Empl)" },
			],
			run: (value) => {
				changeSpotifyMode(value);
			},
		},
	];

	const categories = {};
	options.forEach((option) => {
		if (!categories[option.category]) {
			categories[option.category] = createElement(
				"div",
				`${option.category.toLowerCase()}Container`
			);
			categories[option.category].appendChild(
				createElement("h2", "themeHeader", option.category)
			);
			categories[option.category].id = `${option.category.toLowerCase()}Header`;
		}
		const control = createControl(option);
		if (control) {
			categories[option.category].appendChild(control);
		}
	});

	const content = createElement("div", "themeContainer");

	content.appendChild(
		createCarousel(["Layouts", "Snippets", "Appearance", "Test", "Other"])
	);

	const mainContainer = createElement("div", "optionContainer");
	Object.values(categories).forEach((category) =>
		mainContainer.appendChild(category)
	);
	content.appendChild(mainContainer);

	const buttonContainer = createElement("div", "buttonContainer");
	buttonContainer.appendChild(createButton("resetButton", "Reset", resetOptions));
	buttonContainer.appendChild(createButton("saveButton", "Save", saveOptions));
	content.appendChild(buttonContainer);

	/*
	MARK: FUNCTIONS
	*/

	const changeSpotifyMode = async (mode) => {
		const modePairs = {
			Normal: { "app-developer": "0", employee: "0" },
			Developer: { "app-developer": "2", employee: "0" },
			Employee: { "app-developer": "0", employee: "1" },
			Both: { "app-developer": "2", employee: "1" },
		};

		const pairs = modePairs[mode] || modePairs.Normal;
		const productState = Spicetify.Platform.UserAPI._product_state_service;
		await productState.putOverridesValues({ pairs });
		// await Spicetify.Platform.UserAPI._product_state_service.putOverridesValues({ pairs: { "employee": "1" } });
	};

	/*
	MARK: TOPBAR BUTTON
	*/

	const settingsIcon = `<svg viewBox="0 0 16 16" width="16px" height="16px" fill="currentcolor"><path d="M8.262 5.72A2.542 2.542 90 108.262 10.804 2.542 2.542 90 108.262 5.72ZM6.991 8.262A1.271 1.271 90 119.533 8.262 1.271 1.271 90 116.991 8.262ZM11.59 3.684A.902.902 90 0110.543 2.962L10.212 1.162A.45.45 0 009.863.804 7.715 7.715 90 006.661.804.45.45 0 006.312 1.162L5.983 2.962A.89.89 0 015.945 3.103.902.902 90 014.793 3.646L3.064 3.03A.45.45 0 002.578 3.152 7.61 7.61 0 00.975 5.914C.919 6.087.972 6.276 1.112 6.394L2.513 7.579C2.55 7.611 2.585 7.645 2.616 7.682 2.938 8.06 2.892 8.625 2.512 8.947L1.111 10.132A.45.45 0 00.974 10.611C1.307 11.635 1.855 12.576 2.578 13.373A.45.45 0 003.064 13.495L4.793 12.88A.915.915 90 014.934 12.842.902.902 90 015.981 13.564L6.31 15.363A.45.45 0 006.66 15.721 7.73 7.73 0 008.261 15.888 7.715 7.715 90 009.861 15.721.45.45 0 0010.21 15.363L10.541 13.563A.89.89 0 0110.579 13.422.902.902 90 0111.731 12.879L13.458 13.494A.45.45 0 0013.944 13.372 7.61 7.61 0 0015.548 10.61C15.604 10.437 15.55 10.248 15.411 10.131L14.01 8.946A.89.89 90 0113.906 8.843C13.584 8.466 13.63 7.9 14.01 7.578L15.411 6.393A.45.45 0 0015.548 5.913C15.215 4.889 14.667 3.948 13.944 3.151A.45.45 0 0013.458 3.029L11.729 3.644A.902.902 90 0111.588 3.682ZM3.177 4.42 4.368 4.843A2.173 2.173 90 007.141 3.533C7.18 3.422 7.212 3.308 7.232 3.191L7.457 1.958A6.49 6.49 0 018.262 1.908 6.47 6.47 0 019.065 1.958L9.291 3.191A2.173 2.173 90 0011.816 4.934C11.932 4.912 12.046 4.883 12.157 4.842L13.348 4.419A6.342 6.342 90 0114.149 5.796L13.189 6.607C12.273 7.381 12.16 8.752 12.939 9.666A2.161 2.161 90 0013.189 9.915L14.147 10.726A6.342 6.342 90 0113.346 12.103L12.155 11.678A2.173 2.173 90 009.382 12.988 2.08 2.08 0 009.291 13.33L9.065 14.563A6.482 6.482 90 018.262 14.613 6.5 6.5 0 017.458 14.563L7.233 13.33A2.173 2.173 90 004.708 11.587C4.592 11.609 4.478 11.638 4.367 11.678L3.176 12.101A6.32 6.32 0 012.375 10.725L3.333 9.914C4.249 9.14 4.363 7.769 3.583 6.855 3.507 6.765 3.423 6.682 3.333 6.606L2.375 5.795A6.29 6.29 0 013.176 4.419Z"/></svg>`;

	new Spicetify.Topbar.Button(
		"Theme Settings",
		settingsIcon,
		() => {
			Spicetify.PopupModal.display({
				title: "Theme Settings",
				content: content,
				isLarge: true,
			});

			const headerContainer = createElement("div", "main-trackCreditsModal-btnContainer")
			const closeButton = document.querySelector(".main-trackCreditsModal-closeBtn");
			const header = document.querySelector(".main-trackCreditsModal-header");
			const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			svgElement.setAttribute("width", "18");
			svgElement.setAttribute("height", "18");
			svgElement.setAttribute("viewBox", "0 0 32 32");
			svgElement.setAttribute("fill", "currentColor");
			svgElement.innerHTML = `<path d="M16 0c8.84 0 16 7.16 16 16a16.026 16.026 90 01-10.9 15.18c-.8.16-1.1-.34-1.1-.76 0-.54.02-2.26.02-4.4 0-1.5-.5-2.46-1.08-2.96 3.56-.4 7.3-1.76 7.3-7.9 0-1.76-.62-3.18-1.64-4.3.16-.4.72-2.04-.16-4.24 0 0-1.34-.44-4.4 1.64-1.28-.36-2.64-.54-4-.54-1.36 0-2.72.18-4 .54-3.06-2.06-4.4-1.64-4.4-1.64-.88 2.2-.32 3.84-.16 4.24-1.02 1.12-1.64 2.56-1.64 4.3 0 6.12 3.72 7.5 7.28 7.9-.46.4-.88 1.1-1.02 2.14-.92.42-3.22 1.1-4.66-1.32-.3-.48-1.2-1.66-2.46-1.64-1.34.02-.54.76.02 1.06.68.38 1.46 1.8 1.64 2.26.32.9 1.36 2.62 5.38 1.88 0 1.34.02 2.6.02 2.98 0 .42-.3.9-1.1.76A15.99 15.99 90 010 16c0-8.84 7.16-16 16-16Z"></path>`;
			const button = createButton("main-trackCreditsModal-closeBtn", "", () =>
				window.open("https://github.com/veryboringhwl/spicetify")
			);
			button.appendChild(svgElement);
			headerContainer.appendChild(button);
			headerContainer.appendChild(closeButton);
			header.appendChild(headerContainer);
		},
		false,
		true
	);
	updateCSS();
})();

// <path d="M8.262 5.72A2.542 2.542 90 108.262 10.804 2.542 2.542 90 108.262 5.72ZM6.991 8.262A1.271 1.271 90 119.533 8.262 1.271 1.271 90 116.991 8.262ZM11.59 3.684A.902.902 90 0110.543 2.962L10.212 1.162A.45.45 0 009.863.804 7.715 7.715 90 006.661.804.45.45 0 006.312 1.162L5.983 2.962A.89.89 0 015.945 3.103.902.902 90 014.793 3.646L3.064 3.03A.45.45 0 002.578 3.152 7.61 7.61 0 00.975 5.914C.919 6.087.972 6.276 1.112 6.394L2.513 7.579C2.55 7.611 2.585 7.645 2.616 7.682 2.938 8.06 2.892 8.625 2.512 8.947L1.111 10.132A.45.45 0 00.974 10.611C1.307 11.635 1.855 12.576 2.578 13.373A.45.45 0 003.064 13.495L4.793 12.88A.915.915 90 014.934 12.842.902.902 90 015.981 13.564L6.31 15.363A.45.45 0 006.66 15.721 7.73 7.73 0 008.261 15.888 7.715 7.715 90 009.861 15.721.45.45 0 0010.21 15.363L10.541 13.563A.89.89 0 0110.579 13.422.902.902 90 0111.731 12.879L13.458 13.494A.45.45 0 0013.944 13.372 7.61 7.61 0 0015.548 10.61C15.604 10.437 15.55 10.248 15.411 10.131L14.01 8.946A.89.89 90 0113.906 8.843C13.584 8.466 13.63 7.9 14.01 7.578L15.411 6.393A.45.45 0 0015.548 5.913C15.215 4.889 14.667 3.948 13.944 3.151A.45.45 0 0013.458 3.029L11.729 3.644A.902.902 90 0111.588 3.682ZM3.177 4.42 4.368 4.843A2.173 2.173 90 007.141 3.533C7.18 3.422 7.212 3.308 7.232 3.191L7.457 1.958A6.49 6.49 0 018.262 1.908 6.47 6.47 0 019.065 1.958L9.291 3.191A2.173 2.173 90 0011.816 4.934C11.932 4.912 12.046 4.883 12.157 4.842L13.348 4.419A6.342 6.342 90 0114.149 5.796L13.189 6.607C12.273 7.381 12.16 8.752 12.939 9.666A2.161 2.161 90 0013.189 9.915L14.147 10.726A6.342 6.342 90 0113.346 12.103L12.155 11.678A2.173 2.173 90 009.382 12.988 2.08 2.08 0 009.291 13.33L9.065 14.563A6.482 6.482 90 018.262 14.613 6.5 6.5 0 017.458 14.563L7.233 13.33A2.173 2.173 90 004.708 11.587C4.592 11.609 4.478 11.638 4.367 11.678L3.176 12.101A6.32 6.32 0 012.375 10.725L3.333 9.914C4.249 9.14 4.363 7.769 3.583 6.855 3.507 6.765 3.423 6.682 3.333 6.606L2.375 5.795A6.29 6.29 0 013.176 4.419Z"/>
