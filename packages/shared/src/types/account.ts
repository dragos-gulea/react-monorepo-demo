import {FuncArgsUnknownVoid} from './common';

export type AccountProps = {
    first_name           : string,
    last_name            : string,
    phone1               : string,
    title                : string,
    country              : string,
    language             : string,
    errors               : {
        first_name: string,
        last_name : string,
        phone1    : string,
    },
    validation           : {
        first_name: boolean,
        last_name : boolean,
        phone1    : boolean,
    },
    isFormValid          : boolean,
    isSubmitting         : boolean,
    showModal            : boolean,
    fetchData            : () => void,
    updateFormData       : (data: {}) => {},
    validateField        : (field: string, value: string) => {}
    validateForm         : () => {},
    updateAccountComplete: () => {},
}

export type AccountData = {
    token     : string,
    first_name: string,
    last_name : string,
    phone1    : string,
    title    ?: string,
    country?  : string,
    language? : string,
    user      : {
        metadata: {
            first_name: string,
            last_name : string,
            phone1    : string,
        }
    }
}

export interface AccountComponentProps {
    data    : AccountProps,
    onSubmit: FuncArgsUnknownVoid,
    onChange: FuncArgsUnknownVoid,
}
