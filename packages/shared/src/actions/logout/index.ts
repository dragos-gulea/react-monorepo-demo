import {LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAIL}             from './names';
import StorageToken                                            from '../../storage/StorageToken';
import ApiCaller                                               from '../../network/ApiCaller';
import {ActionDispatch, ApiErrorWMessage, FuncArgsUnknownVoid} from '../../types/common';

export const logoutClient = (callback: FuncArgsUnknownVoid) => {
    return (dispatch: ActionDispatch) => {
        dispatch({type: LOGOUT_START});

        new ApiCaller().setEndpoint('auth/logout').post()
            .then(() => logoutClientSuccess(dispatch, callback))
            .catch((error: ApiErrorWMessage) => logoutClientFail(dispatch, error, callback));
    };
};

const logoutClientSuccess = (dispatch: ActionDispatch, callback: FuncArgsUnknownVoid) => {
    dispatch({type: LOGOUT_SUCCESS});

    (new StorageToken).remove()
        .then(() => callback());
};

const logoutClientFail = (dispatch: ActionDispatch, error: ApiErrorWMessage, callback: FuncArgsUnknownVoid) => {
    dispatch({type: LOGOUT_FAIL, payload: error.response.data.message});

    (new StorageToken).remove()
        .then(() => callback());
};
