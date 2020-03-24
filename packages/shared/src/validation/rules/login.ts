import {validateEmail, validateRequired} from '../validators';
import messages                          from '../messages';

const rulesLogin = {
    email   : [
        {'callback': validateRequired, 'message': messages.required},
        {'callback': validateEmail, 'message': messages.invalid_format},
    ],
    password: [
        {'callback': validateRequired, 'message': messages.required},
    ],
};

export default rulesLogin;
