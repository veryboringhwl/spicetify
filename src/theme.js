console.log("%c[Theme]", "color:#b3ebf2;", "Running Spicetify theme");
(async function theme() {
	if (!(Spicetify.Platform && Spicetify.React && Spicetify.ReactDOM)) {
		setTimeout(theme, 100);
		return;
	}
	console.log("%c[Theme]", "color:#b3ebf2;", "Initialising Spicetify theme");

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
	MARK: FUNCTIONS
	*/

	/*
	MARK: COVER ART BANNER
	*/

	const coverArtBanner = () => {
		if (!Spicetify.Player.data?.item) {
			setTimeout(coverArtBanner, 100);
			return;
		}

		const channels = {
			Album: { regex: /^\/album\//, key: 'theme:AlbumPage', fallback: false },
			Artist: { regex: /^\/artist\/(?!artists\b)\w+$/, key: 'theme:ArtistPage', fallback: false },
			Lyrics: { regex: /^\/lyrics$/, key: 'theme:LyricsPage', fallback: true },
			"Lyrics-Plus": { regex: /^\/lyrics-plus$/, key: 'theme:LyricsPage', fallback: true },
			Playlist: { regex: /^\/playlist\//, key: 'theme:PlaylistPage', fallback: true },
			Station: { regex: /^\/station\/playlist\//, key: 'theme:MiscPage', fallback: false },
			Collection: { regex: /^\/collection\/tracks$/, key: 'theme:MiscPage', fallback: false },
			Show: { regex: /^\/show\//, key: 'theme:MiscPage', fallback: false },
			Episode: { regex: /^\/episode\//, key: 'theme:MiscPage', fallback: false },
			User: { regex: /^\/user\/(?!users\b)\w+$/, key: 'theme:MiscPage', fallback: false },
			Genre: { regex: /^\/genre\//, key: 'theme:MiscPage', fallback: false }
		};

		const banner = document.querySelector(".banner-image") || (() => {
			const newBanner = document.createElement("div");
			newBanner.className = "banner-image";
			document.querySelector(".under-main-view")?.appendChild(newBanner);
			return newBanner;
			})();

		const updateBanner = () => {
			const { pathname } = Spicetify.Platform.History.location;
			const { image_xlarge_url: imageUrl } = Spicetify.Player.data.item.metadata;

			const showBanner = Object.values(channels).some(
				({ regex, key }) => getLocalStorage(key, false) && regex.test(pathname)
			);

			if (showBanner && imageUrl) {
				banner.style.display = "";
				const img = new Image();
				img.src = imageUrl;
				img.onload = () => document.documentElement.style.setProperty("--image", `url(${imageUrl})`);
			} else {
				banner.style.display = "none";
			}
		};

		Spicetify.Platform.History.listen(updateBanner);
		Spicetify.Player.addEventListener("songchange", updateBanner);
		updateBanner();
	};

	/*
	MARK: SELECT COLOUR SCHEMES
	*/

	function toggleLibXUI(isEnabled) {
		const globalNav = document.querySelector(".Root__globalNav");
		if (!globalNav) return;

		showLibXUI(isEnabled, globalNav);
	}

	let textObserver;

	function showLibXUI(isEnabled, globalNav) {
		function addContainerClass(isEnabled, globalNav) {
			const addCollapsed = () => {
				const elementToWatch = document.querySelector(".sikBfynL1Y6I25nVpbAg");
				globalNav.classList.toggle("collapsed", isEnabled && elementToWatch);
			};
			const observer = new MutationObserver(addCollapsed);
			observer.observe(document.body, { childList: true, subtree: true });
			addCollapsed();
		}

		const addLibXText = (isEnabled, globalNav) => {
			const addTextToButtons = () => {
				const elements = globalNav.querySelectorAll(
					".search-searchCategory-categoryGrid > div > button,.main-globalNav-searchContainer > .main-globalNav-link-icon, ._b3hhmbWtOY8_1M1mM1H",
				);
				for (const el of elements) {
					if (!el.querySelector(".main-globalNav-textWrapper")) {
						const text =
							el.getAttribute("aria-label") ||
							(el.querySelector("input") ? "Search" : "");
						el.insertAdjacentHTML(
							"beforeend",
							`
							<span class="main-globalNav-textWrapper">
								<div class="main-globalNav-iconText encore-text-body-medium-bold">${text}</div>
							</span>
						`,
						);
					}
				}
			};

			if (isEnabled) {
				addTextToButtons();
				globalNav.classList.add("global-libraryX");
				textObserver?.disconnect();
				textObserver = new MutationObserver(addTextToButtons);
				textObserver.observe(globalNav, { childList: true, subtree: true });
			} else {
				const textWrappers = globalNav.querySelectorAll(
					".main-globalNav-textWrapper",
				);
				for (const el of textWrappers) {
					el.remove();
				}
				globalNav.classList.remove("global-libraryX");
				textObserver?.disconnect();
				textObserver = null;
			}
		};

		addLibXText(isEnabled, globalNav);
		addContainerClass(isEnabled, globalNav);
	}

	/*
	MARK: CHANGE SPOTIFY MODE
	*/

	const changeSpotifyMode = async (mode) => {
		if (!Spicetify.Platform.UserAPI._product_state_service) {
			setTimeout(() => changeSpotifyMode(mode), 100);
			return;
		}

		const modePairs = {
			default: { "app-developer": "0", employee: "0" },
			developer: { "app-developer": "2", employee: "0" },
			employee: { "app-developer": "0", employee: "1" },
			both: { "app-developer": "2", employee: "1" },
		};

		const pairs = modePairs[mode] || modePairs.default;

		const setMode = async (key, value) => {
			await Spicetify.Platform.UserAPI._product_state_service.putValues({
				pairs: { [key]: value },
			});
			return Spicetify.Platform.UserAPI._product_state_service.subValues(
				{ keys: [key] },
				async (newValues) => {
				if (newValues[key] !== value) {
						await Spicetify.Platform.UserAPI._product_state_service.putValues({
							pairs: { [key]: value },
						});
				}
				},
			);
		};

		window.appDevListener?.cancel();
		window.employeeListener?.cancel();
		window.appDevListener = await setMode(
			"app-developer",
			pairs["app-developer"],
		);
		window.employeeListener = await setMode("employee", pairs["employee"]);
	};

	/*
	MARK: THEME COMPONENTS
	*/

	const OptionRow = Spicetify.React.memo(({ name, desc, tippy, children }) => {
		const controlRef = Spicetify.React.useRef(null);

		Spicetify.React.useEffect(() => {
			if (controlRef.current && tippy) createTippy(controlRef.current, tippy);
		}, [tippy]);

		return Spicetify.React.createElement(
			"div",
			{
			className: "themeOptionRow",
			"data-name": `theme:${name}`,
				ref: controlRef,
		},
			Spicetify.React.createElement(
				"div",
				{ className: "themeOptionContent" },
				Spicetify.React.createElement("div", { className: "themeOptionName" }, name),
				Spicetify.React.createElement("div", { className: "themeOptionDesc" }, desc)
			),
			Spicetify.React.createElement("div", { className: "themeOptionControl" }, children)
		);
	});

	const Toggle = Spicetify.React.memo(({ name, desc, tippy, value, onChange }) => {
		return Spicetify.React.createElement(
			OptionRow,
			{ name, desc, tippy },
			Spicetify.React.createElement(
				"button",
				{
				className: "themeOptionToggle",
					onClick: () => onChange(`theme:${name}`, !value),
			},
				Spicetify.React.createElement(
					"span",
					{ className: "toggleWrapper" },
					Spicetify.React.createElement("span", {
						className: `toggle ${value ? "enabled" : ""}`,
					}),
				),
			),
		);
	});

	const Dropdown = Spicetify.React.memo(({ name, desc, tippy, value, options, onChange }) => {
		return Spicetify.React.createElement(
			OptionRow,
			{ name, desc, tippy },
			Spicetify.React.createElement(
				"select",
				{
				className: "themeOptionDropdown",
				value: value,
					onChange: (e) => onChange(`theme:${name}`, e.target.value),
				},
				options.map(({ value, label }) =>
					Spicetify.React.createElement("option", { key: value, value }, label),
				),
			),
		);
	});

	const Input = Spicetify.React.memo(({ name, desc, tippy, value, onChange, placeholder }) => {
		return Spicetify.React.createElement(
			OptionRow,
			{ name, desc, tippy },
			Spicetify.React.createElement("input", {
				className: "themeOptionInput",
				type: "text",
				value: value,
				onChange: (e) => onChange(`theme:${name}`, e.target.value),
				placeholder: placeholder,
			}),
		);
	});

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

	const Section = Spicetify.React.memo(({ name, children }) => {
		return Spicetify.React.createElement(
			"div",
			{ className: `${name.toLowerCase()}Container` },
			Spicetify.React.createElement("h2", { className: "categoryTitle" }, name),
			children
		);
	});

	const OptionType = Spicetify.React.memo(({ option, value, onChange }) => {
		const Component = { toggle: Toggle, dropdown: Dropdown, input: Input }[option.type];
		return Spicetify.React.createElement(Component, { ...option, value, onChange });
	});

	const RevealableOption = Spicetify.React.memo(({ option, settings, onChange }) => {
		const mainValue = settings[`theme:${option.name}`];

		return Spicetify.React.createElement(
			"div",
			{ className: "themeOptionWrapper" },
			Spicetify.React.createElement(OptionType, {
				option,
				value: mainValue,
				onChange
			}),
			mainValue && option.revealOptions && Spicetify.React.createElement(
				"div",
				{ className: "themeOptionRevealedWrapper" },
				option.revealOptions.map(revealOption =>
					Spicetify.React.createElement(OptionType, {
						key: revealOption.name,
						option: revealOption,
						value: settings[`theme:${revealOption.name}`],
						onChange
					})
				)
			)
		);
	});

  	/*
	MARK: THEME FUNCTIONS
	*/

	const getLocalStorage = (key, defaultVal) => {
		const item = localStorage.getItem(key);
		return item !== null ? JSON.parse(item) : defaultVal;
	};

	const setLocalStorage = (key, value) => {
		localStorage.setItem(key, JSON.stringify(value));
	};

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
		const loadedSettings = Object.values(options).flat().reduce((acc, option) => {
			const mainKey = `theme:${option.name}`;
			acc[mainKey] = getLocalStorage(mainKey, option.defaultVal);
			if (option.revealOptions) {
				option.revealOptions.forEach(revealOption => {
					const revealKey = `theme:${revealOption.name}`;
					acc[revealKey] = acc[mainKey] ? getLocalStorage(revealKey, revealOption.defaultVal) : false;
				});
			}
			return acc;
		}, {});

		applySettings(loadedSettings);
		return loadedSettings;
	};

	const applySettings = (settings) => {
		Object.values(options).flat().forEach(({ name, type, revealOptions, run }) => {
			const key = `theme:${name}`;
			const value = settings[key];
			if (type === "toggle") {
				document.body.classList.toggle(name, value);
			}
			if (revealOptions) {
				revealOptions.forEach(({ name: revealName, type: revealType }) => {
					if (revealType === "toggle") {
						document.body.classList.toggle(revealName, value && settings[`theme:${revealName}`]);
				}
			});
			}
			if (run) run(value);
		});
	};

	const saveOptions = (settings) => {
		const changedSettings = Object.entries(settings).filter(([key, value]) => {
			const currentValue = getLocalStorage(key, null);
			if (JSON.stringify(currentValue) !== JSON.stringify(value)) {
				setLocalStorage(key, value);
				return true;
			}
			return false;
		});

		if (changedSettings.length > 0) {
			console.log("%c[Theme]", "color:#b3ebf2;", "Saving settings:", changedSettings);
			applySettings(settings);
		}
	};

	const resetOptions = (setSettings) => {
    console.log("%c[Theme]", "color:#b3ebf2;", "Resetting settings");
		const defaultSettings = Object.fromEntries(
							Object.values(options)
								.flat()
								.flatMap(({ name, defaultVal, revealOptions }) => [
				[`theme:${name}`, defaultVal],
									...(revealOptions?.map((option) => [
										`theme:${option.name}`,
										option.defaultVal,
									]) || []),
								]),
		);
		setSettings(defaultSettings);
		applySettings(defaultSettings);
    Object.entries(defaultSettings).forEach(([key, value]) => {
      setLocalStorage(key, value);
    });
	};

	/*
	MARK: THEME SETTINGS
	*/

	const useSettings = () => {
		const [settings, setSettings] = Spicetify.React.useState(initialiseSettings);

		const handleSettingChange = Spicetify.React.useCallback((key, value) => {
			setSettings(prev => {
				const newSettings = { ...prev, [key]: value };
				const optionName = key.replace("theme:", "");
				const categoryOption = Object.values(options).flat().find(opt => opt.name === optionName);

				if (categoryOption?.revealOptions) {
					categoryOption.revealOptions.forEach(revealOption => {
							const revealKey = `theme:${revealOption.name}`;
						newSettings[revealKey] = value ? (prev[revealKey] ?? revealOption.defaultVal) : undefined;
					});
				}

				return newSettings;
			});
		}, []);

		return [settings, handleSettingChange, setSettings];
	};

	const ThemeSettings = Spicetify.React.memo(() => {
		const [settings, handleSettingChange, setSettings] = useSettings();
		const categories = Object.keys(options);

		const scrollToCategory = (category) => {
			const element = document.querySelector(`.${category.toLowerCase()}Container`);
			if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		};

		return Spicetify.React.createElement(
			"div",
			{ className: "themeContainer" },
			Spicetify.React.createElement(CategoryCarousel, {
				categories: categories,
				onCategoryClick: scrollToCategory
			}),
				Object.entries(options).map(([category, categoryOptions]) =>
					Spicetify.React.createElement(
						Section,
					{ key: category, name: category },
						categoryOptions.map(option =>
							Spicetify.React.createElement(RevealableOption, {
									key: option.name,
								option,
								settings,
								onChange: handleSettingChange
								})
					)
				)
			),
			Spicetify.React.createElement(
				"div",
				{ className: "buttonContainer" },
				Spicetify.React.createElement("button", {
					className: "resetButton",
					onClick: () => resetOptions(setSettings)
				}, "Reset"),
				Spicetify.React.createElement("button", {
					className: "saveButton",
					onClick: () => saveOptions(settings)
				}, "Save")
			)
		);
	});

	/*
	MARK: OPTIONS
	*/

	const options = {
		Features: [
			{
				type: "dropdown",
			name: "change-Spotify-mode",
			desc: "Changes Spotify Mode to either Normal, Developer or Employee",
			defaultVal: "developer",
			tippy: "Only takes effect after a restart",
			options: [
				{ value: "default", label: "Default" },
				{ value: "developer", label: "Developer" },
				{ value: "employee", label: "Employee" },
				{ value: "both", label: "Dev + Empl" },
			],
			run: (value) => {
				changeSpotifyMode(value);
			},
		},
		{
			type: "input",
			name: "ZoomLevel",
			desc: "Changes zoom level (%)",
			defaultVal: 100,
			placeholder: "%",
			run: (value) => {
					Zoomlevel = value / 100;
					document.documentElement.style.setProperty("--Zoomlevel", Zoomlevel);
			},
		},
		{
			type: "toggle",
			name: "AlbumBannerinPage",
			desc: "Puts album art in places",
			defaultVal: true,
			run: (value) => {
				coverArtBanner(value);
			},
			revealOptions: [
				{
					type: "toggle",
					name: "LyricsPage",
					desc: "Adds Dynamic backgrounds to Lyrics Page",
					defaultVal: true,
						tippy: "Includes Spotify Lyrics page and Spicetify's Lyrics Plus",
				},
				{
					type: "toggle",
					name: "PlaylistPage",
					desc: "Adds Dynamic backgrounds to your Playlist Pages",
					defaultVal: true,
				},
				{
					type: "toggle",
					name: "ArtistPage",
					desc: "Adds Dynamic backgrounds to Artist Pages",
					defaultVal: true,
				},
				{
					type: "toggle",
					name: "AlbumPage",
					desc: "Adds Dynamic backgrounds to Album Pages",
					defaultVal: true,
				},
				{
					type: "toggle",
					name: "MiscPage",
					desc: "Adds Dynamic backgrounds to Misc Pages",
					defaultVal: true,
						tippy:
							"Enables album art for Station, Collection, Show, Episode, Genre, User",
				},
				],
			},
		],
		Layouts: [
		{
			type: "toggle",
			name: "LibX",
			desc: "Brings back old ui",
			defaultVal: false,
			run: (value) => {
				toggleLibXUI(value);
			},
			revealOptions: [
				{
					type: "toggle",
					name: "highlightnav",
					desc: "Removes coloured gradient from the home page header",
					defaultVal: true,
				},
				{
					type: "toggle",
					name: "PreLibX",
					desc: "Brings back old ui ()",
					defaultVal: false,
				},
			]
		},
		{
			type: "toggle",
			name: "TestLayout",
			desc: "Switches Playbar and Cover art in now playing bar",
			defaultVal: true,
				tippy: "This is not compatible with newlayout",
		},
		{
			type: "toggle",
			name: "CombinedLibX",
			desc: "Combines the nowplaying view and library menu",
			defaultVal: false,
				tippy: "This is not compatible with newlayout",
		},
		{
			type: "toggle",
			name: "switchlayout",
			desc: "Makes left sidebar go in front of the now playing bar",
			defaultVal: true,
		},
		],
		Snippets: [
		{
			type: "toggle",
			name: "hidetracklistnum",
			desc: "Hide tracklist numbers in playlist page",
			defaultVal: true,
		},
		{
			type: "toggle",
			name: "greenicon",
			desc: "Makes active tab icon green",
			defaultVal: true,
		},
		{
			type: "toggle",
			name: "hidenowplayview",
			desc: "Hide cover art in now playing bar",
			defaultVal: false,
		},
		{
			type: "toggle",
			name: "transplayicon",
			desc: "Transparent play/pause button in now playing bar",
			defaultVal: true,
		},
		{
			type: "toggle",
			name: "npvlargerlyrics",
			desc: "Now playing view (Right sidebar) has lyrics only",
			defaultVal: false,
		},
		{
			type: "toggle",
			name: "homeheader",
			desc: "Removes coloured gradient from the home page header",
			defaultVal: true,
		},
		],
		Test: [
			{
				type: "toggle",
				name: "test-toggle",
				desc: "Description",
				defaultVal: true,
			},
			{
				type: "toggle",
				name: "test-reveal",
				desc: "Description",
				defaultVal: true,
				revealOptions: [
					{
						type: "toggle",
						name: "revealedtoggle",
				desc: "Description",
				defaultVal: true,
					},
					{
						type: "input",
						name: "revealedinput",
						desc: "Description",
						defaultVal: true,
					},
					{
						type: "dropdown",
						name: "revealeddropdown",
						desc: "Description",
						defaultVal: "test1",
						options: [
							{ value: "test1", label: "test1" },
							{ value: "test2", label: "test2" },
							{ value: "test3", label: "test3" },
							{ value: "test4", label: "test4" },
						],
					},
				],
			},
		{
			type: "input",
			name: "test-input",
				desc: "Description",
			defaultVal: 1,
				placeholder: "does something",
		},
		{
			type: "dropdown",
				name: "test-dropdown",
			desc: "Description",
			defaultVal: "test1",
			options: [
				{ value: "test1", label: "test1" },
				{ value: "test2", label: "test2" },
				{ value: "test3", label: "test3" },
				{ value: "test4", label: "test4" },
				],
			},
		],
	};

	/*
	MARK: TOPBAR BUTTON
	*/

	const settingsIcon = `<svg viewBox="0 0 16 16" width="16px" height="16px" fill="var(--spice-subtext)"><path d="M8.04 5.36a2.68 2.68 90 100 5.36 2.68 2.68 90 000-5.36zM6.7 8.04a1.34 1.34 90 112.68 0 1.34 1.34 90 01-2.68 0zM11.5481 3.2133a.9487.9487 90 01-1.1042-.7598l-.3484-1.8974a.4744.4744 90 00-.3685-.3779 8.1365 8.1365 90 00-3.3755 0 .4744.4744 90 00-.3685.3779l-.3471 1.8974a.9514.9514 90 01-1.2542.7209l-1.8211-.6486a.4757.4757 90 00-.5119.1273c-.7625.8402-1.34 1.8318-1.6911 2.9118a.4717.4717 90 00.1447.5065l1.4767 1.2475a.9434.9434 90 010 1.4418l-1.4767 1.2475a.4717.4717 90 00-.1447.5065A8.0212 8.0212 90 002.0502 13.4268a.4757.4757 90 00.5119.1273l1.8224-.6486a.9487.9487 90 011.2542.7209l.3457 1.8974c.0348.1876.1809.3377.3685.3765a8.1405 8.1405 90 003.3768 0 .473.473 90 00.3672-.3765l.3484-1.8974a.9514.9514 90 011.2542-.7209l1.8211.6486c.1809.0643.3832.0134.5119-.1273.7625-.8402 1.34-1.8318 1.6911-2.9118a.4717.4717 90 00-.1447-.5065l-1.4767-1.2475a.942.942 90 010-1.4418l1.4767-1.2475a.4717.4717 90 00.1447-.5065A8.0199 8.0199 90 0014.0298 2.6532a.4757.4757 90 00-.5119-.1273l-1.8224.6486a.9514.9514 90 01-.1487.0402zm-8.8708.7772 1.2556.4462a2.2914 2.2914 90 003.0217-1.742l.2372-1.2998a6.8407 6.8407 90 011.6951 0l.2385 1.2998a2.2887 2.2887 90 003.0217 1.742L13.4 3.9892c.3417.4476.6258.9353.8442 1.4526l-1.0104.8536a2.2834 2.2834 90 000 3.4894l1.0117.8536a6.6866 6.6866 90 01-.8442 1.4526l-1.2556-.4476a2.2914 2.2914 90 00-3.0217 1.742l-.2385 1.2998a6.8327 6.8327 90 01-1.6951 0l-.2372-1.2998a2.2887 2.2887 90 00-3.0217-1.742L2.68 12.0908a6.6826 6.6826 90 01-.8442-1.4526l1.0104-.8549a2.2834 2.2834 90 000-3.488l-1.0117-.8536c.2198-.5172.5038-1.005.8442-1.4526z"/></svg>`;

	new Spicetify.Topbar.Button(
		"Theme Settings",
		settingsIcon,
		() => {
			Spicetify.PopupModal.display({
				title: "Theme Settings",
				content: Spicetify.React.createElement(ThemeSettings),
				isLarge: true,
			});

			const header = document.querySelector(".main-trackCreditsModal-header");
			const closeButton = document.querySelector(
				".main-trackCreditsModal-closeBtn",
			);
			const buttonContainer = document.createElement("div");
			buttonContainer.className = "main-trackCreditsModal-BtnContainer";

			const githubButton = Spicetify.React.createElement(
				"button",
				{
					className: "main-trackCreditsModal-githubBtn",
					onClick: () =>
						window.open("https://github.com/veryboringhwl/spicetify"),
				},
				Spicetify.React.createElement("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 96 96",
					fill: "currentColor",
					dangerouslySetInnerHTML: {
						__html: `<path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"></path>`,
					},
				}),
			);

			Spicetify.ReactDOM.render(githubButton, buttonContainer);
			buttonContainer.appendChild(closeButton);
			header.appendChild(buttonContainer);
		},
		false,
		true,
	);

	initialiseSettings();
	console.log("%c[Theme]", "color:#b3ebf2;", "Spicetify theme initialised");
})();