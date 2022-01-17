import React from 'react';
import { BooleanProps } from './inputProps';

function RadioInput({
	value, property, id, onChange,
}:BooleanProps) {
	const handleChange = (selectedValue:boolean) => {
		onChange(property, selectedValue);
	};
	return (
		<div style={{ display: 'flex', gap: 10 }}>
			<p>{property}</p>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<input
					type="radio"
					id="true"
					name={id}
					checked={value === true}
					value={value.toString()}
					onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(true)}
				/>
				True
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<input
					type="radio"
					name={id}
					checked={value === false}
					value={value.toString()}
					onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(false)}
				/>
				False
			</div>

		</div>

	);
}

export default React.memo(RadioInput);
