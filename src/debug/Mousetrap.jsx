import GithubButton from "@/popup/GithubButton";

const ThemeVersion = () => {
  Spicetify.Mousetrap.bind(
    [
      "up up down down left right left right b a",
      "v e r s i o n",
      "s p o t i f y",
      "s p i c e t i f y",
      "d e b u g",
    ],
    () => {
      Spicetify.PopupModal.display({
        title: "Theme Version",
        content: Spicetify.React.createElement(themeVersion),
        isLarge: true,
      });
      GithubButton();
    }
  );
};

export default ThemeVersion;
