import { AnyAction } from 'redux';
import { ArrStrStr, ValidationRules, ValidationData } from '../types/common';
declare class FormValidator {
    readonly rules: ValidationRules;
    readonly formName: string;
    private errors;
    constructor(rules: ValidationRules, formName: string);
    validateFieldAndReduce(data: ValidationData, action: AnyAction): {
        errors: ArrStrStr;
        validation: import("../types/common").ArrStrBool;
        isFormValid: boolean;
    };
    reduceFieldError(data: ValidationData, field: string, error: string): {
        errors: ArrStrStr;
        validation: import("../types/common").ArrStrBool;
        isFormValid: boolean;
    };
    reduceFieldSuccess(data: ValidationData, field: string): {
        errors: ArrStrStr;
        validation: import("../types/common").ArrStrBool;
        isFormValid: boolean;
    };
    validateForm(data: ValidationData): boolean;
    reduceFormErrors(data: ValidationData, errors: {}): {
        errors: {};
        validation: import("../types/common").ArrStrBool;
        isFormValid: boolean;
    };
    reduceApiErrors(data: ValidationData, errorsApi: ArrStrStr): {
        errors: ArrStrStr;
        validation: import("../types/common").ArrStrBool;
        isFormValid: boolean;
        isSubmitting: boolean;
    };
    getErrors(formName: string): {};
    private runFieldValidation;
    private prepareFieldRules;
    private isFormValid;
    private setErrors;
}
export default FormValidator;
