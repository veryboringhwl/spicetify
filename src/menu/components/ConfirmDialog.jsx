const ConfirmDialog = Spicetify.React.memo((props) => {
  const [state, setState] = Spicetify.React.useState(true);
  const self = document.querySelector(".ReactModalPortal:last-of-type");
  const ConfirmDialog = Spicetify.ReactComponent.ConfirmDialog;
  const isForwardRef = typeof ConfirmDialog === "function";
  const commonProps = {
    ...props,
    isOpen: state,
    onClose: () => {
      setState(false);
      props.onClose?.();
      self.remove();
    },
    onConfirm: () => {
      setState(false);
      props.onConfirm?.();
      self.remove();
    },
  };

  Spicetify.React.useEffect(() => {
    if (state) {
      props.onOpen?.();
    }
  }, [state]);

  return isForwardRef
    ? ConfirmDialog(commonProps)
    : Spicetify.React.createElement(ConfirmDialog, commonProps);
});

export default ConfirmDialog;
