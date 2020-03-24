import {AnyAction}          from 'redux';
import {VALIDATE_REG_FORM}  from '../actions/registration/names';
import {VALIDATE_ACC_FORM}  from '../actions/account/names';
import rules                from './rules';
import FormValidator        from './FormValidator';
import DispatcherFactory    from './DispatcherFactory';
import {MiddlewareDispatch} from '../types/common';

const validationMiddleware = ({dispatch, getState}: MiddlewareDispatch<{}, {}, any>) => (next: Function) => (action: AnyAction) => {
    if (isFormValidationAction(action.type)) {
        const name: string = action.payload.formName;
        const state        = getState();
        const data         = state[name];
        const validator    = new FormValidator(rules[name], name);
        const dispatcher   = new DispatcherFactory(name).resolve();

        return dispatch(
            dispatcher.run(
                validator.validateForm(data), data, validator.getErrors(name)
            )
        );
    }

    return next(action);
};

function isFormValidationAction(actionType: string) {
    return actionType === VALIDATE_REG_FORM || actionType === VALIDATE_ACC_FORM;
}

export default validationMiddleware;
