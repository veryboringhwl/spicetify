import React from "react";
import ReactDOM from "react-dom";
import Icons from "../icons/icons";
import waitForElements from "../utils/waitForElements";
import Tippy from "./Tippy";

const ModalButtons = async () => {
  const header = await waitForElements(".main-trackCreditsModal-header");

  document.querySelector(".main-trackCreditsModal-closeBtn")?.remove();

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "main-trackCreditsModal-BtnContainer";

  ReactDOM.createRoot(buttonContainer).render(
    <>
      <button
        className="main-trackCreditsModal-githubBtn"
        onClick={() => window.open("https://github.com/veryboringhwl/spicetify")}
        ref={(label) => label && Tippy(label, "View on GitHub")}
      >
        <Icons.React.github size={18} />
      </button>
      <button
        className="main-trackCreditsModal-closeBtn"
        onClick={() => Spicetify.PopupModal.hide()}
        ref={(label) => label && Tippy(label, "Close")}
      >
        <Icons.React.close size={18} />
      </button>
    </>,
  );

  header.appendChild(buttonContainer);
};

export default ModalButtons;
