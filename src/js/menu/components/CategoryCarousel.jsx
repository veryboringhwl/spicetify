import { memo, useEffect, useRef } from "react";

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

  return (
    <div className="carousel" ref={carouselRef}>
      {categories.map((category) => (
        <button
          key={category}
          className={`carousel__button ${selectedCategory === category ? "carousel__button--active" : ""}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
});

export default CategoryCarousel;
