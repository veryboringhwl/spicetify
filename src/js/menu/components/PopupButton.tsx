import React, { memo } from "react";
import PopupModal from "../../components/PopupModal.tsx";
import Icons from "../../icons/Icons.tsx";

interface PopupButtonProps {
  name: string;
  popupModal: string;
}

const PopupButton = memo(({ name, popupModal }: PopupButtonProps) => {
  if (!popupModal) return null;

  return (
    <button
      className="popup-button"
      onClick={() =>
        PopupModal({
          title: name,
          content: React.createElement(popupModal),
          isLarge: false,
        })
      }
    >
      <Icons.React.editButton size={16} />
    </button>
  );
});

export default PopupButton;
