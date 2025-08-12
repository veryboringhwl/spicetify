import { memo } from "react";
import Icons from "../icons/Icons.tsx";

interface TippyButtonProps {
  tippy: string;
}

const TippyButton = memo(({ tippy }: TippyButtonProps) => {
  return (
    <Spicetify.ReactComponent.TooltipWrapper label={tippy} placement="top" showDelay={0}>
      <div className="info-tippy">
        <Icons.React.questionMark fill="var(--spice-subtext)" size={20} />
      </div>
    </Spicetify.ReactComponent.TooltipWrapper>
  );
});

export default TippyButton;
