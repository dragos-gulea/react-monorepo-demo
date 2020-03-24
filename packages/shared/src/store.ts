import {createStore, applyMiddleware} from 'redux';
import ReduxThunk                     from 'redux-thunk';
import reducers                       from './reducers';
import validationMiddleware           from './validation/middleware';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, validationMiddleware)(createStore);

export default createStoreWithMiddleware(
    reducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
