const CategoryCarousel = Spicetify.React.memo(
  ({ categories, onCategoryClick }) => {
    const carouselRef = Spicetify.React.useRef(null);

    Spicetify.React.useEffect(() => {
      const handleWheel = (e) => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      };

      const carousel = carouselRef.current;
      if (carousel) {
        carousel.addEventListener("wheel", handleWheel, { passive: false });
        return () => carousel.removeEventListener("wheel", handleWheel);
      }
    }, []);

    const scrollToCategory = Spicetify.React.useCallback((category) => {
      const element = document.querySelector(
        `.${category.toLowerCase()}Container`
      );
      if (element)
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    const buttonWidth = Spicetify.React.useMemo(
      () =>
        `calc((100% - ${(categories.length - 1) * 8}px) / ${
          categories.length
        })`,
      [categories.length]
    );

    const categoryButtons = Spicetify.React.useMemo(
      () =>
        categories.map((category, index) =>
          Spicetify.React.createElement(
            "button",
            {
              key: category,
              className: "category-button",
              onClick: () => scrollToCategory(category),
              style: {
                width: buttonWidth,
                marginRight: index < categories.length - 1 ? "8px" : "0",
              },
            },
            category
          )
        ),
      [categories, buttonWidth, onCategoryClick]
    );

    return Spicetify.React.createElement(
      "div",
      { className: "category-carousel-container" },
      Spicetify.React.createElement(
        "div",
        { className: "category-carousel", ref: carouselRef },
        categoryButtons
      )
    );
  }
);

export default CategoryCarousel;
