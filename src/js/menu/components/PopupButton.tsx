import { type FC, memo } from "react";
import { PopupModal } from "../../components/PopupModal.tsx";
import { Icons } from "../../icons/Icons.tsx";
import type { PopupButtonProps } from "../../types/temp.d.ts";

export const PopupButton: FC<PopupButtonProps> = memo(({ name, popupModal: PopupModalContent }) => {
  return (
    <button
      className="popup-button"
      onClick={() =>
        PopupModal({
          title: name,
          content: <PopupModalContent />,
          isLarge: false,
        })
      }
    >
      <Icons.React.editButton size={16} />
    </button>
  );
});
