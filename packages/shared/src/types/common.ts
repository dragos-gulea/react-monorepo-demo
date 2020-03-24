import rootReducer                                   from '../reducers';
import {
    NavigationParams,
    NavigationRoute,
    NavigationScreenProp,
}                                                    from 'react-navigation';
import {Action, Dispatch}                            from 'redux';
import {ThunkDispatch}                               from 'redux-thunk';
import {GestureResponderEvent}                       from 'react-native';

export type ArrStrStr           = { [k: string]: string };
export type ArrStrBool          = { [k: string]: boolean };
export type ArrStrUnknown       = { [k: string]: unknown };
export type ArrStrAny           = { [k: string]: any };
export type ArrStrObj           = { [k: string]: {} };
export type ArrStrObjAny        = { [k: string]: ArrStrAny };
export type FuncArgsUnknown     = (...args: any[]) => {};
export type FuncArgsUnknownVoid = (...args: any[]) => void;

export type AppState          = ReturnType<typeof rootReducer>;
export type Navigation        = NavigationScreenProp<unknown>;
export type NavigationWParams = NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>;

export type ApiError = {
    response: {
        data: string
    }
}

export type ApiErrorWMessage = {
    response: {
        data: {
            message: string
        }
    }
}

export type ValidationRule = {
    callback: FuncArgsUnknown,
    message : string,
    params? : unknown,
    meta?   : unknown,
}

export type ValidationRules = { [k: string]: Array<ValidationRule> }

export type ValidationData = {
    [k: string]: unknown,
    errors     : ArrStrStr,
    validation : ArrStrBool
}

export type MiddlewareDispatch<S, E, A extends Action> = {
    dispatch: ThunkDispatch<S, E, A>,
    getState: () => { [k: string]: any },
}

export type ActionDispatch  = Dispatch<any>;
export type OnPressCallback = (event: GestureResponderEvent) => void;
export type HistoryObject   = { push: FuncArgsUnknownVoid };

export interface HeaderProps {
    loggedIn: boolean,
}

export interface ApplicationState {
    loggedIn       : boolean,
    checkedLoggedIn: boolean
}

export interface FormInputProps {
    type      ?: string,
    field_name : string,
    placeholder: string,
    value      : string,
    error      : string,
    onChange   : FuncArgsUnknownVoid
}

export interface FormButtonProps {
    label       : string,
    onClick     : FuncArgsUnknownVoid
    isSubmitting: boolean
}
