import rulesRegistration from './registration';
import rulesAccount      from './account';
import rulesLogin        from './login';
import {ValidationRules} from '../../types/common';

const rules: { [k: string]: ValidationRules } = {
    'login'   : rulesLogin,
    'register': rulesRegistration,
    'account' : rulesAccount,
};

export default rules;
