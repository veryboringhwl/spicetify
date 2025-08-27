export const Window = {
  Reload: (): void => {
    location.reload();
  },
  Restart: (): void => {
    Spicetify.Platform.LifecycleAPI.restart();
  },
  Stop: (): void => {
    Spicetify.Platform.LifecycleAPI.shutdown();
  },
};
