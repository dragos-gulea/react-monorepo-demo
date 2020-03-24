export default class DispatcherBase {
    onSuccess(): any {
    }

    onFailure(): any {
    }

    run(isValid: boolean, data: {}, errors: {}) {
        if (isValid) {
            return this.onSuccess()(data);

        } else {
            return this.onFailure()(errors);
        }
    }
}
