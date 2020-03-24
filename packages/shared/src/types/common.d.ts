import rootReducer from '../reducers';
import { NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { Action, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GestureResponderEvent } from 'react-native';
export declare type ArrStrStr = {
    [k: string]: string;
};
export declare type ArrStrBool = {
    [k: string]: boolean;
};
export declare type ArrStrUnknown = {
    [k: string]: unknown;
};
export declare type ArrStrAny = {
    [k: string]: any;
};
export declare type ArrStrObj = {
    [k: string]: {};
};
export declare type ArrStrObjAny = {
    [k: string]: ArrStrAny;
};
export declare type FuncArgsUnknown = (...args: any[]) => {};
export declare type FuncArgsUnknownVoid = (...args: any[]) => void;
export declare type AppState = ReturnType<typeof rootReducer>;
export declare type Navigation = NavigationScreenProp<unknown>;
export declare type NavigationWParams = NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>;
export declare type ApiError = {
    response: {
        data: string;
    };
};
export declare type ApiErrorWMessage = {
    response: {
        data: {
            message: string;
        };
    };
};
export declare type ValidationRule = {
    callback: FuncArgsUnknown;
    message: string;
    params?: unknown;
    meta?: unknown;
};
export declare type ValidationRules = {
    [k: string]: Array<ValidationRule>;
};
export declare type ValidationData = {
    [k: string]: unknown;
    errors: ArrStrStr;
    validation: ArrStrBool;
};
export declare type MiddlewareDispatch<S, E, A extends Action> = {
    dispatch: ThunkDispatch<S, E, A>;
    getState: () => {
        [k: string]: any;
    };
};
export declare type ActionDispatch = Dispatch<any>;
export declare type OnPressCallback = (event: GestureResponderEvent) => void;
export declare type HistoryObject = {
    push: FuncArgsUnknownVoid;
};
export interface HeaderProps {
    loggedIn: boolean;
}
export interface ApplicationState {
    loggedIn: boolean;
    checkedLoggedIn: boolean;
}
export interface FormInputProps {
    type?: string;
    field_name: string;
    placeholder: string;
    value: string;
    error: string;
    onChange: FuncArgsUnknownVoid;
}
export interface FormButtonProps {
    label: string;
    onClick: FuncArgsUnknownVoid;
    isSubmitting: boolean;
}
