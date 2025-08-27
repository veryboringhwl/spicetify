import { waitForElements } from "../utils/waitForElements.ts";

let updateVolListener: (() => void) | null = null;
let inputChangeListener: ((e: Event) => void) | null = null;

export const VolPercent = async (isEnabled: boolean): Promise<void> => {
  const volumeBar = await waitForElements(".main-nowPlayingBar-volumeBar");
  if (!volumeBar) return;

  const existingPercentDiv = volumeBar.querySelector<HTMLDivElement>(".vol-percent");

  if (updateVolListener) {
    Spicetify.Platform.PlaybackAPI._events.removeListener("volume", updateVolListener);
    updateVolListener = null;
  }
  const inputEl = existingPercentDiv?.querySelector<HTMLInputElement>(".vol-input");
  if (inputEl && inputChangeListener) {
    inputEl.removeEventListener("change", inputChangeListener);
    inputChangeListener = null;
  }
  existingPercentDiv?.remove();
  volumeBar.style.flex = "";

  if (isEnabled) {
    const percentDiv = document.createElement("div");
    percentDiv.className = "vol-percent";
    percentDiv.style.display = "inline-flex";
    percentDiv.style.alignItems = "center";
    percentDiv.innerHTML = `
      <input type="text" class="vol-input" style="width: 30px; font-size: 15px; border: none; background: transparent; text-align: right;">
      <span style="font-size: 15px;">%</span>
    `;
    volumeBar.appendChild(percentDiv);
    volumeBar.style.flex = "0 1 200px";

    const input = percentDiv.querySelector<HTMLInputElement>(".vol-input");
    if (!input) return;

    updateVolListener = () => {
      input.value = String(Math.round(Spicetify.Player.getVolume() * 100));
    };

    inputChangeListener = () => {
      const newVol = parseInt(input.value, 10);
      if (!isNaN(newVol) && newVol >= 0 && newVol <= 100) {
        Spicetify.Player.setVolume(newVol / 100);
      }
    };

    input.addEventListener("change", inputChangeListener);
    Spicetify.Platform.PlaybackAPI._events.addListener("volume", updateVolListener);
    updateVolListener(); // Initial update
  }
};
