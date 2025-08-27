import { memo, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { ConfirmDialogProps } from "../types/temp.d.ts";

export function ConfirmDialog({
  titleText,
  descriptionText,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  onClose,
  onOpen,
  onOutside,
  allowHTML,
}: ConfirmDialogProps) {
  const ConfirmDialog = memo(() => {
    const [state, setState] = useState(true);
    const menu = document.querySelector(".ReactModalPortal:last-of-type");

    useEffect(() => {
      if (state) onOpen?.();
    }, [state, onOpen]);

    return (
      <Spicetify.ReactComponent.RemoteConfigProvider
        configuration={Spicetify.Platform.RemoteConfiguration}
      >
        <Spicetify.ReactComponent.ConfirmDialog
          allowHTML={allowHTML}
          cancelText={cancelText}
          confirmText={confirmText}
          descriptionText={descriptionText}
          isOpen={state}
          onClose={() => {
            setState(false);
            onClose?.();
            menu?.remove();
          }}
          onConfirm={() => {
            setState(false);
            onConfirm?.();
            menu?.remove();
          }}
          onOutside={() => {
            setState(false);
            onOutside?.();
            menu?.remove();
          }}
          titleText={titleText}
        />
      </Spicetify.ReactComponent.RemoteConfigProvider>
    );
  });

  ReactDOM.createRoot(document.createElement("div")).render(<ConfirmDialog />);
}

// Example usage:
// ConfirmDialog({
//   titleText: "Debug Menu",
//   descriptionText: "Are you <b>sure</b>?",
//   onOutside: () => {
//     Spicetify.showNotification("Clicked outside");
//   },
//   confirmText: "Ok",
//   allowHTML: true,
// });
