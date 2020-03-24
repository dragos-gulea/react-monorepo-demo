import initialState         from './initialState';
import {
    LOAD_CLIENT_TITLES,
    UPDATE_FORM_DATA,
    VALIDATE_FIELD,
    HANDLE_FORM_VALIDATION_ERRORS,
    REGISTRATION_START,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    REGISTRATION_COMPLETE,
}                           from '../../actions/registration/names';
import rulesRegistration    from '../../validation/rules/registration';
import FormValidator        from '../../validation/FormValidator';
import {AnyAction, Reducer} from 'redux';

const validator = new FormValidator(rulesRegistration, 'registration');

const RegisterReducer: Reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case LOAD_CLIENT_TITLES:
            return {...state, clientTitles: action.payload, title: Object.keys(action.payload)[0]};

        case UPDATE_FORM_DATA:
            return {...state, ...action.data};

        case VALIDATE_FIELD:
            return validator.validateFieldAndReduce(state, action);

        case HANDLE_FORM_VALIDATION_ERRORS:
            return validator.reduceFormErrors(state, action.errors);

        case REGISTRATION_START:
            return {...state, ...action.data, isSubmitting: true};

        case REGISTRATION_SUCCESS:
            const clientTitles = state.clientTitles;
            const title        = Object.keys(clientTitles)[0];

            return {...initialState, title: title, clientTitles: clientTitles, showModal: true};

        case REGISTRATION_FAIL:
            return validator.reduceApiErrors(state, action.errors);

        case REGISTRATION_COMPLETE:
            return {...state, showModal: false};

        default:
            return state;
    }
};

export default RegisterReducer;
