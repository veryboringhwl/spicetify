(function theme() {
	if (!(Spicetify.Player.data && Spicetify.Platform)) {
		setTimeout(theme, 100);
		return;
	}
	console.log("Theme: Initialised Spicetify Theme");

	const createElement = (tag, className, textContent = "") => {
		const element = document.createElement(tag);
		if (className) element.className = className;
		if (textContent) element.textContent = textContent;
		return element;
	};

	/*
	MARK: DYNAMIC LYRICS BACKGROUND
	*/

	const updateSong = () => {
		if (!Spicetify.Player.data) {
			setTimeout(updateSong, 100);
			return;
		}
		const img = Spicetify.Player.data.item.metadata.image_xlarge_url.replace(
			"spotify:image:",
			"https://i.scdn.co/image/"
		);
		document.documentElement.style.setProperty("--image", `url("${img}")`);
	};
	Spicetify.Player.addEventListener("songchange", updateSong);
	updateSong();

	function observeDOMChanges(selector, callback) {
		const targetNode = document.body;
		const config = { childList: true, subtree: true };
		const observer = new MutationObserver((mutationsList) => {
			for (let mutation of mutationsList) {
				if (mutation.type === 'childList') {
					document.querySelectorAll(selector).forEach((element) => {
						callback(element);
					});
				}
			}
		});
		observer.observe(targetNode, config);
		document.querySelectorAll(selector).forEach((element) => {
			callback(element);
		});
		return observer;
	}

	// observeDOMChanges(".playlist-playlist-playlistContent", (playlistbackground) => {
	// 	if (!playlistbackground.querySelector(".playlist-playlist-background")) {
	// 		playlistbackground.appendChild(createElement("div", "playlist-playlist-background"));
	// 	}
	// });

	observeDOMChanges(".lyrics-lyricsContainer-LyricsBackground", (lyricsBackground) => {
		if (!lyricsBackground.querySelector(".lyrics-lyricsContainer-BackgroundBlur")) {
			lyricsBackground.appendChild(createElement("div", "lyrics-lyricsContainer-BackgroundBlur"));
		}
	});

	/*
	MARK: NAVBAR INDICATOR
	*/

	const waitForElements = (selectors, callback, timeout = 100) => {
		const elements = selectors.map((selector) =>
			document.querySelector(selector)
		);
		if (elements.every(Boolean)) {
			callback(elements);
		} else if (timeout > 0) {
			setTimeout(waitForElements, 300, selectors, callback, timeout - 1);
		}
	};

	waitForElements([".main-yourLibraryX-navItem"], () => {
		document
			.querySelectorAll(".main-yourLibraryX-navItem .main-yourLibraryX-navLink")
			.forEach((navItem) => {
				if (!navItem.querySelector(".main-yourLibraryX-navLink-accent")) {
					navItem.appendChild(
						createElement("div", "main-yourLibraryX-navLink-accent")
					);
				}
			});
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
			const { outerWidth, innerWidth, devicePixelRatio } = window;
			if (
				prevOuterWidth !== outerWidth ||
				prevInnerWidth !== innerWidth ||
				prevRatio !== devicePixelRatio
			) {
				const modified = outerWidth / innerWidth || 1;
				document.documentElement.style.setProperty("--zoom", modified);
				console.log(
					`Theme: Zoom updated: ${outerWidth} / ${innerWidth} = ${modified}`
				);
				[prevOuterWidth, prevInnerWidth, prevRatio] = [
					outerWidth,
					innerWidth,
					devicePixelRatio,
				];
			}
			requestAnimationFrame(checkChanges);
		}
		checkChanges();
	}
	updateZoomVariable();

	/*
	MARK: THEME SETTINGS
	*/

	const createTippy = (element, content) => {
		if (content) {
			Spicetify.Tippy(element, {
				...Spicetify.TippyProps,
				content,
				placement: "top-start",
				delay: [0, 0],
				offset: [-40, 0],
				onShow(instance) {
					instance.popper.classList.add("options-tippy");
				},
			});
		}
	};

	const updateCSS = () => {
		options.forEach(({ name, type }) => {
			if (type === 'toggle') {
				document.body.classList.toggle(name, JSON.parse(localStorage.getItem(`theme:${name}`)));
			}
		});
	};

	const saveOptions = async (settings) => {
		for (const option of options) {
			const key = `theme:${option.name}`;
			await option.run?.(settings[key]);
			localStorage.setItem(key, JSON.stringify(settings[key]));
		}
		updateCSS(options);
	};

	const ConfirmDialog = Spicetify.React.memo(({ titleText, descriptionText, cancelText, confirmText, onOpen, onClose, onConfirm }) => {
		const [isOpen, setIsOpen] = Spicetify.React.useState(true);
		const self = document.querySelector('.Spicetify.ReactModalPortal:last-of-type');
		const { ConfirmDialog: SpicetifyConfirmDialog } = Spicetify.ReactComponent;

		const handleClose = () => {
			setIsOpen(false);
			onClose?.();
			self.remove();
		};

		const handleConfirm = () => {
			setIsOpen(false);
			onConfirm?.();
			self.remove();
		};

		Spicetify.React.useEffect(() => {
			if (isOpen) onOpen?.();
		}, [isOpen, onOpen]);

		const commonProps = {
			titleText,
			descriptionText,
			cancelText,
			confirmText,
			isOpen,
			onClose: handleClose,
			onConfirm: handleConfirm,
		};

		return typeof SpicetifyConfirmDialog === 'function'
			? SpicetifyConfirmDialog(commonProps)
			: Spicetify.React.createElement(SpicetifyConfirmDialog, commonProps);
	});

	const resetOptions = (setSettings) => {
		const settings = document.querySelector('.GenericModal__overlay');
		Spicetify.ReactDOM.render(
			Spicetify.React.createElement(
				Spicetify.ReactComponent.RemoteConfigProvider,
				{ configuration: Spicetify.Platform.RemoteConfiguration },
				Spicetify.React.createElement(ConfirmDialog, {
					titleText: "Are you sure?",
					descriptionText: "This will reset all settings to default!",
					cancelText: "Cancel",
					confirmText: "Reset",
					onOpen: () => {
						settings.style.zIndex = 0;
					},
					onClose: () => {
						settings.style.zIndex = 100;
					},
					onConfirm: () => {
						console.log('Theme: Restored to default');
						const defaultSettings = {};
						options.forEach((option) => {
							const prefixedName = `theme:${option.name}`;
							defaultSettings[prefixedName] = option.defaultValue;
							localStorage.setItem(prefixedName, JSON.stringify(option.defaultValue));
							option.run?.(option.defaultValue);
						});
						setSettings(defaultSettings);
						updateCSS(options);
					},
				})
			),
			document.createElement('div')
		);
	};

	const CategoryCarousel = Spicetify.React.memo(({ categories, onCategoryClick }) => {
		const carouselRef = Spicetify.React.useRef(null);

		Spicetify.React.useEffect(() => {
			const handleWheel = (e) => {
				if (carouselRef.current) {
					carouselRef.current.scrollLeft += e.deltaY;
					e.preventDefault();
				}
	};

			const carousel = carouselRef.current;
			if (carousel) {
				carousel.addEventListener('wheel', handleWheel, { passive: false });
				return () => carousel.removeEventListener('wheel', handleWheel);
			}
		}, []);

		const buttonWidth = `calc((100% - ${(categories.length - 1) * 8}px) / ${categories.length})`;

		return Spicetify.React.createElement(
			"div",
			{ className: "category-carousel-container" },
			Spicetify.React.createElement(
				"div",
				{ className: "category-carousel", ref: carouselRef },
				categories.map((category, index) =>
					Spicetify.React.createElement(
						"button",
						{
							key: category,
							className: "category-button",
							onClick: () => onCategoryClick(category),
							style: {
								width: buttonWidth,
								marginRight: index < categories.length - 1 ? '8px' : '0'
							}
						},
						category
					)
				)
			)
		);
	});

	const OptionRow = Spicetify.React.memo(({ option, settings, onSettingChange }) => {
		const { type, name, desc, defaultValue, options: dropdownOptions, tippy } = option;
		const prefixedName = `theme:${name}`;
		const controlRef = Spicetify.React.useRef(null);

		Spicetify.React.useEffect(() => {
			if (controlRef.current && tippy) createTippy(controlRef.current, tippy);
		}, [tippy]);

		const handleChange = Spicetify.React.useCallback((value) => {
			onSettingChange(prefixedName, value);
		}, [prefixedName, onSettingChange]);

		const renderControl = () => {
		switch (type) {
			case "toggle":
					return Spicetify.React.createElement(
						"button",
						{
							className: "themeOptionToggle",
							onClick: () => handleChange(!settings[prefixedName])
						},
						Spicetify.React.createElement(
							"span",
							{ className: "toggleWrapper" },
							Spicetify.React.createElement("span", {
								className: `toggle ${settings[prefixedName] ? "enabled" : ""}`
							})
						)
					);
			case "dropdown":
					return Spicetify.React.createElement(
						"select",
						{
							className: "themeOptionDropdown",
							value: settings[prefixedName],
							onChange: (e) => handleChange(e.target.value)
						},
						dropdownOptions.map(({ value, label }) =>
							Spicetify.React.createElement("option", { key: value, value }, label)
						)
					);
			case "input":
					return Spicetify.React.createElement("input", {
						className: "themeOptionInput",
						type: "text",
						value: settings[prefixedName],
						onChange: (e) => handleChange(e.target.value)
					});
				default:
					throw new Error(`Unknown control type: ${type}`);
			}
		};

		return Spicetify.React.createElement(
			"div",
			{
				className: "themeOptionRow",
				"data-name": prefixedName,
				"data-default": JSON.stringify(defaultValue),
				ref: controlRef
			},
			Spicetify.React.createElement(
				"div",
				{ className: "themeOptionContent" },
				Spicetify.React.createElement("div", { className: "themeOptionName" }, name),
				Spicetify.React.createElement("div", { className: "themeOptionDesc" }, desc)
			),
			Spicetify.React.createElement("div", { className: "themeOptionControl" }, renderControl())
		);
		});

	const CategorySection = Spicetify.React.memo(({ category, options, settings, onSettingChange }) => {
		const [isExpanded, setIsExpanded] = Spicetify.React.useState(true);

		const toggleExpanded = () => setIsExpanded(!isExpanded);

		return Spicetify.React.createElement(
			"div",
			{ className: `categorySection ${isExpanded ? 'expanded' : 'collapsed'}` },
			Spicetify.React.createElement(
				"div",
				{ className: "categoryHeader", onClick: toggleExpanded },
				Spicetify.React.createElement("h2", { className: "themeHeader" }, category),
				Spicetify.React.createElement(
					"span",
					{ className: "expandIcon" },
					isExpanded ? "▼" : "▶"
				)
			),
			isExpanded && Spicetify.React.createElement(
				"div",
				{ className: "categoryContent" },
				options.map((option) =>
					Spicetify.React.createElement(OptionRow, {
						key: option.name,
						option: option,
						settings: settings,
						onSettingChange: onSettingChange
					})
				)
			)
		);
	});

	/*
	MARK: CONTENT
	*/

	const Content = () => {
		const [settings, setSettings] = Spicetify.React.useState({});
		const categoryRefs = Spicetify.React.useRef({});

		Spicetify.React.useEffect(() => {
			const loadedSettings = Object.fromEntries(
				options.map(({ name, defaultValue }) => [
					`theme:${name}`,
					JSON.parse(localStorage.getItem(`theme:${name}`)) ?? defaultValue
				])
			);
			setSettings(loadedSettings);
			updateCSS();
		}, []);

		const categorizedOptions = Spicetify.React.useMemo(() => {
			return options.reduce((acc, option) => {
				(acc[option.category] ??= []).push(option);
				return acc;
			}, {});
		}, []);

		const handleSettingChange = (key, value) => {
			setSettings(prev => ({ ...prev, [key]: value }));
		};

		const scrollToCategory = (category) => {
			categoryRefs.current[category]?.scrollIntoView({ behavior: 'smooth' });
		};

		return Spicetify.React.createElement(
			"div",
			{ className: "themeContainer" },
			Spicetify.React.createElement(CategoryCarousel, {
				categories: Object.keys(categorizedOptions),
				onCategoryClick: scrollToCategory
			}),
			Spicetify.React.createElement(
				"div",
				{ className: "optionContainer" },
				Object.entries(categorizedOptions).map(([category, categoryOptions]) =>
					Spicetify.React.createElement(
						"div",
						{
							key: category,
							className: `${category.toLowerCase()}Container`,
							ref: el => categoryRefs.current[category] = el
						},
						Spicetify.React.createElement(CategorySection, {
							category: category,
							options: categoryOptions,
							settings: settings,
							onSettingChange: handleSettingChange
						})
					)
				)
			),
			Spicetify.React.createElement(
				"div",
				{ className: "buttonContainer" },
				Spicetify.React.createElement("button", { className: "resetButton", onClick: () => resetOptions(setSettings) }, "Reset"),
				Spicetify.React.createElement("button", { className: "saveButton", onClick: () => saveOptions(settings) }, "Save")
			)
		);
	};

	const options = [
		{
			type: "input",
			category: "test",
			name: "test-input",
			desc: "Does something",
			defaultValue: 1,
		},
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
			desc: "Makes left sidebar go in front of the now playing bar",
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
			desc: "Highlights navlink background on hover/active",
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
			defaultValue: "Both",
			tippy: "Only takes effect after a restart",
			options: [
				{ value: "Normal", label: "Normal" },
				{ value: "Developer", label: "Developer" },
				{ value: "Employee", label: "Employee" },
				{ value: "Both", label: "Both (Dev + Empl)" },
			],
			run: (value) => {
				changeSpotifyMode(value);
				console.log("changed to", value);
			},
		},
	];

	/*
	MARK: FUNCTIONS
	*/

	let appDevListener, employeeListener;
	async function changeSpotifyMode(mode) {
		const productState = Spicetify.Platform.UserAPI._product_state_service;
		const modePairs = {
			Normal: { "app-developer": "0", employee: "0" },
			Developer: { "app-developer": "2", employee: "0" },
			Employee: { "app-developer": "0", employee: "1" },
			Both: { "app-developer": "2", employee: "1" },
		};
		const pairs = modePairs[mode] || modePairs.Normal;

		const setMode = async (key, value) => {
			await productState.putValues({ pairs: { [key]: value } });
			return productState.subValues({ keys: [key] }, () => {
				productState.putValues({ pairs: { [key]: value } });
			});
		};
		if (appDevListener) {
			appDevListener.cancel();
		}
		if (employeeListener) {
			employeeListener.cancel();
		}
		appDevListener = await setMode("app-developer", pairs["app-developer"]);
		employeeListener = await setMode("employee", pairs["employee"]);
		const currentState = await productState.getValues();
		console.log("Current Spotify mode state:", currentState);
	}

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
