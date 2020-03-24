import { RegistrationData } from '../../types/registration';
export declare const loadClientTitles: () => (dispatch: import("redux").Dispatch<any>) => void;
export declare const updateFormData: (data: {}) => {
    type: string;
    data: {};
};
export declare const validateField: (field: string, value: string | boolean) => {
    type: string;
    payload: {
        field: string;
        value: string | boolean;
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
export declare const registerClient: (data: RegistrationData) => (dispatch: import("redux").Dispatch<any>) => void;
export declare const registerClientSuccess: (dispatch: import("redux").Dispatch<any>) => void;
export declare const registerClientComplete: () => {
    type: string;
};
