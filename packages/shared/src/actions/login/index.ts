import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    UPDATE_FORM_DATA,
    VALIDATE_FIELD,
}                                                              from './names';
import StorageToken                                            from '../../storage/StorageToken';
import StorageAccount                                          from '../../storage/StorageAccount';
import ApiCaller                                               from '../../network/ApiCaller';
import {LoginData}                                             from '../../types/login';
import {AccountData}                                           from '../../types/account';
import {ActionDispatch, ApiErrorWMessage, FuncArgsUnknownVoid} from '../../types/common';

export const updateFormData = (data: {}) => ({
    type: UPDATE_FORM_DATA,
    data,
});

export const validateField = (field: string, value: string | boolean) => ({
    type   : VALIDATE_FIELD,
    payload: {
        field: field,
        value: value,
    },
});

export const loginClient = (data: LoginData, callback: FuncArgsUnknownVoid) => {
    return (dispatch: ActionDispatch): void => {
        dispatch({type: LOGIN_START});

        new ApiCaller().setEndpoint('auth/login').setParams(data).post()
            .then((result: AccountData) => loginClientSuccess(dispatch, result, callback))
            .catch((error: ApiErrorWMessage) => loginClientFail(dispatch, error));
    };
};

async function loginClientSuccess(dispatch: ActionDispatch, result: AccountData, callback: FuncArgsUnknownVoid) {
    await (new StorageToken).save(result.token);
    await (new StorageAccount).save(StorageAccount.buildData(result));

    dispatch({type: LOGIN_SUCCESS});
    callback();
}

const loginClientFail = (dispatch: ActionDispatch, error: ApiErrorWMessage) => {
    dispatch({type: LOGIN_FAIL, payload: error.response.data.message});
};
