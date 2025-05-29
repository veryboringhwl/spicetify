import React from "react";
import ReactDOM from "react-dom";
import Icons from "../icons/icons";

const PopupModal = ({ title = "", content, isLarge = true, buttons = false, icon = "" } = {}) => {
  let container = document.getElementById("popup-modal");
  if (!container) {
    container = document.createElement("popup-modal");
    container.id = "popup-modal";
    document.body.appendChild(container);
  }

  const modalRoot = ReactDOM.createRoot(container);
  document.body.style.overflow = "hidden";

  const closeModal = () => {
    modalRoot.unmount();
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", handleEscKey);
    document.removeEventListener("mousedown", handleClickOutside);
  };

  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const handleClickOutside = (event) => {
    const modalContent = document.querySelector(".Modal");
    if (modalContent && !modalContent.contains(event.target)) {
      closeModal();
    }
  };

  document.addEventListener("keydown", handleEscKey);
  document.addEventListener("mousedown", handleClickOutside);

  const ModalComponent = React.memo(() => (
    <div className="Modal__overlay">
      <div className="Modal">
        <div className={`Modal__container${isLarge ? " Modal__container--large" : ""}`}>
          <div className="Modal__header">
            <div className="Modal__titleContainer">
              <div className="Modal__icon">{icon}</div>
              <h1 className="Modal__title">{title}</h1>
            </div>
            <div className="Modal__buttonContainer">
              {buttons && (
                <Spicetify.ReactComponent.TooltipWrapper label="GitHub" placement="top">
                  <button
                    className="Modal__button Modal__button--github"
                    onClick={() => window.open("https://github.com/veryboringhwl/spicetify")}
                  >
                    <Icons.React.github size={18} />
                  </button>
                </Spicetify.ReactComponent.TooltipWrapper>
              )}
              <Spicetify.ReactComponent.TooltipWrapper label="Close" placement="top">
                <button className="Modal__button Modal__button--close" onClick={() => closeModal()}>
                  <Icons.React.close size={18} />
                </button>
              </Spicetify.ReactComponent.TooltipWrapper>
            </div>
          </div>
          <div className="Modal__content">
            {React.isValidElement(content) ? content : React.createElement(content)}
          </div>
        </div>
      </div>
    </div>
  ));

  modalRoot.render(<ModalComponent />);
};

export default PopupModal;
