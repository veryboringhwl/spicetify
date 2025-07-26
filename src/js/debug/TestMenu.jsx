import { useState } from "react";
import PopupModal from "../components/PopupModal.jsx";
import Dropdown from "../menu/components/Dropdown.jsx";
import Input from "../menu/components/Input.jsx";
import RadioButton from "../menu/components/RadioButton.jsx";
import Toggle from "../menu/components/Toggle.jsx";
import DebugMenu from "./DebugMenu.jsx";

const TestMenu = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [radioValue, setRadioValue] = useState("option1");
  const [dropdownValue, setDropdownValue] = useState("dropdown1");

  const handleToggleChange = () => {
    const newValue = !toggleValue;
    setToggleValue(newValue);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleRadioChange = (newValue) => {
    setRadioValue(newValue);
  };

  const handleDropdownChange = (newValue) => {
    setDropdownValue(newValue);
  };

  return (
    <div>
      <h2>Component Test Menu</h2>

      <h3>Toggle Component</h3>
      <Toggle value={toggleValue} onChange={handleToggleChange} />
      <p>Current Toggle Value: {toggleValue.toString()}</p>

      <h3>Input Component</h3>
      <Input value={inputValue} onChange={handleInputChange} placeholder="Type something..." />
      <p>Current Input Value: {inputValue}</p>

      <h3>Radio Button Component</h3>
      <RadioButton
        options={[
          { label: "Radio Button Item 1", value: "option1" },
          { label: "Radio Button Item 2", value: "option2" },
          { label: "Radio Button Item 3", value: "option3" },
        ]}
        selected={radioValue}
        onChange={handleRadioChange}
      />
      <p>Current Radio Button Value: {radioValue}</p>

      <h3>Dropdown Component</h3>
      <Dropdown
        options={[
          { label: "Dropdown Item 1", value: "option1" },
          { label: "Dropdown Item 2", value: "option2" },
          { label: "Dropdown Item 3", value: "option3" },
        ]}
        value={dropdownValue}
        onChange={handleDropdownChange}
      />
      <p>Current Dropdown Value: {dropdownValue}</p>
      <button
        onClick={() => {
          PopupModal({ title: "Debug Menu", content: <DebugMenu isLarge={true} /> });
        }}
      >
        Debug Menu
      </button>
    </div>
  );
};

export default TestMenu;
