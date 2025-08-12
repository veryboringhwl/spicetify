import React, { ComponentType, memo, ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Icons from "../icons/Icons.tsx";

interface PopupModalProps {
  title?: string;
  content: ReactNode | ComponentType<any>;
  isLarge?: boolean;
  buttons?: ReactNode;
  icon?: ReactNode;
}

interface ModalComponentProps extends PopupModalProps {
  onClose: () => void;
}

let modalRoot: ReactDOM.Root | null = null;
const modalContainerId = "popup-modal-container";

const closeModal = (): void => {
  const container = document.getElementById(modalContainerId);
  if (modalRoot) {
    modalRoot.unmount();
    modalRoot = null;
  }
  if (container) {
    container.remove();
  }
  document.body.style.overflow = "auto";
};

const ModalComponent = memo(
  ({ title, content, isLarge, buttons, icon, onClose }: ModalComponentProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
      const dialogElement = dialogRef.current;
      if (dialogElement) {
        dialogElement.addEventListener("cancel", (event) => {
          event.preventDefault();
        });

        dialogElement.showModal();
        document.body.style.overflow = "hidden";

        const handleDialogClose = () => {
          onClose();
        };

        dialogElement.addEventListener("close", handleDialogClose);

        return () => {
          dialogElement.removeEventListener("close", handleDialogClose);
        };
      }
    }, [onClose]);

    const handleClose = () => {
      const dialogElement = dialogRef.current;
      if (dialogElement) {
        dialogElement.close();
      }
    };

    const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
      if (event.target === dialogRef.current) {
        handleClose();
      }
    };

    const renderContent = (): ReactNode => {
      if (React.isValidElement(content)) {
        return content;
      }
      if (typeof content === "function") {
        const ContentComponent = content as ComponentType<any>;
        return <ContentComponent />;
      }
      return content;
    };

    return (
      <dialog className="modal" onClick={handleBackdropClick} ref={dialogRef}>
        <div className={`modal__container${isLarge ? " modal__container--large" : ""}`}>
          <div className="modal__header">
            <div className="modal__titleContainer">
              {icon && <div className="modal__icon">{icon}</div>}
              <h1 className="modal__title">{title}</h1>
            </div>
            <div className="modal__buttonContainer">
              {buttons}
              <Spicetify.ReactComponent.TooltipWrapper label="Close" placement="top">
                <button className="modal__button modal__button--close" onClick={handleClose}>
                  <Icons.React.close size={18} />
                </button>
              </Spicetify.ReactComponent.TooltipWrapper>
            </div>
          </div>
          <div className="modal__content">{renderContent()}</div>
        </div>
      </dialog>
    );
  },
);

const PopupModal = ({
  title = "",
  content,
  isLarge = true,
  buttons,
  icon = "",
}: PopupModalProps): void => {
  if (document.getElementById(modalContainerId)) {
    closeModal();
  }

  const container = document.createElement("div");
  container.id = modalContainerId;
  document.body.appendChild(container);

  modalRoot = ReactDOM.createRoot(container);
  modalRoot.render(
    <ModalComponent
      buttons={buttons}
      content={content}
      icon={icon}
      isLarge={isLarge}
      onClose={closeModal}
      title={title}
    />,
  );
};

PopupModal.hide = closeModal;

export default PopupModal;
export type { PopupModalProps };
