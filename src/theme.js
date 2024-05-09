//TODO: 
// Settings icon
// add sliders into settings
// other

(function theme() {
  // SELECTED NAVITEMS
  function waitForElements(elementSelectors, func, attempts = 50) {
    const queries = elementSelectors.map((elementSelector) =>
      document.querySelector(elementSelector)
    );
    if (queries.every((element) => element)) {
      func(queries);
    } else if (attempts > 0) {
      setTimeout(waitForElements, 200, elementSelectors, func, attempts - 1);
    }
  }

  waitForElements(['.main-yourLibraryX-navItem'], () => {
    const navItems = document.getElementsByClassName('main-yourLibraryX-navLink');
    Array.from(navItems).forEach((navItem) => {
      const navItemAccent = document.createElement('div');
      navItemAccent.classList.add('main-yourLibraryX-navLink-accent');
      navItem.appendChild(navItemAccent);
    });
  });

  
  // WINDOWS ZOOM VARIABLE (taken from comfy)
  function updateZoomVariable() {
    var devicePixelRatio = window.devicePixelRatio || 1;
    document.documentElement.style.setProperty('--zoom', devicePixelRatio);
  }
  updateZoomVariable();
  window.addEventListener('resize', updateZoomVariable);

})();