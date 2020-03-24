import { LoginData } from '../../types/login';
import { FuncArgsUnknownVoid } from '../../types/common';
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
export declare const loginClient: (data: LoginData, callback: FuncArgsUnknownVoid) => (dispatch: import("redux").Dispatch<any>) => void;
