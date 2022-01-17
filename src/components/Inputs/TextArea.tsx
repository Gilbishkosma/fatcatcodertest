import React from 'react';
import { InputProps } from './inputProps';

function TeaxtArea({ value, property, onChange }:InputProps) {
	const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange(property, event.target.value);
	};
	return (
		<div style={{ display: 'flex', gap: 10 }}>
			<p>{property}</p>
			<textarea value={value} onChange={handleChange} rows={4} cols={50} />
		</div>
	);
}

export default React.memo(TeaxtArea);
