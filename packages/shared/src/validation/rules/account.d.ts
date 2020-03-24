import { validateRequired, validateMinLen } from '../validators';
declare const rulesAccount: {
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
};
export default rulesAccount;
