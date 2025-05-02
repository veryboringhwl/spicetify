import ModalButtons from "../components/ModalButtons";

const PopupModal = ({ title = "", content = "", isLarge = true, buttons = true } = {}) => {
  requestAnimationFrame(() => {
    Spicetify.PopupModal.display({
      title,
      content: Spicetify.React.createElement(content),
      isLarge,
    });

    if (buttons === true) {
      ModalButtons();
    }
  });
};

export default PopupModal;
