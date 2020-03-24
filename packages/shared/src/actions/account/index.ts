import {
    FETCH_ACCOUNT_DATA,
    UPDATE_FORM_DATA,
    VALIDATE_FIELD,
    VALIDATE_ACC_FORM,
    HANDLE_FORM_VALIDATION_ERRORS,
    UPDATE_ACCOUNT_START,
    UPDATE_ACCOUNT_SUCCESS,
    UPDATE_ACCOUNT_FAIL,
    UPDATE_ACCOUNT_COMPLETE,
} from './names';
import StorageAccount             from '../../storage/StorageAccount';
import ApiCaller                  from '../../network/ApiCaller';
import {AccountData}              from '../../types/account';
import {ActionDispatch, ApiError} from '../../types/common'

const storageAccount = new StorageAccount();

export const fetchData = () => {
    return (dispatch: ActionDispatch) => {
        storageAccount.fetch()
            .then((result: {}) => {
                dispatch({type: FETCH_ACCOUNT_DATA, payload: result});
            });
    };
};

export const updateFormData = (data: {}) => ({
    type: UPDATE_FORM_DATA,
    data,
});

export const validateField = (field: string, value: any) => ({
    type   : VALIDATE_FIELD,
    payload: {
        field: field,
        value: value,
    },
});

export const validateForm = () => ({
    type   : VALIDATE_ACC_FORM,
    payload: {
        formName: 'account',
    },
});

export const handleFormValidationErrors = (errors: {}) => ({
    type: HANDLE_FORM_VALIDATION_ERRORS,
    errors,
});

export const updateAccountData = (data: AccountData) => {
    return (dispatch: ActionDispatch): void => {
        dispatch({type: UPDATE_ACCOUNT_START, data});

        new ApiCaller().setEndpoint('account/').setParams(buildAccountData(data)).put()
            .then((result: {}) => updateAccountDataSuccess(dispatch, data))
            .catch((error: ApiError) => updateAccountDataFail(dispatch, error));
    };
};

const updateAccountDataSuccess = (dispatch: ActionDispatch, data: AccountData) => {
    dispatch({type: UPDATE_ACCOUNT_SUCCESS});
    storageAccount.save(StorageAccount.buildData(data, false));
};

const updateAccountDataFail = (dispatch: ActionDispatch, error: ApiError) => {
    dispatch({type: UPDATE_ACCOUNT_FAIL, errors: error.response.data});
};

export const updateAccountComplete = () => ({
    type: UPDATE_ACCOUNT_COMPLETE
});

const buildAccountData = (data: AccountData) => {
    data['title']    = 'mr';
    data['country']  = 'UK';
    data['language'] = 'English';

    return data;
};
