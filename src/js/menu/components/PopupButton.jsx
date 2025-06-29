import { memo } from "react";
import PopupModal from "../../components/PopupModal";
import Icons from "../../icons/Icons";

const PopupButton = memo(({ name, popupModal }) => {
  if (!popupModal) return null;

  return (
    <button
      className="popup-button"
      onClick={() =>
        PopupModal({
          title: name,
          content: popupModal,
          isLarge: false,
        })
      }
      aria-label="Open popup"
    >
      <Icons.React.editButton size={16} />
    </button>
  );
});

export default PopupButton;
