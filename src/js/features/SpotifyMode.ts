const SpotifyMode = async (mode) => {
  if (!Spicetify.Platform.ProductStateAPI.productStateApi) {
    return;
  }

  // employee doesnt seem to work 1.2.55+
  const modePairs = {
    default: { "app-developer": "0" },
    developer: { "app-developer": "2" },
  };

  const pairs = modePairs[mode] || modePairs.default;

  const setMode = async (key, value) => {
    await Spicetify.Platform.ProductStateAPI.productStateApi.putValues({
      pairs: { [key]: value },
    });
    return Spicetify.Platform.ProductStateAPI.productStateApi.subValues(
      { keys: [key] },
      async (newValues) => {
        if (newValues[key] !== value) {
          await Spicetify.Platform.ProductStateAPI.productStateApi.putValues({
            pairs: { [key]: value },
          });
        }
      },
    );
  };

  window.appDevListener?.cancel();
  window.appDevListener = await setMode("app-developer", pairs["app-developer"]);
};

export default SpotifyMode;
