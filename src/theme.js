//TODO:
//add sliders into settings
//change css based on the toggles
//get carousel working
//album art in playlist header/lyrics

(function theme() {
	if (!(Spicetify.Player.data && Spicetify.Platform))
		return setTimeout(theme, 100);

	const waitForElements = (selectors, func, timeout = 100) => {
		const elements = selectors.map((selector) =>
			document.querySelector(selector),
    );
		if (elements.every((el) => el)) {
			func(elements);
    } else if (timeout > 0) {
			setTimeout(() => waitForElements(selectors, func, timeout - 1), 500);
		}
	};

  waitForElements([".main-yourLibraryX-navItem"], () => {
    const navItems = document.querySelectorAll(
			".main-yourLibraryX-navItem .main-yourLibraryX-navLink",
    );
		for (const navItem of navItems) {
			if (!navItem.querySelector(".main-yourLibraryX-navLink-accent")) {
				const accent = document.createElement("div");
				accent.classList.add("main-yourLibraryX-navLink-accent");
				navItem.appendChild(accent);
			}
		}
  });

  // WINDOWS ZOOM VARIABLE (taken from comfy)

  let cache = devicePixelRatio;
	const updateZoomVariable = (override = false) => {
		const ratio = devicePixelRatio;
		if (ratio !== cache || override) {
			cache = ratio;
			document.documentElement.style.setProperty(
				"--zoom",
				window.outerWidth / window.innerWidth || 1,
			);
    }
	};
  updateZoomVariable(true);
	window.addEventListener("resize", () => updateZoomVariable(false));

  //<path d="M8.262 5.72A2.542 2.542 90 108.262 10.804 2.542 2.542 90 108.262 5.72ZM6.991 8.262A1.271 1.271 90 119.533 8.262 1.271 1.271 90 116.991 8.262ZM11.59 3.684A.902.902 90 0110.543 2.962L10.212 1.162A.45.45 0 009.863.804 7.715 7.715 90 006.661.804.45.45 0 006.312 1.162L5.983 2.962A.89.89 0 015.945 3.103.902.902 90 014.793 3.646L3.064 3.03A.45.45 0 002.578 3.152 7.61 7.61 0 00.975 5.914C.919 6.087.972 6.276 1.112 6.394L2.513 7.579C2.55 7.611 2.585 7.645 2.616 7.682 2.938 8.06 2.892 8.625 2.512 8.947L1.111 10.132A.45.45 0 00.974 10.611C1.307 11.635 1.855 12.576 2.578 13.373A.45.45 0 003.064 13.495L4.793 12.88A.915.915 90 014.934 12.842.902.902 90 015.981 13.564L6.31 15.363A.45.45 0 006.66 15.721 7.73 7.73 0 008.261 15.888 7.715 7.715 90 009.861 15.721.45.45 0 0010.21 15.363L10.541 13.563A.89.89 0 0110.579 13.422.902.902 90 0111.731 12.879L13.458 13.494A.45.45 0 0013.944 13.372 7.61 7.61 0 0015.548 10.61C15.604 10.437 15.55 10.248 15.411 10.131L14.01 8.946A.89.89 90 0113.906 8.843C13.584 8.466 13.63 7.9 14.01 7.578L15.411 6.393A.45.45 0 0015.548 5.913C15.215 4.889 14.667 3.948 13.944 3.151A.45.45 0 0013.458 3.029L11.729 3.644A.902.902 90 0111.588 3.682ZM3.177 4.42 4.368 4.843A2.173 2.173 90 007.141 3.533C7.18 3.422 7.212 3.308 7.232 3.191L7.457 1.958A6.49 6.49 0 018.262 1.908 6.47 6.47 0 019.065 1.958L9.291 3.191A2.173 2.173 90 0011.816 4.934C11.932 4.912 12.046 4.883 12.157 4.842L13.348 4.419A6.342 6.342 90 0114.149 5.796L13.189 6.607C12.273 7.381 12.16 8.752 12.939 9.666A2.161 2.161 90 0013.189 9.915L14.147 10.726A6.342 6.342 90 0113.346 12.103L12.155 11.678A2.173 2.173 90 009.382 12.988 2.08 2.08 0 009.291 13.33L9.065 14.563A6.482 6.482 90 018.262 14.613 6.5 6.5 0 017.458 14.563L7.233 13.33A2.173 2.173 90 004.708 11.587C4.592 11.609 4.478 11.638 4.367 11.678L3.176 12.101A6.32 6.32 0 012.375 10.725L3.333 9.914C4.249 9.14 4.363 7.769 3.583 6.855 3.507 6.765 3.423 6.682 3.333 6.606L2.375 5.795A6.29 6.29 0 013.176 4.419Z"/>
  // THEME SETTINGS BUTTON + FUNCTIONS
  // Content acutally shown

  const Content = () => {
    const content = document.createElement("div");
    const optionList = document.createElement("div");
    const options = [
      {
        name: "hidetracklistnum",
        desc: "Hide tracklist numbers:",
        defaultValue: false,
      },
      {
        name: "hidenowplayview",
        desc: "Hide now playing view:",
        defaultValue: false,
      },
      {
        name: "switchlayout",
        desc: "Makes left sidebar in front of npb:",
        defaultValue: true,
      },
      {
        name: "newlayout",
        desc: "Gives the new layout in npb:",
        defaultValue: true,
      },
      {
        name: "horizontalnav",
        desc: "Makes navlinks horizontal:",
        defaultValue: false,
      },
      {
        name: "transplaypause",
        desc: "Transparent play pause button:",
        defaultValue: true,
      },
    ];

    const createOption = ({ name, desc, defaultValue }) => {
      const optionRow = document.createElement("div");
      optionRow.classList.add("themeOptionRow");
      optionRow.innerHTML = `
        <span class="themeOptionDesc">${desc}</span>
        <button class="themeOptionToggle">
            <span class="toggleWrapper">
                <span class="toggle"></span>
            </span>
        </button>`;
		optionRow.dataset.name = name;
		optionRow.dataset.default = defaultValue;

      const toggle = optionRow.querySelector(".toggle");
		toggle.classList.toggle(
			"enabled",
			JSON.parse(localStorage.getItem(name)) ?? defaultValue,
		);
      optionRow.querySelector("button").addEventListener("click", () => {
        toggle.classList.toggle("enabled");
      });

      optionList.append(optionRow);
    };

    function createCarousel(items) {
      const carouselContainer = document.createElement("div");
      carouselContainer.classList.add("carouselcontainer");

      const carousel = document.createElement("div");
      carousel.classList.add("carousel");

      items.forEach((itemText) => {
        const item = document.createElement("div");
        item.classList.add("carouselitem");
        item.innerText = itemText;
        carousel.append(item);
      });

      const left = document.createElement("button");
      left.classList.add("carouselcontrol", "prev");
      left.innerText = "<";
      left.addEventListener("click", () => scrollCarousel(-1));

      const right = document.createElement("button");
      right.classList.add("carouselcontrol", "next");
      right.innerText = ">";
      right.addEventListener("click", () => scrollCarousel(1));

      carouselContainer.append(left, carousel, right);

      function scrollCarousel(direction) {
        const scrollAmount = carousel.clientWidth / 2;
        carousel.scrollBy({
          top: 0,
          left: scrollAmount * direction,
          behavior: "smooth",
        });
      }

      return carouselContainer;
    }

    const carouselItems = [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
      "Item 9",
    ];
    const carousel = createCarousel(carouselItems);
    content.append(carousel);

    options.forEach(createOption);
    content.append(optionList);

    const createButton = (id, text, onClick) => {
      const button = document.createElement("button");
		button.className = className;
      button.textContent = text;
      button.addEventListener("click", onClick);
		return button;
    };

	const resetOptions = () => {
		for (const option of optionList.children) {
        const toggle = option.querySelector(".toggle");
			if (toggle) {
				const defaultValue = option.dataset.default === "true";
        toggle.classList.toggle("enabled", defaultValue);
				localStorage.setItem(option.dataset.name, JSON.stringify(defaultValue));
			}
		}
	};

	const saveOptions = () => {
		for (const option of optionList.children) {
        const toggle = option.querySelector(".toggle");
			if (toggle) {
        localStorage.setItem(
					option.dataset.name,
					JSON.stringify(toggle.classList.contains("enabled")),
        );
			}
		}
      updateCSS();
  };

  const updateCSS = () => {
    const body = document.body;
    const options = [
      "hidetracklistnum",
      "hidenowplayview",
      "switchlayout",
      "newlayout",
      "horizontalnav",
      "transplaypause",
    ];
    options.forEach((option) => {
      const value = JSON.parse(localStorage.getItem(option));
      body.classList.toggle(`${option}-true`, value);
    });
  };

	new Spicetify.Topbar.Button(
		"Theme Settings",
		`<svg viewBox="0 0 16 16" width="16px" height="16px" fill="currentcolor"><path d="M8.262 5.72A2.542 2.542 90 108.262 10.804 2.542 2.542 90 108.262 5.72ZM6.991 8.262A1.271 1.271 90 119.533 8.262 1.271 1.271 90 116.991 8.262ZM11.59 3.684A.902.902 90 0110.543 2.962L10.212 1.162A.45.45 0 009.863.804 7.715 7.715 90 006.661.804.45.45 0 006.312 1.162L5.983 2.962A.89.89 0 015.945 3.103.902.902 90 014.793 3.646L3.064 3.03A.45.45 0 002.578 3.152 7.61 7.61 0 00.975 5.914C.919 6.087.972 6.276 1.112 6.394L2.513 7.579C2.55 7.611 2.585 7.645 2.616 7.682 2.938 8.06 2.892 8.625 2.512 8.947L1.111 10.132A.45.45 0 00.974 10.611C1.307 11.635 1.855 12.576 2.578 13.373A.45.45 0 003.064 13.495L4.793 12.88A.915.915 90 014.934 12.842.902.902 90 015.981 13.564L6.31 15.363A.45.45 0 006.66 15.721 7.73 7.73 0 008.261 15.888 7.715 7.715 90 009.861 15.721.45.45 0 0010.21 15.363L10.541 13.563A.89.89 0 0110.579 13.422.902.902 90 0111.731 12.879L13.458 13.494A.45.45 0 0013.944 13.372 7.61 7.61 0 0015.548 10.61C15.604 10.437 15.55 10.248 15.411 10.131L14.01 8.946A.89.89 90 0113.906 8.843C13.584 8.466 13.63 7.9 14.01 7.578L15.411 6.393A.45.45 0 0015.548 5.913C15.215 4.889 14.667 3.948 13.944 3.151A.45.45 0 0013.458 3.029L11.729 3.644A.902.902 90 0111.588 3.682ZM3.177 4.42 4.368 4.843A2.173 2.173 90 007.141 3.533C7.18 3.422 7.212 3.308 7.232 3.191L7.457 1.958A6.49 6.49 0 018.262 1.908 6.47 6.47 0 019.065 1.958L9.291 3.191A2.173 2.173 90 0011.816 4.934C11.932 4.912 12.046 4.883 12.157 4.842L13.348 4.419A6.342 6.342 90 0114.149 5.796L13.189 6.607C12.273 7.381 12.16 8.752 12.939 9.666A2.161 2.161 90 0013.189 9.915L14.147 10.726A6.342 6.342 90 0113.346 12.103L12.155 11.678A2.173 2.173 90 009.382 12.988 2.08 2.08 0 009.291 13.33L9.065 14.563A6.482 6.482 90 018.262 14.613 6.5 6.5 0 017.458 14.563L7.233 13.33A2.173 2.173 90 004.708 11.587C4.592 11.609 4.478 11.638 4.367 11.678L3.176 12.101A6.32 6.32 0 012.375 10.725L3.333 9.914C4.249 9.14 4.363 7.769 3.583 6.855 3.507 6.765 3.423 6.682 3.333 6.606L2.375 5.795A6.29 6.29 0 013.176 4.419Z"/></svg>`,
		() =>
			Spicetify.PopupModal.display({
				title: "Theme Settings",
				content,
				isLarge: true,
			}),
		false,
		true,
	);

	updateCSS();
})();
