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
} from '../../actions/portfolio/names';
import Config                 from '../../config';
import PortfolioStateResolver from './PortfolioStateResolver';
import {AnyAction, Reducer}   from 'redux';

const PortfolioReducer: Reducer = (state = PortfolioStateResolver.initialState(), action: AnyAction) => {
    const reducer = new PortfolioStateResolver(state, action, Config.PORTFOLIO_ITEMS_PER_PAGE, Config.PORTFOLIO_ACTIVE_PAGES);

    switch (action.type) {
        case LOAD_PORTFOLIO_DATA_START:
            return reducer.loadStart();

        case LOAD_PORTFOLIO_DATA_DONE:
            return reducer.loadDone();

        case LOAD_MORE_PORTFOLIO_DATA_START:
            return reducer.loadMoreStart();

        case LOAD_MORE_PORTFOLIO_DATA_APPEND:
            return reducer.loadMoreAppend();

        case LOAD_MORE_PORTFOLIO_DATA_PREPEND:
            return reducer.loadMorePrepend();

        case REMOVE_PORTFOLIO_ITEM_INIT:
            return reducer.itemRemoveInit();

        case REMOVE_PORTFOLIO_ITEM_CANCEL:
            return reducer.itemRemoveCancel();

        case REMOVE_PORTFOLIO_ITEM_START:
            return reducer.itemRemoveStart();

        case REMOVE_PORTFOLIO_ITEM_DONE:
            return reducer.itemRemoveDone();

        default:
            return state;
    }
};

export default PortfolioReducer;
