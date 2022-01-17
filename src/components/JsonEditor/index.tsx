import React from 'react';
import {
	DateInput, Input, TextArea, RadioInput,
} from '../Inputs';
import { isEmail, isDate } from '../../utils';
import { JsonDataProps } from '../../contexts/JsonDataContext';

interface JsonEditorProps{
	data: JsonDataProps[];
	handleUserUpdate: (id:string, property:string, value:string | number | boolean) => void;
}

interface RowProps{
	item: JsonDataProps;
	handleUserUpdate: (id:string, property:string, value:string | number | boolean) => void;
}

interface DataDisplayProps{
	property: string;
	value: string | number | boolean | JsonDataProps;
}

interface DataEditProps{
	property: string;
	id: string;
	value: string | number | boolean | JsonDataProps;
	handleChange: (property:string, value:string | number | boolean) => void;
}

function DataDisplay({ property, value }:DataDisplayProps) {
	return (
		<div style={{ margin: 10 }}>
			{`${property} : ${value}`}
		</div>
	);
}

const MemoizedDisplay = React.memo(DataDisplay);

function DataEdit({
	property, value, id, handleChange,
}:DataEditProps) {
	if (typeof value === 'object') {
		return <></>;
	}
	if (typeof value === 'number') {
		return <Input value={value} type="number" property={property} onChange={handleChange} />;
	}
	if (typeof value === 'boolean') {
		return <RadioInput value={value} id={id} property={property} onChange={handleChange} />;
	}
	if (typeof value === 'string' && isEmail(value)) {
		return <Input value={value} type="email" property={property} onChange={handleChange} />;
	}
	if (typeof value === 'string' && isDate(value)) {
		return <DateInput value={value} property={property} onChange={handleChange} />;
	}
	if (typeof value === 'string' && value.length > 35) {
		return <TextArea value={value} property={property} onChange={handleChange} />;
	}
	return <Input value={value} type="text" property={property} onChange={handleChange} />;
}

const MemoizedEdit = React.memo(DataEdit);

function Row({ item, handleUserUpdate }:RowProps) {
	const keys = Object.keys(item);

	const handleChange = React.useCallback((property:string, value:string | number | boolean) => {
		handleUserUpdate(item.customCreatedId, property, value);
	}, [handleUserUpdate]);

	return (
		<>
			<div style={{ padding: 10, border: '1px solid black', margin: 10 }}>
				{keys.map(key => (
					<MemoizedDisplay key={key} property={key} value={item[key]} />
				))}
			</div>
			<div style={{ padding: 10, border: '1px solid black', margin: 10 }}>
				{keys.map(key => ((key === 'id' || key === 'customCreatedId') ? '' : (
					<MemoizedEdit
						key={key}
						property={key}
						value={item[key]}
						id={item.customCreatedId}
						handleChange={handleChange}
					/>
				)))}
			</div>
		</>
	);
}
const MemoizedRow = React.memo(Row);

function JsonEditor({ data, handleUserUpdate }:JsonEditorProps) {
	return (
		<>
			{data.map(item => (
				<div key={item.customCreatedId} style={{ padding: 10, border: '1px solid black', margin: 10 }}>
					<MemoizedRow item={item} handleUserUpdate={handleUserUpdate} />
				</div>
			))}
		</>
	);
}

export default JsonEditor;
