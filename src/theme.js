(async function theme() {
	console.log("Theme: Loading Spicetify theme")
	if (
		!(
			Spicetify.Platform &&
			Spicetify.React &&
			Spicetify.ReactDOM
		)
	) {
		setTimeout(theme, 100);
		return;
	}
	console.log("Theme: Initialising Spicetify Theme");

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

	const initialiseSettings = () => {
		const loadedSettings = Object.fromEntries(
			options.map(({ name, defaultValue }) => [
				`theme:${name}`,
				JSON.parse(localStorage.getItem(`theme:${name}`)) ?? defaultValue
			])
		);
		applySettings(loadedSettings);
		return loadedSettings;
	};

	const applySettings = (settings) => {
		options.forEach(option => {
			const key = `theme:${option.name}`;
			const value = settings[key];
			if (option.type === 'toggle') {
				document.body.classList.toggle(option.name, value);
			}
		});
	};

	const saveOptions = async (settings) => {
		for (const option of options) {
			const key = `theme:${option.name}`;
			const value = settings[key];
			if (option.run) {
				await option.run(value);
			}
			localStorage.setItem(key, JSON.stringify(value));
		}
		applySettings(settings);
	};


	const resetOptions = (setSettings) => {
		console.log('Theme: Restored to default');
		const defaultSettings = {};
		options.forEach((option) => {
			const prefixedName = `theme:${option.name}`;
			defaultSettings[prefixedName] = option.defaultValue;
			localStorage.setItem(prefixedName, JSON.stringify(option.defaultValue));
			option.run?.(option.defaultValue);
		});
		setSettings(defaultSettings);
		applySettings(defaultSettings);
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

		const buttonWidth = Spicetify.React.useMemo(() =>
			`calc((100% - ${(categories.length - 1) * 8}px) / ${categories.length})`,
			[categories.length]);

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

		const handleChange = (value) => {
			onSettingChange(prefixedName, value);
		};

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

	const Content = Spicetify.React.memo(() => {
		const [settings, setSettings] = Spicetify.React.useState(initialiseSettings());
		const categoryRefs = Spicetify.React.useRef({});

		Spicetify.React.useEffect(() => {
			const loadedSettings = Object.fromEntries(
				options.map(({ name, defaultValue }) => [
					`theme:${name}`,
					JSON.parse(localStorage.getItem(`theme:${name}`)) ?? defaultValue
				])
			);
			setSettings(loadedSettings);
			applySettings(loadedSettings);
		}, []);

		const categorizedOptions = Spicetify.React.useMemo(() => {
			return options.reduce((acc, option) => {
				(acc[option.category] ??= []).push(option);
				return acc;
			}, {});
		}, []);

		const handleSettingChange = Spicetify.React.useCallback((key, value) => {
			setSettings(prev => ({ ...prev, [key]: value }));
		}, []);

		const scrollToCategory = Spicetify.React.useCallback((category) => {
			categoryRefs.current[category]?.scrollIntoView({ behavior: 'smooth' });
		}, []);

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
	});

	/*
	MARK: OPTIONS
	*/

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
			name: "LibX",
			desc: "Brings back old ui",
			defaultValue: false,
			revealOptions: ["HighlightNav"],
			run: (value) => {
				toggleLibXUI(value);
			},

		},
		{
			type: "toggle",
			category: "Layouts",
			name: "highlightnav",
			desc: "Removes coloured gradient from the home page header",
			defaultValue: true,
		},
		{
			type: "toggle",
			category: "Layouts",
			name: "PreLibX",
			desc: "Brings back old ui ()",
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
			category: "ea",
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
			category: "Misc",
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


	function toggleLibXUI(isEnabled) {
		addLibXText(isEnabled);
		adjustLibXWidth(isEnabled);
	}

	function adjustLibXWidth(isEnabled) {
		let globalNavObserver;
		const globalNavElement = document.querySelector('.Root__globalNav');

		if (!globalNavElement) return;

		function updateWidth() {
			const sikBfynLExists = !!document.querySelector(".sikBfynL1Y6I25nVpbAg");
			globalNavElement.style.width = isEnabled && sikBfynLExists ? '72px' : '';
		}
		function startObserving() {
			const sikBfynL = document.querySelector(".sikBfynL1Y6I25nVpbAg");
			const targetNode = sikBfynL?.parentNode || globalNavElement;
			if (!globalNavObserver) {
				globalNavObserver = new MutationObserver(updateWidth);
				} else {
				globalNavObserver.disconnect();
			}
			globalNavObserver.observe(targetNode, { childList: true, subtree: true });
			updateWidth();
		}
		startObserving();
		const rootNavObserver = new MutationObserver(startObserving);
		rootNavObserver.observe(globalNavElement, { childList: true, subtree: true });
	}

	let textObserver;
	function addLibXText(isEnabled) {
		const globalNav = document.querySelector('.Root__globalNav');
		if (!globalNav) return;

		function addTextToButtons() {
			const elements = document.querySelectorAll('.Root__globalNav .search-searchCategory-categoryGrid > div > button, .Root__globalNav .main-globalNav-searchContainer > .main-globalNav-link-icon, .Root__globalNav .main-globalNav-searchInputSection');
			elements.forEach(el => {
				if (!el.querySelector('.main-globalNav-textWrapper')) {
					const text = el.getAttribute('aria-label') || (el.querySelector('input') ? 'Search' : '');
					const wrapper = document.createElement('span');
					wrapper.className = 'main-globalNav-textWrapper';
					wrapper.innerHTML = `<div class="main-globalNav-iconText encore-text encore-text-body-medium-bold">${text}</div>`;
					el.appendChild(wrapper);
				}
			});
		}

		function removeAddedText() {
			const wrappers = document.querySelectorAll('.main-globalNav-textWrapper');
			wrappers.forEach(el => el.remove());
		}

		if (isEnabled) {
			addTextToButtons();
			globalNav.classList.add('global-libraryX');
			if (textObserver) {
				textObserver.disconnect();
			}
			textObserver = new MutationObserver(addTextToButtons);
			textObserver.observe(globalNav, { childList: true, subtree: true });
		} else {
			removeAddedText();
			globalNav.classList.remove('global-libraryX');
			if (textObserver) {
				textObserver.disconnect();
				textObserver = null;
			}
		}
	}

	async function changeSpotifyMode(mode) {
		const modePairs = {
			Normal: { "app-developer": "0", employee: "0" },
			Developer: { "app-developer": "2", employee: "0" },
			Employee: { "app-developer": "0", employee: "1" },
			Both: { "app-developer": "2", employee: "1" },
		};
		const pairs = modePairs[mode] || modePairs.Normal;
		const setMode = async (key, value) => {
			await Spicetify.Platform.UserAPI._product_state_service.putValues({ pairs: { [key]: value } });

			return Spicetify.Platform.UserAPI._product_state_service.subValues({ keys: [key] }, async (newValues) => {
				if (newValues[key] !== value) {
					await Spicetify.Platform.UserAPI._product_state_service.putValues({ pairs: { [key]: value } });
				}
			});
		};
		if (window.appDevListener) {
			await window.appDevListener.cancel();
		}
		if (window.employeeListener) {
			await window.employeeListener.cancel();
		}
		window.appDevListener = await setMode("app-developer", pairs["app-developer"]);
		window.employeeListener = await setMode("employee", pairs["employee"]);
	}

	/*
	MARK: TOPBAR BUTTON
	*/

	const settingsIcon = `<svg viewBox="0 0 16 16" width="16px" height="16px" fill="currentcolor"><path d="M8.04 5.36a2.68 2.68 90 100 5.36 2.68 2.68 90 000-5.36zM6.7 8.04a1.34 1.34 90 112.68 0 1.34 1.34 90 01-2.68 0zM11.5481 3.2133a.9487.9487 90 01-1.1042-.7598l-.3484-1.8974a.4744.4744 90 00-.3685-.3779 8.1365 8.1365 90 00-3.3755 0 .4744.4744 90 00-.3685.3779l-.3471 1.8974a.9514.9514 90 01-1.2542.7209l-1.8211-.6486a.4757.4757 90 00-.5119.1273c-.7625.8402-1.34 1.8318-1.6911 2.9118a.4717.4717 90 00.1447.5065l1.4767 1.2475a.9434.9434 90 010 1.4418l-1.4767 1.2475a.4717.4717 90 00-.1447.5065A8.0212 8.0212 90 002.0502 13.4268a.4757.4757 90 00.5119.1273l1.8224-.6486a.9487.9487 90 011.2542.7209l.3457 1.8974c.0348.1876.1809.3377.3685.3765a8.1405 8.1405 90 003.3768 0 .473.473 90 00.3672-.3765l.3484-1.8974a.9514.9514 90 011.2542-.7209l1.8211.6486c.1809.0643.3832.0134.5119-.1273.7625-.8402 1.34-1.8318 1.6911-2.9118a.4717.4717 90 00-.1447-.5065l-1.4767-1.2475a.942.942 90 010-1.4418l1.4767-1.2475a.4717.4717 90 00.1447-.5065A8.0199 8.0199 90 0014.0298 2.6532a.4757.4757 90 00-.5119-.1273l-1.8224.6486a.9514.9514 90 01-.1487.0402zm-8.8708.7772 1.2556.4462a2.2914 2.2914 90 003.0217-1.742l.2372-1.2998a6.8407 6.8407 90 011.6951 0l.2385 1.2998a2.2887 2.2887 90 003.0217 1.742L13.4 3.9892c.3417.4476.6258.9353.8442 1.4526l-1.0104.8536a2.2834 2.2834 90 000 3.4894l1.0117.8536a6.6866 6.6866 90 01-.8442 1.4526l-1.2556-.4476a2.2914 2.2914 90 00-3.0217 1.742l-.2385 1.2998a6.8327 6.8327 90 01-1.6951 0l-.2372-1.2998a2.2887 2.2887 90 00-3.0217-1.742L2.68 12.0908a6.6826 6.6826 90 01-.8442-1.4526l1.0104-.8549a2.2834 2.2834 90 000-3.488l-1.0117-.8536c.2198-.5172.5038-1.005.8442-1.4526z"/></svg>`;

	new Spicetify.Topbar.Button(
		"Theme Settings",
		settingsIcon,
		() => {
			Spicetify.PopupModal.display({
				title: "Theme Settings",
				content: Spicetify.React.createElement(Content),
				isLarge: true,
			});

			const header = document.querySelector(".main-trackCreditsModal-header");
			const closeButton = document.querySelector(".main-trackCreditsModal-closeBtn");
			const buttonContainer = document.createElement("div");
			buttonContainer.className = "main-trackCreditsModal-BtnContainer";

			const githubButton = Spicetify.React.createElement(
				"button",
				{
					className: "main-trackCreditsModal-githubBtn",
					onClick: () => window.open("https://github.com/veryboringhwl/spicetify"),
				},
				Spicetify.React.createElement("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 96 96",
					fill: "currentColor",
					dangerouslySetInnerHTML: {
						__html: `<path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"></path>`,
					},
				})
			);

			Spicetify.ReactDOM.render(githubButton, buttonContainer);
			buttonContainer.appendChild(closeButton);
			header.appendChild(buttonContainer);
		},
		false,
		true
	);

	initialiseSettings();
	console.log("Theme: Spicetify theme initialised")
})();

// <path d="M8.262 5.72A2.542 2.542 90 108.262 10.804 2.542 2.542 90 108.262 5.72ZM6.991 8.262A1.271 1.271 90 119.533 8.262 1.271 1.271 90 116.991 8.262ZM11.59 3.684A.902.902 90 0110.543 2.962L10.212 1.162A.45.45 0 009.863.804 7.715 7.715 90 006.661.804.45.45 0 006.312 1.162L5.983 2.962A.89.89 0 015.945 3.103.902.902 90 014.793 3.646L3.064 3.03A.45.45 0 002.578 3.152 7.61 7.61 0 00.975 5.914C.919 6.087.972 6.276 1.112 6.394L2.513 7.579C2.55 7.611 2.585 7.645 2.616 7.682 2.938 8.06 2.892 8.625 2.512 8.947L1.111 10.132A.45.45 0 00.974 10.611C1.307 11.635 1.855 12.576 2.578 13.373A.45.45 0 003.064 13.495L4.793 12.88A.915.915 90 014.934 12.842.902.902 90 015.981 13.564L6.31 15.363A.45.45 0 006.66 15.721 7.73 7.73 0 008.261 15.888 7.715 7.715 90 009.861 15.721.45.45 0 0010.21 15.363L10.541 13.563A.89.89 0 0110.579 13.422.902.902 90 0111.731 12.879L13.458 13.494A.45.45 0 0013.944 13.372 7.61 7.61 0 0015.548 10.61C15.604 10.437 15.55 10.248 15.411 10.131L14.01 8.946A.89.89 90 0113.906 8.843C13.584 8.466 13.63 7.9 14.01 7.578L15.411 6.393A.45.45 0 0015.548 5.913C15.215 4.889 14.667 3.948 13.944 3.151A.45.45 0 0013.458 3.029L11.729 3.644A.902.902 90 0111.588 3.682ZM3.177 4.42 4.368 4.843A2.173 2.173 90 007.141 3.533C7.18 3.422 7.212 3.308 7.232 3.191L7.457 1.958A6.49 6.49 0 018.262 1.908 6.47 6.47 0 019.065 1.958L9.291 3.191A2.173 2.173 90 0011.816 4.934C11.932 4.912 12.046 4.883 12.157 4.842L13.348 4.419A6.342 6.342 90 0114.149 5.796L13.189 6.607C12.273 7.381 12.16 8.752 12.939 9.666A2.161 2.161 90 0013.189 9.915L14.147 10.726A6.342 6.342 90 0113.346 12.103L12.155 11.678A2.173 2.173 90 009.382 12.988 2.08 2.08 0 009.291 13.33L9.065 14.563A6.482 6.482 90 018.262 14.613 6.5 6.5 0 017.458 14.563L7.233 13.33A2.173 2.173 90 004.708 11.587C4.592 11.609 4.478 11.638 4.367 11.678L3.176 12.101A6.32 6.32 0 012.375 10.725L3.333 9.914C4.249 9.14 4.363 7.769 3.583 6.855 3.507 6.765 3.423 6.682 3.333 6.606L2.375 5.795A6.29 6.29 0 013.176 4.419Z"/>
