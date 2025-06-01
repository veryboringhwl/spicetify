import React, { memo, useRef, useEffect } from "react";

const CategoryCarousel = memo(({ categories, selectedCategory, onSelectCategory }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener("wheel", handleWheel, { passive: false });
    return () => carousel?.removeEventListener("wheel", handleWheel);
  }, []);

  const totalButtons = categories.length;
  const buttonWidth = `calc((100% - ${(totalButtons - 1) * 8}px) / ${totalButtons})`;

  return (
    <div className="carouselContainer" ref={carouselRef}>
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${selectedCategory === category ? "active" : ""}`}
          onClick={() => onSelectCategory(category)}
          style={{
            width: buttonWidth,
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
});

export default CategoryCarousel;
