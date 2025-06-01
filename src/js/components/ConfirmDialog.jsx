import { memo, useEffect, useState } from "react";
import ReactDOM from "react-dom";

function ConfirmDialog({
  titleText,
  descriptionText,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  onClose,
  onOpen,
  onOutside,
  confirmLabel,
  allowHTML,
}) {
  const ConfirmDialog = memo(() => {
    const [state, setState] = useState(true);
    const menu = document.querySelector(".ReactModalPortal:last-of-type");

    useEffect(() => {
      if (state) onOpen?.();
    }, [state, onOpen]);

    return (
      <Spicetify.ReactComponent.ConfirmDialog
        titleText={titleText}
        descriptionText={descriptionText}
        cancelText={cancelText}
        confirmText={confirmText}
        isOpen={state}
        onOutside={() => {
          setState(false);
          onOutside?.();
          menu?.remove();
        }}
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
        confirmLabel={confirmLabel}
        allowHTML={allowHTML}
      />
    );
  });

  const container = document.createElement("div");
  document.body.appendChild(container);
  container.className = "ReactModalPortal";
  ReactDOM.createRoot(container).render(<ConfirmDialog />);
}

// Example usage:
// ConfirmDialog({
//   titleText: "Debug Menu",
//   descriptionText: "Are you <b>sure</b>?",
//   onOutside: () => {
//     Spicetify.showNotification("Clicked outside");
//   },
//   confirmLabel: "Ok",
//   allowHTML: true,
// });

export default ConfirmDialog;
