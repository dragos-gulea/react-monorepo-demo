import { FuncArgsUnknownVoid } from './common';
export declare type LoginProps = {
    email: string;
    password: string;
    loggedIn: boolean;
    loading: boolean;
    error: string;
    errors: {
        email: string;
        password: string;
    };
    validation: {
        email: boolean;
        password: boolean;
    };
    isFormValid: boolean;
    navigation: any;
    updateFormData: (data: {}) => {};
    validateField: (field: string, value: string | boolean) => void;
    loginClient: (data: LoginData, callback: FuncArgsUnknownVoid) => void;
};
export declare type LoginData = {
    login: string;
    password: string;
};
export interface LoginComponentProps {
    data: LoginProps;
    onChange: FuncArgsUnknownVoid;
    onButtonPress: FuncArgsUnknownVoid;
    history: {
        push: FuncArgsUnknownVoid;
    };
}
