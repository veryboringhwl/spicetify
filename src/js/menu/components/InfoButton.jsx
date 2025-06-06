import { memo } from "react";
import PopupModal from "../../components/PopupModal";
import Icons from "../../icons/icons";

const InfoButton = memo(({ name, popupModal }) => {
  if (!popupModal) return null;

  return (
    <button
      className="themeOptionPopupButton"
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

export default InfoButton;
