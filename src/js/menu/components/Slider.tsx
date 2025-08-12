import { memo, useCallback, useEffect, useRef } from "react";

interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange: (value: number) => void;
  onRelease?: () => void;
  disabled?: boolean;
}

const Slider = memo(
  ({
    value,
    min = 0,
    max = 100,
    step = 1,
    defaultValue,
    onChange,
    onRelease,
    disabled,
  }: SliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const controlledValue = value !== undefined ? value : defaultValue;
    const progress =
      max > min && controlledValue !== undefined
        ? ((controlledValue - min) / (max - min)) * 100
        : 0;

    const handleInteraction = useCallback(
      (e: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent, isTouch = false) => {
        if (!sliderRef.current || disabled) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const clientX = isTouch
          ? (e as TouchEvent | React.TouchEvent).touches[0].clientX
          : (e as MouseEvent | React.MouseEvent).clientX;
        const newX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        let newValue = (newX / rect.width) * (max - min) + min;
        newValue = Math.round(newValue / step) * step;
        newValue = Math.max(min, Math.min(newValue, max));

        onChange(newValue);
      },
      [min, max, step, onChange, disabled],
    );

    const handleMouseDown = useCallback(
      (e: React.MouseEvent) => {
        if (disabled) return;
        isDragging.current = true;
        handleInteraction(e, false);
      },
      [handleInteraction, disabled],
    );

    const handleTouchStart = useCallback(
      (e: React.TouchEvent) => {
        if (disabled) return;
        isDragging.current = true;
        handleInteraction(e, true);
      },
      [handleInteraction, disabled],
    );

    const handleMouseUp = useCallback(() => {
      if (isDragging.current) {
        onRelease?.();
      }
      isDragging.current = false;
    }, [onRelease]);

    const handleTouchEnd = handleMouseUp;

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!isDragging.current) return;
        e.preventDefault();
        handleInteraction(e, false);
      },
      [handleInteraction],
    );

    const handleTouchMove = useCallback(
      (e: TouchEvent) => {
        if (!isDragging.current) return;
        handleInteraction(e, true);
      },
      [handleInteraction],
    );

    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

    return (
      // @ts-ignore
      <div className="slider" disabled={disabled}>
        <div
          className="slider-container"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          ref={sliderRef}
        >
          <div className="slider__track">
            <div
              className="slider__fill"
              style={{
                width: `${progress}%`,
              }}
            />
            <div
              className="slider__thumb"
              style={{
                left: `${progress}%`,
              }}
            />
          </div>
        </div>
        );
      </div>
    );
  },
);

export default Slider;
