const Window = {
  Reload: () => {
    location.reload();
  },
  Restart: () => {
    Spicetify.Platform.UpdateAPI.applyUpdate();
  },
};

export default Window;
