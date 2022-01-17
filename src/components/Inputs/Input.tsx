import React from 'react';
import { InputProps } from './inputProps';

function Input({ value, property, onChange }:InputProps) {
	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		onChange(property, event.target.value);
	};

	return (
		<div style={{ display: 'flex', gap: 10 }}>
			<p>{property}</p>
			<input type="text" value={value} onChange={handleChange} />
		</div>

	);
}

export default React.memo(Input);
