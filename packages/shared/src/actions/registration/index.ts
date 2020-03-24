import {
    LOAD_CLIENT_TITLES,
    UPDATE_FORM_DATA,
    VALIDATE_FIELD,
    VALIDATE_REG_FORM,
    HANDLE_FORM_VALIDATION_ERRORS,
    REGISTRATION_START,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    REGISTRATION_COMPLETE,
}                                 from './names';
import StorageClientTitles        from '../../storage/StorageClientTitles';
import ApiCaller                  from '../../network/ApiCaller';
import {RegistrationData}         from '../../types/registration';
import {ActionDispatch, ApiError} from '../../types/common';

const storageClientTitles = new StorageClientTitles();
const apiCaller           = new ApiCaller();

export const loadClientTitles = () => {
    return (dispatch: ActionDispatch) => {
        storageClientTitles.fetch()
            .then((result: {}) => {
                if (result) {
                    dispatch({type: LOAD_CLIENT_TITLES, payload: result});

                } else {
                    apiCaller.setEndpoint('static/user-title').get()
                        .then((result: {}) => {
                            storageClientTitles.save(JSON.stringify(result));
                            dispatch({type: LOAD_CLIENT_TITLES, payload: result});
                        });
                }
            });
    };
};

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

export const validateForm = () => ({
    type   : VALIDATE_REG_FORM,
    payload: {
        formName: 'register',
    },
});

export const handleFormValidationErrors = (errors: {}) => ({
    type: HANDLE_FORM_VALIDATION_ERRORS,
    errors,
});

export const registerClient = (data: RegistrationData) => {
    return (dispatch: ActionDispatch) => {
        dispatch({type: REGISTRATION_START, data});

        apiCaller.setEndpoint('account/register').setParams(buildClientData(data)).post()
            .then(() => registerClientSuccess(dispatch))
            .catch((error: ApiError) => registerClientFail(dispatch, error));
    };
};

export const registerClientSuccess = (dispatch: ActionDispatch) => {
    dispatch({type: REGISTRATION_SUCCESS});
};

const registerClientFail = (dispatch: ActionDispatch, error: ApiError) => {
    dispatch({type: REGISTRATION_FAIL, errors: error.response.data});
};

export const registerClientComplete = () => ({
    type: REGISTRATION_COMPLETE
});

const buildClientData = (data: { [k: string]: any }) => {
    data['country']  = 'UK';
    data['language'] = 'English';

    return data;
};
