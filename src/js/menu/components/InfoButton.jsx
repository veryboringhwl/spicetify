import React from "react";
import Icons from "../../icons/icons";
import PopupModal from "../../utils/PopupModal";

const InfoButton = React.memo(({ name, popupModal }) => {
  if (!popupModal) return null;

  return (
    <button
      className="themeOptionPopupButton"
      onClick={() =>
        PopupModal({
          title: name,
          content: popupModal,
          isLarge: false,
          buttons: false,
        })
      }
      aria-label="Open popup"
    >
      <Icons.React.editButton size={16} />
    </button>
  );
});

export default InfoButton;
