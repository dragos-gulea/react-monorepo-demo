import {LOAD_DASHBOARD_DATA_DONE, LOAD_DASHBOARD_DATA_START} from '../../actions/dashboard/names';
import initialState                                          from './initialState';
import {AnyAction, Reducer}                                  from 'redux';

const DashboardReducer: Reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case LOAD_DASHBOARD_DATA_START:
            return {...state, isRefreshing: true};

        case LOAD_DASHBOARD_DATA_DONE:
            return {...state, ...action.payload, isRefreshing: false};

        default:
            return state;
    }
};

export default DashboardReducer;
