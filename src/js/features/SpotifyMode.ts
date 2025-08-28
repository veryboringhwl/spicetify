type SpotifyModeType = "default" | "developer" | "employee" | "both";
type ProductStatePairs = Record<string, string>;

const productStateSubscriptions = new Map<string, { cancel: () => void }>();

const setEmployee = async (enabled: boolean): Promise<void> => {
  await Spicetify.Platform.RemoteConfigDebugAPI.setOverride(
    { source: "web", type: "boolean", name: "enableDebugTools" },
    enabled,
  );
};

const setDeveloper = async (enabled: boolean): Promise<void> => {
  const value = enabled ? "2" : "0";

  productStateSubscriptions.get("app-developer")?.cancel();
  const pairs = { "app-developer": value };

  await Spicetify.Platform.ProductStateAPI.productStateApi.putValues({ pairs }, {});
  const subscription = await (Spicetify.Platform.ProductStateAPI.productStateApi.subValues(
    { keys: ["app-developer"] },
    (newValues: ProductStatePairs) => {
      if (newValues["app-developer"] !== value) {
        Spicetify.Platform.ProductStateAPI.productStateApi.putValues({ pairs }, {});
      }
    },
  ) as Promise<{ cancel: () => void }>);

  productStateSubscriptions.set("app-developer", subscription);
};

const MODE_CONFIG = {
  default: { employee: false, developer: false },
  developer: { employee: false, developer: true },
  employee: { employee: true, developer: false },
  both: { employee: true, developer: true },
};

export const SpotifyMode = async (mode: SpotifyModeType): Promise<void> => {
  const config = MODE_CONFIG[mode];

  await Promise.all([setEmployee(config.employee), setDeveloper(config.developer)]);
};
