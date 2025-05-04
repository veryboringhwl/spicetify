import React from "react";
import ReactDOM from "react-dom";
import Icons from "../icons/icons";
import waitForElements from "../utils/waitForElements";

const ModalButtons = async () => {
  const header = await waitForElements(".main-trackCreditsModal-header");

  document.querySelector(".main-trackCreditsModal-closeBtn")?.remove();

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "main-trackCreditsModal-BtnContainer";

  ReactDOM.createRoot(buttonContainer).render(
    <>
      <Spicetify.ReactComponent.TooltipWrapper label="GitHub" placement="top">
        <button
          className="main-trackCreditsModal-githubBtn"
          onClick={() => window.open("https://github.com/veryboringhwl/spicetify")}
        >
          <Icons.React.github size={18} />
        </button>
      </Spicetify.ReactComponent.TooltipWrapper>
      <Spicetify.ReactComponent.TooltipWrapper label="Close" placement="top">
        <button
          className="main-trackCreditsModal-closeBtn"
          onClick={() => Spicetify.PopupModal.hide()}
        >
          <Icons.React.close size={18} />
        </button>
      </Spicetify.ReactComponent.TooltipWrapper>
    </>,
  );

  header.appendChild(buttonContainer);
};

export default ModalButtons;
