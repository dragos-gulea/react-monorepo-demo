import {AnyAction}                                                            from 'redux';
import {ArrStrObj, ArrStrStr, ArrStrUnknown, ValidationRules, ValidationData} from '../types/common';

class FormValidator {

    readonly rules   : ValidationRules;
    readonly formName: string;

    private errors: ArrStrObj = {};

    constructor(rules: ValidationRules, formName: string) {
        this.rules    = rules;
        this.formName = formName;
    }

    validateFieldAndReduce(data: ValidationData, action: AnyAction) {
        const {field, value} = action.payload;

        this.prepareFieldRules(field, data);

        const error = this.runFieldValidation(field, value);

        if (error) {
            return this.reduceFieldError(data, field, error);

        } else {
            return this.reduceFieldSuccess(data, field);
        }
    }

    reduceFieldError(data: ValidationData, field: string, error: string) {
        let errors     = data.errors;
        let validation = data.validation;

        errors[field]     = error;
        validation[field] = false;

        return {...data, errors, validation, isFormValid: this.isFormValid(data)};
    }

    reduceFieldSuccess(data: ValidationData, field: string) {
        let errors     = data.errors;
        let validation = data.validation;

        errors[field]     = '';
        validation[field] = true;

        return {...data, errors, validation, isFormValid: this.isFormValid(data)};
    }

    validateForm(data: ValidationData) {
        let errors: ArrStrStr = {};
        let isValid: boolean  = true;
        let self              = this;

        Object.keys(this.rules).forEach(function (field) {
            self.prepareFieldRules(field, data);

            const error   = self.runFieldValidation(field, data[field]);
            errors[field] = error;

            if (isValid && error) {
                isValid = false;
            }
        });

        if (!isValid) {
            this.setErrors(errors);
        }

        return isValid;
    }

    reduceFormErrors(data: ValidationData, errors: {}) {
        let validation = data.validation;

        for (let [field, error] of Object.entries(errors)) {
            if (error) {
                validation[field] = false;
            }
        }

        return {...data, errors, validation, isFormValid: this.isFormValid(data)};
    }

    reduceApiErrors(data: ValidationData, errorsApi: ArrStrStr) {
        let errors     = data.errors;
        let validation = data.validation;

        for (let [key, value] of Object.entries(errorsApi)) {
            errors[key]     = value;
            validation[key] = false;
        }

        return {...data, errors, validation, isFormValid: this.isFormValid(data), isSubmitting: false};
    }

    getErrors(formName: string) {
        return this.errors[formName];
    }

    private runFieldValidation(field: string, value: unknown) {
        let error = '';

        for (let rule of this.rules[field]) {
            let params = typeof rule.params !== 'undefined' ? rule.params : null;
            let result = params ? rule.callback(value, params) : rule.callback(value);

            if (result === false) {
                error = rule.message;
                break;
            }
        }

        return error;
    }

    private prepareFieldRules(field: string, data: ArrStrUnknown) {
        if (field === 'confirm_password') {
            this.rules[field].forEach(rule => {
                if (typeof rule.meta !== 'undefined' && rule.meta === 'password') {
                    rule.params = data.password;
                }
            });
        }
    }

    private isFormValid(data: ValidationData) {
        let isValid    = true;
        let validation = data.validation;

        Object.keys(validation).forEach(key => {
            if (!validation[key]) {
                isValid = false;
            }
        });

        return isValid;
    }

    private setErrors(errors: ArrStrStr) {
        this.errors[this.formName] = errors;
    }
}

export default FormValidator;
