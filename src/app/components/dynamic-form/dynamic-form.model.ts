
export interface Field
{
    label:string;
    type:FieldType;
    placeholder?:string;
    possibleValues?:string[];
    options?: { [key:string] :string };
    validators?: Validator[] 
}

export enum FieldType 
{
    TEXT = "text",
    TEXTAREA = "textarea",
    COMBOBOX = "combobox",
    RADIO = "radio",
    ADDRESS = "address" 
}

export interface Validator
{
    validatorType:ValidatorType;
    value:string | number | RegExp;
}

export enum ValidatorType
{
    REQUIRED = "required",
    MIN_LENGTH = "minLength",
    MAX_LENGTH = "maxLength",
    PATTERN = "pattern"
} 


export const ADDRESS_FORM  = JSON.stringify([
    { label: 'Address Line1', type: FieldType.TEXT },
    { label: 'Address Line2', type: FieldType.TEXT },  
    { label: 'City', type: FieldType.TEXT },  
    { label: 'Zip Code', type: FieldType.TEXT }

]);
