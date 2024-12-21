const VolPercent = (isEnabled) => {
  const volumeBar = document.querySelector(".main-nowPlayingBar-volumeBar");
  if (!(volumeBar && Spicetify.Player && Spicetify.Platform.PlaybackAPI)) {
    setTimeout(() => VolPercent(isEnabled), 200);
    return;
  }

  const updateVol = () => {
    const input = volumeBar.querySelector(".vol-input");
    if (input) {
      input.value = Math.round(Spicetify.Player.getVolume() * 100);
    }
  };

  if (isEnabled) {
    if (!volumeBar.querySelector(".vol-percent")) {
      volumeBar.insertAdjacentHTML(
        "beforeend",
        `
							<div class="vol-percent" style="display: inline-flex; align-items: center;">
									<input type="text" class="vol-input" 
											style="width: 30px; font-size: 15px; border: none; background: transparent; text-align: right;">
									<span style="font-size: 15px;">%</span>
							</div>
					`
      );
      volumeBar.style.flex = "0 1 200px";
      const input = volumeBar.querySelector(".vol-input");
      input.addEventListener("change", () => {
        const newVol = parseInt(input.value, 10);
        if (newVol >= 0 && newVol <= 100) {
          Spicetify.Player.setVolume(newVol / 100);
        }
      });

      Spicetify.Platform.PlaybackAPI._events.addListener("volume", updateVol);
      updateVol();
    }
  } else {
    const volumeBar = document.querySelector(".main-nowPlayingBar-volumeBar");
    if (volumeBar) {
      volumeBar.querySelector(".vol-percent")?.remove();
      volumeBar.style.flex = "";
      Spicetify.Platform.PlaybackAPI._events.removeListener(
        "volume",
        updateVol
      );
    }
  }
};

export default VolPercent;
