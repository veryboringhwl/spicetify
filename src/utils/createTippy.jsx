const createTippy = (element, content) => {
  if (content) {
    Spicetify.Tippy(element, {
      ...Spicetify.TippyProps,
      content,
      placement: "top-start",
      delay: [0, 0],
      offset: [-40, 0],
      onShow(instance) {
        instance.popper.classList.add("options-tippy");
      },
    });
  }
};

export default createTippy;
