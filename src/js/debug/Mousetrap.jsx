import PopupModal from "../components/PopupModal";
import DebugMenu from "./DebugMenu";

const Mousetrap = () => {
  Spicetify.Mousetrap.bind(
    [
      "up up down down left right left right b a",
      "v e r s i o n",
      "s p o t i f y",
      "s p i c e t i f y",
      "d e b u g",
    ],
    () => {
      PopupModal({
        title: "Theme Version",
        content: DebugMenu,
      });
    },
  );
};

export default Mousetrap;
