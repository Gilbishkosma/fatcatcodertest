import React from 'react';

export interface InputProps{
	value:string | number;
    type?: string;
    property: string;
    onChange: (property:string, value:string|boolean|number) => void;
}

export interface BooleanProps{
    value: boolean;
    property: string;
    id: string;
    onChange: (property:string, value:string|boolean|number) => void;
}
