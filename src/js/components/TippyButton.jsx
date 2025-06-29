import { memo } from "react";
import Icons from "../icons/Icons";

const TippyButton = memo(({ tippy }) => {
  return (
    <Spicetify.ReactComponent.TooltipWrapper label={tippy} placement="top" showDelay={0}>
      <div className="info-tippy">
        <Icons.React.questionMark size={20} fill="var(--spice-subtext)" />
      </div>
    </Spicetify.ReactComponent.TooltipWrapper>
  );
});

export default TippyButton;
