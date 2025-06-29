import { memo } from "react";

const ButtonContainer = memo(({ resetSettings, saveSettings }) => (
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
