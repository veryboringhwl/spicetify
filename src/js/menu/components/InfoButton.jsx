import React from "react";
import PopupModal from "../../components/PopupModal";
import Icons from "../../icons/icons";

const InfoButton = React.memo(({ name, popupModal }) => {
  if (!popupModal) return null;

  return (
    <button
      className="themeOptionPopupButton"
      onClick={() =>
        PopupModal({ title: name, content: popupModal, isLarge: false })
      }
      aria-label="Open popup"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        dangerouslySetInnerHTML={{ __html: Icons.editButton }}
      />
    </button>
  );
});

export default InfoButton;
