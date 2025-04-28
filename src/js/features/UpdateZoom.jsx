import Console from "../utils/Console";

const UpdateZoom = () => {
  let prevOuter = window.outerWidth;
  let prevInner = window.innerWidth;
  let prevRatio = window.devicePixelRatio;

  const checkZoom = () => {
    const newOuter = window.outerWidth;
    const newInner = window.innerWidth;
    const newRatio = window.devicePixelRatio;

    if (
      (prevOuter <= 160 || prevRatio !== newRatio) &&
      (prevOuter !== newOuter || prevInner !== newInner)
    ) {
      const zoom = newOuter / newInner || 1;
      document.documentElement.style.setProperty("--zoom", zoom);
      Console.Log(`Zoom: ${zoom}`);
      prevOuter = newOuter;
      prevInner = newInner;
      prevRatio = newRatio;
    }
    requestAnimationFrame(checkZoom);
  };
  checkZoom();
};

export default UpdateZoom;
