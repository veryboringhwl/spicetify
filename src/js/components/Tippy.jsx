const Tippy = (element, content) => {
  if (content) {
    Spicetify.Tippy(element, {
      ...Spicetify.TippyProps,
      content,
      placement: "top",
      delay: [0, 0],
      onShow(instance) {
        instance.popper.classList.add("options-tippy");
      },
    });
  }
};

export default Tippy;
