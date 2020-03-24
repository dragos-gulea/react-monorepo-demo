import DispatcherBase                               from './DispatcherBase';
import {registerClient, handleFormValidationErrors} from '../../actions/registration';

export default class DispatcherRegister extends DispatcherBase {
    onSuccess() {
        return registerClient;
    }

    onFailure() {
        return handleFormValidationErrors;
    }
}
