import {
    LOAD_DASHBOARD_DATA_START,
    LOAD_DASHBOARD_DATA_DONE,
}                       from './names';
import StorageAccount   from '../../storage/StorageAccount';
import ApiCaller        from '../../network/ApiCaller';
import {AccountData}    from '../../types/account';
import {DashboardData}  from '../../types/dashboard';
import {ActionDispatch} from '../../types/common';

export const loadDashboardData = () => {
    return (dispatch: ActionDispatch) => {
        dispatch({type: LOAD_DASHBOARD_DATA_START});

        new ApiCaller().setEndpoint('portfolio/info').get()
            .then((result: DashboardData) => {
                new StorageAccount().fetch()
                    .then((account: AccountData) => {
                        dispatch({type: LOAD_DASHBOARD_DATA_DONE, payload: prepareDashboardData(result, account)});
                    });
            });
    };
};

const prepareDashboardData = (apiData: DashboardData, accountData: AccountData) => {
    return {
        firstName : accountData.first_name,
        lastName  : accountData.last_name,
        balance   : apiData.wallet,
        statistics: {
            ig    : {
                invested   : apiData.performance_data.IGWines.totalInvested,
                value      : apiData.performance_data.IGWines.currentValue,
                performance: apiData.performance_data.IGWinesPerformance,
            },
            own   : {
                invested   : apiData.performance_data.Owned.totalInvested,
                value      : apiData.performance_data.Owned.currentValue,
                performance: apiData.performance_data.OwnPerformance,
            },
            totals: {
                invested   : apiData.performance_data.Total.totalInvested,
                value      : apiData.performance_data.Total.currentValue,
                performance: apiData.performance_data.OverallPerformance,
            },
        },
    };
};
