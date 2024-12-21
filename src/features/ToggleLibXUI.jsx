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
		}
	};

	addLibXText(isEnabled, globalNav);
	addContainerClass(isEnabled, globalNav);
}

export default toggleLibXUI;