(function theme() {
  
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

})();