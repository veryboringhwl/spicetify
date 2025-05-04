import React from "react";
import Icons from "../icons/icons";

const TippyButton = React.memo(({ tippy }) => {
  return (
    <Spicetify.ReactComponent.TooltipWrapper label={tippy} placement="top" showDelay={0}>
      <div className="themeOptionTippy">
        <Icons.React.questionMark size={20} fill="var(--spice-subtext)" />
      </div>
    </Spicetify.ReactComponent.TooltipWrapper>
  );
});

export default TippyButton;
