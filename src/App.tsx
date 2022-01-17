import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import JsonEditor from './components/JsonEditor';
import { v4 as uuidv4 } from 'uuid';
import { useJson, TypeOfValue, JsonDataProps } from './contexts/JsonDataContext';

function App() {
	const [jsonData, setJsonData]:TypeOfValue = useJson();
	const [errorMessage, setErrorMessage] = useState('');
	const [message, setMessage] = useState('');

	const handleChange = (newData:JsonDataProps[]) => {
		// creating custom id for each item in the array
		// this will run only once when the file is uploaded
		newData.forEach((item:JsonDataProps) => {
			item.customCreatedId = uuidv4();
		});

		setJsonData(newData);
		if (errorMessage) {
			setErrorMessage('');
		}
		setMessage('');
	};

	const handleUserUpdate = React.useCallback((id:string, property:string, value:string | number | boolean) => {
		setJsonData(prevData => [...prevData].map((item:JsonDataProps) => {
			if (item.customCreatedId === id) {
				return { ...item, [property]: value };
			}
			return item;
		}));
	}, [setJsonData]);

	return (
		<div>
			<FileUploader jsonData={jsonData} onChange={handleChange} setErrorMessage={setErrorMessage} setMessage={setMessage} />
			<div style={{ color: 'red', textAlign: 'center' }}><h1>{errorMessage}</h1></div>
			<div style={{ textAlign: 'center' }}><h1>{message}</h1></div>
			<JsonEditor data={jsonData} handleUserUpdate={handleUserUpdate} />
		</div>
	);
}

export default App;
