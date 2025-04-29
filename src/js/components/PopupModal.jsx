import ModalButtons from "./ModalButtons";

const PopupModal = ({ title = "", content = "", isLarge = true, buttons = true } = {}) => {
  Spicetify.PopupModal.hide();
  setTimeout(() => {
    Spicetify.PopupModal.display({
      title,
      content: Spicetify.React.createElement(content),
      isLarge,
    });

    if (buttons === true) {
      ModalButtons();
    }
  }, 1);
};

// Example usage:
// PopupModal({
// 	title: "Example",
// 	content: ExampleMenu,
//  isLarge: false,
// });

export default PopupModal;
