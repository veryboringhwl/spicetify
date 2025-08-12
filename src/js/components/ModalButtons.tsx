import Icons from "../icons/Icons.tsx";

const ModalButtons = () => {
  return (
    <>
      <Spicetify.ReactComponent.TooltipWrapper label="GitHub" placement="top">
        <button
          className="main-trackCreditsModal-githubBtn"
          onClick={() => window.open("https://github.com/veryboringhwl/spicetify")}
        >
          <Icons.React.github size={18} />
        </button>
      </Spicetify.ReactComponent.TooltipWrapper>
      <Spicetify.ReactComponent.TooltipWrapper label="Close" placement="top">
        <button
          className="main-trackCreditsModal-closeBtn"
          onClick={() => Spicetify.PopupModal.hide()}
        >
          <Icons.React.close size={18} />
        </button>
      </Spicetify.ReactComponent.TooltipWrapper>
    </>
  );
};

export default ModalButtons;
