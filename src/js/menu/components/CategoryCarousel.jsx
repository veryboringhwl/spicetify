import { memo, useEffect, useRef } from "react";

const CategoryCarousel = memo(({ categories }) => {
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

  const buttonWidth = `calc((100% - ${(categories.length - 1) * 8}px) / ${categories.length})`;

  return (
    <div className="carouselContainer">
      <div className="category-carousel" ref={carouselRef}>
        {categories.map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() => {
              document
                .querySelector(`.${category.toLowerCase()}Container`)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            style={{
              width: buttonWidth,
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
});

export default CategoryCarousel;
