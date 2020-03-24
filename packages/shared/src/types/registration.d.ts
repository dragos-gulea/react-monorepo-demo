import { ArrStrStr, FuncArgsUnknownVoid, HistoryObject, Navigation, NavigationWParams } from './common';
export declare type RegistrationProps = {
    email: string;
    password: string;
    confirm_password: string;
    title: string;
    first_name: string;
    last_name: string;
    phone1: string;
    age: false;
    country?: string;
    language?: string;
    errors: {
        title: string;
        email: string;
        password: string;
        confirm_password: string;
        first_name: string;
        last_name: string;
        phone1: string;
        age: string;
    };
    validation: {
        title: boolean;
        email: boolean;
        password: boolean;
        confirm_password: boolean;
        first_name: boolean;
        last_name: boolean;
        phone1: boolean;
        age: boolean;
    };
    isFormValid: boolean;
    isSubmitting: boolean;
    showModal: boolean;
    clientTitles: ArrStrStr;
    navigation: NavigationWParams;
    loadClientTitles: () => void;
    validateField: (field: string, value: string | boolean) => void;
    validateForm: () => void;
    updateFormData: (data: {}) => {};
    registerClient: (data: {}, navigation: Navigation) => {};
    registerClientComplete: () => void;
};
export declare type RegistrationData = {
    email: string;
    password: string;
    confirm_password: string;
    title: string;
    first_name: string;
    last_name: string;
    phone1: string;
    age: false;
    country?: string;
    language?: string;
};
export interface RegistrationComponentProps {
    data: RegistrationProps;
    onSubmit: FuncArgsUnknownVoid;
    onChange: FuncArgsUnknownVoid;
    history: HistoryObject;
}
