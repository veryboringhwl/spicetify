import React from "react";
import ReactDOM from "react-dom";
import Icons from "../icons/icons";
import Tippy from "./Tippy";

const ModalButtons = () => {
  const header = document.querySelector(".main-trackCreditsModal-header");
  if (!header) return;

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
        <svg
          width="18"
          height="18"
          viewBox="0 0 96 96"
          fill="currentColor"
          dangerouslySetInnerHTML={{ __html: Icons.github }}
        />
      </button>
      <button
        className="main-trackCreditsModal-closeBtn"
        onClick={() => Spicetify.PopupModal.hide()}
        ref={(label) => label && Tippy(label, "Close")}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 32 32"
          fill="currentColor"
          dangerouslySetInnerHTML={{ __html: Icons.close }}
        />
      </button>
    </>,
  );

  header.appendChild(buttonContainer);
};

export default ModalButtons;
