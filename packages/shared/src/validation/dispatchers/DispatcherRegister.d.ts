import DispatcherBase from './DispatcherBase';
export default class DispatcherRegister extends DispatcherBase {
    onSuccess(): (data: import("../../types/registration").RegistrationData) => (dispatch: import("redux").Dispatch<any>) => void;
    onFailure(): (errors: {}) => {
        type: string;
        errors: {};
    };
}
