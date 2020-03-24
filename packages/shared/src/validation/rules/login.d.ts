import { validateRequired } from '../validators';
declare const rulesLogin: {
    email: {
        'callback': typeof validateRequired;
        'message': string;
    }[];
    password: {
        'callback': typeof validateRequired;
        'message': string;
    }[];
};
export default rulesLogin;
