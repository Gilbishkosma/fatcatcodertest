import React, { useCallback, useState } from 'react';

export interface JsonDataProps {
	customCreatedId: string;
    [key: string]: string | number | boolean | this ;
}

export type TypeOfValue = [JsonDataProps[], React.Dispatch<React.SetStateAction<JsonDataProps[]>>]
const JsonContext = React.createContext<TypeOfValue>([[] as JsonDataProps[], () => undefined]);
JsonContext.displayName = 'Json Context';

function JsonProvider({ ...props }) {
	const [data, setData] = useState<JsonDataProps[]>([]);

	const value: TypeOfValue = React.useMemo(() => ([data, setData]), [data]);

	return <JsonContext.Provider value={value} {...props} />;
}

const useJson = () => {
	return React.useContext(JsonContext);
};

export { JsonProvider, useJson };
