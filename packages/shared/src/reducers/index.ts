import {combineReducers} from 'redux';
import LoginReducer      from './login';
import LogoutReducer     from './logout';
import RegisterReducer   from './registration';
import AccountReducer    from './account';
import DashboardReducer  from './dashboard';
import PortfolioReducer  from './portfolio';

const rootReducer = combineReducers({
    login    : LoginReducer,
    logout   : LogoutReducer,
    register : RegisterReducer,
    account  : AccountReducer,
    dashboard: DashboardReducer,
    portfolio: PortfolioReducer,
});

export default rootReducer;
