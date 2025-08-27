import { type FC, memo, type RefObject, useEffect, useRef, type WheelEvent } from "react";
import type { CategoryCarouselProps } from "../../types/temp.d.ts";

export const CategoryCarousel: FC<CategoryCarouselProps> = memo(
  ({ categories, selectedCategory, onSelectCategory }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const carousel = carouselRef.current;
      const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
        if (carousel) {
          carousel.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      };
      // Type assertion is needed because the event listener API is generic
      carousel?.addEventListener("wheel", handleWheel as unknown as EventListener, {
        passive: false,
      });
      return () => carousel?.removeEventListener("wheel", handleWheel as unknown as EventListener);
    }, []);

    return (
      <div className="carousel" ref={carouselRef as RefObject<HTMLDivElement>}>
        {categories.map((category) => (
          <button
            className={`carousel__button ${selectedCategory === category ? "carousel__button--active" : ""}`}
            key={category}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  },
);
