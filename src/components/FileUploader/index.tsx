import React from 'react';

interface JsonDataProps {
	customCreatedId: string;
    [key: string]: string | number | boolean | this ;
}

interface FileUploaderProps {
	jsonData: JsonDataProps[];
	onChange: (newData: JsonDataProps[]) => void;
	setErrorMessage: (message: string) => void;
	setMessage: (message: string) => void;
}

function FileUploader({
	jsonData, onChange, setErrorMessage, setMessage,
}: FileUploaderProps) {
	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setMessage('Loading ... ... ... ...');
		const file = event.currentTarget.files;
		if (file?.length) {
			// read json data from file
			const reader = new FileReader();
			reader.onload = (event) => {
				const result = event?.target?.result;
				if (typeof (result) === 'string') {
					try {
						const newData = JSON.parse(result);
						onChange(newData);
					} catch (error) {
						setErrorMessage('Error parsing JSON data, please check the file.');
					}
				}
			};
			reader.readAsText(file[0]);
		}
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
			<input type="file" id="file" name="file" accept=".json, .csv, .txt" onChange={handleChange} />
		</div>

	);
}

export default FileUploader;
