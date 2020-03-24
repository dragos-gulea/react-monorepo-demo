import { AnyAction } from 'redux';
import { MiddlewareDispatch } from '../types/common';
declare const validationMiddleware: ({ dispatch, getState }: MiddlewareDispatch<{}, {}, any>) => (next: Function) => (action: AnyAction) => any;
export default validationMiddleware;
