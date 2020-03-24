import { AccountData } from '../../types/account';
export declare const fetchData: () => (dispatch: import("redux").Dispatch<any>) => void;
export declare const updateFormData: (data: {}) => {
    type: string;
    data: {};
};
export declare const validateField: (field: string, value: any) => {
    type: string;
    payload: {
        field: string;
        value: any;
    };
};
export declare const validateForm: () => {
    type: string;
    payload: {
        formName: string;
    };
};
export declare const handleFormValidationErrors: (errors: {}) => {
    type: string;
    errors: {};
};
export declare const updateAccountData: (data: AccountData) => (dispatch: import("redux").Dispatch<any>) => void;
export declare const updateAccountComplete: () => {
    type: string;
};
