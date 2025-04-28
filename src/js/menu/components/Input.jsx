import React from "react";
import OptionRow from "./OptionRow";
import Tippy from "../../components/Tippy";

const Input = React.memo(
	({ name, desc, tippy, value, onChange, placeholder, popupModal }) => {
		const inputRef = React.useRef(null);

		React.useEffect(() => {
			if (inputRef.current && tippy) {
				Tippy(inputRef.current, tippy);
			}
		}, [tippy]);

		const handleChange = React.useCallback(
			(e) => {
				onChange(`theme:${name}`, e.target.value);
			},
			[name, onChange]
		);

		return (
			<OptionRow name={name} desc={desc} popupModal={popupModal}>
				<input
					className="themeOptionInput"
					type="text"
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
					ref={inputRef}
				/>
			</OptionRow>
		);
	}
);

export default Input;
