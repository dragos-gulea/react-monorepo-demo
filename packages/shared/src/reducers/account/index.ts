import initialState         from './initialState';
import {
    FETCH_ACCOUNT_DATA,
    UPDATE_FORM_DATA,
    VALIDATE_FIELD,
    HANDLE_FORM_VALIDATION_ERRORS,
    UPDATE_ACCOUNT_START,
    UPDATE_ACCOUNT_SUCCESS,
    UPDATE_ACCOUNT_FAIL,
    UPDATE_ACCOUNT_COMPLETE,
}                           from '../../actions/account/names';
import rulesAccount         from '../../validation/rules/account';
import FormValidator        from '../../validation/FormValidator';
import {AnyAction, Reducer} from 'redux';

const validator = new FormValidator(rulesAccount, 'account');

const AccountReducer: Reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case FETCH_ACCOUNT_DATA:
            return {...state, ...action.payload};

        case UPDATE_FORM_DATA:
            return {...state, ...action.data};

        case VALIDATE_FIELD:
            return validator.validateFieldAndReduce(state, action);

        case HANDLE_FORM_VALIDATION_ERRORS:
            return validator.reduceFormErrors(state, action.errors);

        case UPDATE_ACCOUNT_START:
            return {...state, ...action.data, isSubmitting: true};

        case UPDATE_ACCOUNT_SUCCESS:
            return {...state, isSubmitting: false, showModal: true};

        case UPDATE_ACCOUNT_FAIL:
            return validator.reduceApiErrors(state, action.errors);

        case UPDATE_ACCOUNT_COMPLETE:
            return {...state, showModal: false};

        default:
            return state;
    }
};

export default AccountReducer;
