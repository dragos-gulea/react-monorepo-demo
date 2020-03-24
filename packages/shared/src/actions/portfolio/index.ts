import {
    LOAD_PORTFOLIO_DATA_START,
    LOAD_PORTFOLIO_DATA_DONE,
    LOAD_MORE_PORTFOLIO_DATA_START,
    LOAD_MORE_PORTFOLIO_DATA_APPEND,
    LOAD_MORE_PORTFOLIO_DATA_PREPEND,
    REMOVE_PORTFOLIO_ITEM_START,
    REMOVE_PORTFOLIO_ITEM_DONE,
    REMOVE_PORTFOLIO_ITEM_INIT,
    REMOVE_PORTFOLIO_ITEM_CANCEL,
}                       from './names';
import ApiCaller        from '../../network/ApiCaller';
import {ActionDispatch} from '../../types/common';

const apiCaller = new ApiCaller();

export const loadPortfolioData = () => {
    return (dispatch: ActionDispatch) => {
        dispatch({type: LOAD_PORTFOLIO_DATA_START});

        apiCaller.setEndpoint('portfolio').get()
            .then((result: {}) => {
                dispatch({type: LOAD_PORTFOLIO_DATA_DONE, payload: result});
            });
    };
};

export const loadMorePortfolioData = (page: number, append = true) => {
    return (dispatch: ActionDispatch) => {
        dispatch({type: LOAD_MORE_PORTFOLIO_DATA_START});

        apiCaller.setEndpoint('portfolio?page=' + page).get()
            .then((result: {}) => {
                dispatch({
                    type   : append ? LOAD_MORE_PORTFOLIO_DATA_APPEND : LOAD_MORE_PORTFOLIO_DATA_PREPEND,
                    payload: result,
                });
            });
    };
};

export const removePortfolioItemInit = () => ({
    type: REMOVE_PORTFOLIO_ITEM_INIT
});

export const removePortfolioItemCancel = () => ({
    type: REMOVE_PORTFOLIO_ITEM_CANCEL
});

export const removePortfolioItem = (id: string) => {
    return (dispatch: ActionDispatch) => {
        dispatch({type: REMOVE_PORTFOLIO_ITEM_START, removingId: id});

        apiCaller.setEndpoint('portfolio/delete').setParams({id}).delete()
            .then(() => {
                dispatch({type: REMOVE_PORTFOLIO_ITEM_DONE, id: id});
            });
    };
};
