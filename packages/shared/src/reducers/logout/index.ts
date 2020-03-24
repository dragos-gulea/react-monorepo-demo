import {
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_START,
}                           from '../../actions/logout/names';
import initialState         from './initialState';
import {AnyAction, Reducer} from 'redux';

const LogoutReducer: Reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case LOGOUT_START:
            return {...state, error: '', isLoggingOut: true};

        case LOGOUT_SUCCESS:
            return {...state, loggedOut: true, error: '', isLoggingOut: false};

        case LOGOUT_FAIL:
            return {...state, error: action.payload, isLoggingOut: false};

        default:
            return state;
    }
};


export default LogoutReducer;
