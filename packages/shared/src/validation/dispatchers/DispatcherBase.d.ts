export default class DispatcherBase {
    onSuccess(): any;
    onFailure(): any;
    run(isValid: boolean, data: {}, errors: {}): any;
}
