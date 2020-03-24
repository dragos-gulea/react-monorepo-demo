import DispatcherBase from './DispatcherBase';
export default class DispatcherAccount extends DispatcherBase {
    onSuccess(): (data: import("../../types/account").AccountData) => (dispatch: import("redux").Dispatch<any>) => void;
    onFailure(): (errors: {}) => {
        type: string;
        errors: {};
    };
}
