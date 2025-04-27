function ToggleLibXUI(isEnabled) {
	const globalNav = document.querySelector(".Root__globalNav");
	if (!globalNav) return;

	if (isEnabled) {
		enableLibXUI(globalNav);
	} else {
		disableLibXUI(globalNav);
	}
}

let libXObserver = null;

function enableLibXUI(globalNav) {
	globalNav.classList.add("global-libraryX");

	const addTextToButtons = () => {
		const elements = globalNav.querySelectorAll(
			".search-searchCategory-categoryGrid > div > button, .main-globalNav-searchContainer > .main-globalNav-link-icon, ._b3hhmbWtOY8_1M1mM1H",
		);
		elements.forEach((el) => {
			if (!el.querySelector(".main-globalNav-textWrapper")) {
				const text =
					el.getAttribute("aria-label") ||
					(el.querySelector("input") ? "Search" : "");
				const wrapper = document.createElement("span");
				wrapper.className = "main-globalNav-textWrapper";
				wrapper.innerHTML = `<div class="main-globalNav-iconText encore-text-body-medium-bold">${text}</div>`;
				el.appendChild(wrapper);
			}
		});
	};

	addTextToButtons();

	libXObserver = new MutationObserver(addTextToButtons);
	libXObserver.observe(globalNav, { childList: true, subtree: true });

	const addCollapsed = () => {
		const elementToWatch = document.querySelector(".sikBfynL1Y6I25nVpbAg");
		globalNav.classList.toggle("collapsed", elementToWatch != null);
	};

	addCollapsed();
	new MutationObserver(addCollapsed).observe(document.body, {
		childList: true,
		subtree: true,
	});
}

function disableLibXUI(globalNav) {
	globalNav.classList.remove("global-libraryX", "collapsed");

	if (libXObserver) {
		libXObserver.disconnect();
		libXObserver = null;
	}

	const textWrappers = globalNav.querySelectorAll(
		".main-globalNav-textWrapper",
	);
	textWrappers.forEach((el) => el.remove());
}

export default ToggleLibXUI;
