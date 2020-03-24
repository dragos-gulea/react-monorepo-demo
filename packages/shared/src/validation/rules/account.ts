import {
    validateRequired,
    validateMinLen,
    validatePhoneNumber,
}               from '../validators';
import messages from '../messages';

const rulesAccount = {
    first_name: [
        {'callback': validateRequired, 'message': messages.required},
        {'callback': validateMinLen, 'message': 'First name should contain at least 3 chars', params: 3},
    ],
    last_name : [
        {'callback': validateRequired, 'message': messages.required},
        {'callback': validateMinLen, 'message': 'Last name should contain at least 3 chars', params: 3},
    ],
    phone1    : [
        {'callback': validateRequired, 'message': messages.required},
        {'callback': validatePhoneNumber, 'message': messages.invalid_format},
    ],
};

export default rulesAccount;
