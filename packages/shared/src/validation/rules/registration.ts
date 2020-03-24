import {
    validateEmail,
    validateRequired,
    validateMinLen,
    validateEquals,
    validatePhoneNumber,
    validateIsTrue,
}               from '../validators';
import messages from '../messages';

const rulesRegistration =  {
    title: [
        {'callback': validateRequired, 'message': messages.required},
    ],
    email           : [
        {'callback': validateRequired, 'message': messages.required},
        {'callback': validateEmail, 'message': messages.invalid_format},
    ],
    password        : [
        {'callback': validateRequired, 'message': messages.required},
        {'callback': validateMinLen, 'message': 'Password should contain at least 6 chars', params: 6},
    ],
    confirm_password: [
        {'callback': validateRequired, 'message': messages.required},
        {'callback': validateMinLen, 'message': 'Password confirmation should contain at least 6 chars', params: 6},
        {'callback': validateEquals, 'message': 'Password confirmation should match the password', meta: 'password'},
    ],
    first_name      : [
        {'callback': validateRequired, 'message': messages.required},
        {'callback': validateMinLen, 'message': 'First name should contain at least 3 chars', params: 3},
    ],
    last_name       : [
        {'callback': validateRequired, 'message': messages.required},
        {'callback': validateMinLen, 'message': 'Last name should contain at least 3 chars', params: 3},
    ],
    phone1          : [
        {'callback': validateRequired, 'message': messages.required},
        {'callback': validatePhoneNumber, 'message': messages.invalid_format},
    ],
    age             : [
        {'callback': validateIsTrue, 'message': messages.required},
    ],
};

export default rulesRegistration;
