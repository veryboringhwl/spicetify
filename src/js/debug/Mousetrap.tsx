import { PopupModal } from "../components/PopupModal.tsx";
import { TestMenu } from "./TestMenu.tsx";

export const Mousetrap = (): void => {
  Spicetify.Mousetrap.bind(
    [
      "up up down down left right left right b a",
      "v e r s i o n",
      "s p o t i f y",
      "s p i c e t i f y",
      "d e b u g",
      "t e s t",
    ],
    () => {
      PopupModal({
        title: "Theme Version / Debug",
        content: <TestMenu />,
      });
    },
  );
};
