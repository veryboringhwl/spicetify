import React from "react";
import Tippy from "../../components/Tippy";
import OptionRow from "./OptionRow";

const Dropdown = React.memo(
	({ name, desc, tippy, value, options, onChange, popupModal }) => {
		const dropdownRef = React.useRef(null);

		React.useEffect(() => {
			if (dropdownRef.current && tippy) {
				Tippy(dropdownRef.current, tippy);
			}
		}, [tippy]);

		const handleChange = React.useCallback(
			(e) => {
				onChange(`theme:${name}`, e.target.value);
			},
			[name, onChange],
		);

		return (
			<OptionRow name={name} desc={desc} popupModal={popupModal}>
				<select
					className="themeOptionDropdown"
					value={value}
					onChange={handleChange}
					ref={dropdownRef}
				>
					{options.map(({ value, label }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</OptionRow>
		);
	},
);

export default Dropdown;
