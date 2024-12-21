function UpdateZoom() {
  let prevOuterWidth = window.outerWidth;
  let prevInnerWidth = window.innerWidth;
  let prevRatio = window.devicePixelRatio;
  let startup = true;

  function checkChanges() {
    const newOuterWidth = window.outerWidth;
    const newInnerWidth = window.innerWidth;
    const newRatio = window.devicePixelRatio;
    if (
      startup ||
      ((prevOuterWidth <= 160 || prevRatio !== newRatio) &&
        (prevOuterWidth !== newOuterWidth || prevInnerWidth !== newInnerWidth))
    ) {
      const modified = newOuterWidth / newInnerWidth || 1;
      document.documentElement.style.setProperty("--zoom", modified);
      ConsoleLog(`Zoom updated: ${zoom}`);
      prevOuterWidth = newOuterWidth;
      prevInnerWidth = newInnerWidth;
      prevRatio = newRatio;
    }

    requestAnimationFrame(checkChanges);
  }
  checkChanges();
}
UpdateZoom();

export default UpdateZoom;
