const Window = {
  Reload: () => {
    location.reload();
  },
  Restart: () => {
    Spicetify.Platform.LifecycleAPI.restart();
  },
  stop: () => {
    Spicetify.Platform.LifecycleAPI.shutdown();
  },
};

export default Window;
