import {
    VALIDATE_FIELD,
    UPDATE_FORM_DATA,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
}                                         from '../../actions/login/names';
import initialState                       from './initialState';
import {AnyAction, Reducer}               from 'redux';
import FormValidator                      from '../../validation/FormValidator';
import rulesLogin                         from '../../validation/rules/login';

const validator = new FormValidator(rulesLogin, 'login');

const LoginReducer: Reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case UPDATE_FORM_DATA:
            return {...state, ...action.data};

        case VALIDATE_FIELD:
            return validator.validateFieldAndReduce(state, action);

        case LOGIN_START:
            return {...state, loading: true, error: ''};

        case LOGIN_SUCCESS:
            return {...initialState, loggedIn: true};

        case LOGIN_FAIL:
            return {...state, error: action.payload, password: '', loading: false};

        default:
            return state;
    }
};

export default LoginReducer;
