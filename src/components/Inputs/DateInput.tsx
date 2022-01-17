import React from 'react';
import { InputProps } from './inputProps';
import moment from 'moment';

function DateInput({ value, property, onChange }:InputProps) {
	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		onChange(property, event.target.value);
	};
	const format = 'YYYY-MM-DDThh:mm';
	const datetime = moment(value).format(format);
	return (
		<div style={{ display: 'flex', gap: 10 }}>
			<p>{property}</p>
			<input type="datetime-local" value={datetime} onChange={handleChange} />
		</div>
	);
}

export default React.memo(DateInput);
