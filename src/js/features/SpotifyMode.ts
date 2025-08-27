type SpotifyModeType = "default" | "developer";
type ProductStatePairs = { [key: string]: string };

export const SpotifyMode = async (mode: SpotifyModeType): Promise<void> => {
  if (!Spicetify.Platform.ProductStateAPI?.productStateApi) {
    return;
  }

  const modePairs: Record<SpotifyModeType, ProductStatePairs> = {
    default: { "app-developer": "0" },
    developer: { "app-developer": "2" },
  };

  const pairs = modePairs[mode] || modePairs.default;

  const setMode = async (key: string, value: string) => {
    // Put the value
    await Spicetify.Platform.ProductStateAPI.productStateApi.putValues({ pairs: { [key]: value } });

    // Subscribe to changes to ensure it sticks. Sometimes Spotify overrides it.
    return Spicetify.Platform.ProductStateAPI.productStateApi.subValues(
      { keys: [key] },
      (newValues: ProductStatePairs) => {
        if (newValues[key] !== value) {
          // If the value changes, immediately set it back.
          Spicetify.Platform.ProductStateAPI.productStateApi.putValues({ pairs: { [key]: value } });
        }
      },
    );
  };

  // To avoid multiple listeners, cancel the previous one if it exists.
  // We need to attach the listener to a global object to persist it.
  if ((window as any).appDevListener) {
    (window as any).appDevListener.cancel();
  }

  (window as any).appDevListener = await setMode("app-developer", pairs["app-developer"]);
};
