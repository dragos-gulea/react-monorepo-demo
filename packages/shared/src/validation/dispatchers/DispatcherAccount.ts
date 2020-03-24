import DispatcherBase                                  from './DispatcherBase';
import {updateAccountData, handleFormValidationErrors} from '../../actions/account';

export default class DispatcherAccount extends DispatcherBase {
    onSuccess() {
        return updateAccountData;
    }

    onFailure() {
        return handleFormValidationErrors;
    }
}
