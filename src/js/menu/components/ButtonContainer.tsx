import { memo } from "react";

interface ButtonContainerProps {
  resetSettings: () => void;
  saveSettings: () => void;
}

const ButtonContainer = memo(({ resetSettings, saveSettings }: ButtonContainerProps) => (
  <div className="button-container">
    <button
      className="button-container__button button-container__button--reset"
      onClick={resetSettings}
    >
      Reset
    </button>
    <button
      className="button-container__button button-container__button--save"
      onClick={saveSettings}
    >
      Save
    </button>
  </div>
));

export default ButtonContainer;
