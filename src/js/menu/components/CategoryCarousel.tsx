import React, { memo, RefObject, useEffect, useRef } from "react";

interface CategoryCarouselProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryCarousel = memo(
  ({ categories, selectedCategory, onSelectCategory }: CategoryCarouselProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      };

      const carousel = carouselRef.current;
      carousel?.addEventListener("wheel", handleWheel, { passive: false });
      return () => carousel?.removeEventListener("wheel", handleWheel);
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

export default CategoryCarousel;
