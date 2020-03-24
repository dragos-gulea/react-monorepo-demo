import { validateRequired, validateMinLen, validateEquals, validateIsTrue } from '../validators';
declare const rulesRegistration: {
    title: {
        'callback': typeof validateRequired;
        'message': string;
    }[];
    email: {
        'callback': typeof validateRequired;
        'message': string;
    }[];
    password: ({
        'callback': typeof validateRequired;
        'message': string;
        params?: undefined;
    } | {
        'callback': typeof validateMinLen;
        'message': string;
        params: number;
    })[];
    confirm_password: ({
        'callback': typeof validateRequired;
        'message': string;
        params?: undefined;
        meta?: undefined;
    } | {
        'callback': typeof validateMinLen;
        'message': string;
        params: number;
        meta?: undefined;
    } | {
        'callback': typeof validateEquals;
        'message': string;
        meta: string;
        params?: undefined;
    })[];
    first_name: ({
        'callback': typeof validateRequired;
        'message': string;
        params?: undefined;
    } | {
        'callback': typeof validateMinLen;
        'message': string;
        params: number;
    })[];
    last_name: ({
        'callback': typeof validateRequired;
        'message': string;
        params?: undefined;
    } | {
        'callback': typeof validateMinLen;
        'message': string;
        params: number;
    })[];
    phone1: {
        'callback': typeof validateRequired;
        'message': string;
    }[];
    age: {
        'callback': typeof validateIsTrue;
        'message': string;
    }[];
};
export default rulesRegistration;
