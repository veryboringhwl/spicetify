const SpotifyMode = async (mode) => {
  if (!Spicetify.Platform.UserAPI._product_state_service) {
    setTimeout(() => SpotifyMode(mode), 100);
    return;
  }

  // Spicetify.Platform.ProductStateAPI.productStateApi.getValues()
  // employee seems to not work 1.2.55+
  const modePairs = {
    default: { "app-developer": "0", employee: "0" },
    developer: { "app-developer": "2", employee: "0" },
    employee: { "app-developer": "0", employee: "1" },
    both: { "app-developer": "2", employee: "1" },
  };

  const pairs = modePairs[mode] || modePairs.default;

  const setMode = async (key, value) => {
    await Spicetify.Platform.UserAPI._product_state_service.putValues({
      pairs: { [key]: value },
    });
    return Spicetify.Platform.UserAPI._product_state_service.subValues(
      { keys: [key] },
      async (newValues) => {
        if (newValues[key] !== value) {
          await Spicetify.Platform.UserAPI._product_state_service.putValues({
            pairs: { [key]: value },
          });
        }
      },
    );
  };

  window.appDevListener?.cancel();
  window.employeeListener?.cancel();
  window.appDevListener = await setMode("app-developer", pairs["app-developer"]);
  window.employeeListener = await setMode("employee", pairs.employee);
};

export default SpotifyMode;
