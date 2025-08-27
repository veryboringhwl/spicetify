import { type FC, memo } from "react";
import type { ButtonContainerProps } from "../../types/temp.d.ts";

export const ButtonContainer: FC<ButtonContainerProps> = memo(({ resetSettings, saveSettings }) => (
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
