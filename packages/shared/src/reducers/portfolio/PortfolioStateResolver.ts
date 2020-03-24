import {PortfolioItem, PortfolioList, PortfolioProps} from '../../types/portfolio';
import {AnyAction}                                    from 'redux';

class PortfolioStateResolver {

    private ids   : Array<string>;
    private action: AnyAction;

    readonly state            : PortfolioProps;
    readonly itemsPerPage     : number;
    readonly activePagesAmount: number;

    constructor(state: PortfolioProps, action: AnyAction, itemsPerPage: number, activePagesAmount: number) {
        this.state             = state;
        this.action            = action;
        this.itemsPerPage      = itemsPerPage;
        this.activePagesAmount = activePagesAmount;
        this.ids               = [];
    }

    public static initialState() {
        return {
            list               : [],
            isRefreshing       : false,
            isLoadingMore      : false,
            allowAppend        : false,
            allowPrepend       : false,
            pagesActive        : [],
            pagesAmount        : 0,
            lastPageItemsAmount: 0,
            removingItemId     : null,
            itemsRemovedAmount : 0,
            needRefresh        : false,
            showRemoveModal     : false
        };
    }

    public loadStart() {
        return {...this.state, isRefreshing: true};
    }

    public loadDone() {
        const pagesAmount = this.resolvePagesAmount();

        return {
            ...this.state,
            list               : this.action.payload.list,
            pagesAmount        : pagesAmount,
            allowAppend        : pagesAmount > 1,
            allowPrepend       : false,
            isLoadingMore      : false,
            isRefreshing       : false,
            pagesActive        : [1],
            lastPageItemsAmount: this.resolveLastPageItemsAmount(pagesAmount),
            itemsRemovedAmount : 0,
            needRefresh        : false,
        };
    }

    public loadMoreStart() {
        return {...this.state, isLoadingMore: true};
    }

    public loadMoreAppend() {
        const page = this.resolveNextPageAppend();
        const list = this.appendList(page);

        return {
            ...this.state,
            list         : list,
            allowAppend  : page < this.state.pagesAmount,
            allowPrepend : page > this.activePagesAmount,
            isLoadingMore: false,
        };
    }

    public loadMorePrepend() {
        const page = this.resolvePrevPagePrepend();

        return {
            ...this.state,
            list         : this.prependList(),
            isLoadingMore: false,
            allowAppend  : true,
            allowPrepend : page > 1,
        };
    }

    public itemRemoveInit() {
        return {...this.state, showRemoveModal: true};
    }

    public itemRemoveCancel() {
        return {...this.state, showRemoveModal: false};
    }

    public itemRemoveStart() {
        return {...this.state, removingItemId: this.action.removingId};
    }

    public itemRemoveDone() {
        const itemsRemovedAmount = this.state.itemsRemovedAmount + 1;

        return {
            ...this.state,
            list              : this.removeItem(),
            itemsRemovedAmount: itemsRemovedAmount,
            removingItemId    : null,
            needRefresh       : itemsRemovedAmount >= this.itemsPerPage,
            showRemoveModal   : false,
        };
    }

    private lastActivePage() {
        return this.state.pagesActive.slice(-1)[0];
    }

    private resolveNextPageAppend() {
        const page = this.lastActivePage() + 1;

        this.state.pagesActive.push(page);

        if (this.state.pagesActive.length > this.activePagesAmount) {
            this.state.pagesActive.shift();
        }

        return page;
    }

    private resolvePrevPagePrepend() {
        const page = this.state.pagesActive[0] - 1;

        this.state.pagesActive.unshift(page);
        this.state.pagesActive.pop();

        return page;
    }

    private extractIds(list: PortfolioList) {
        this.ids = list.map(item => item.id);
    }

    private prepareReceivedList() {
        this.extractIds(this.state.list);

        let list: Array<PortfolioItem> = [];
        const self                     = this;

        this.action.payload.list.forEach((item: PortfolioItem) => {
            if (self.ids.indexOf(item.id) === -1) {
                list.push(item);
            }
        });

        return list;
    }

    private appendList(page: number) {
        let list = this.state.list.concat(this.prepareReceivedList());

        if (page > this.activePagesAmount) {
            list.splice(0, this.itemsPerPage);
        }

        return list;
    }

    private prependList() {
        let list   = this.prepareReceivedList().concat(this.state.list);
        let amount = this.lastActivePage() === this.state.pagesAmount ? this.state.lastPageItemsAmount : this.itemsPerPage;

        list.splice(amount * this.activePagesAmount, this.itemsPerPage);

        return list;
    };

    private resolvePagesAmount() {
        return Math.ceil(this.action.payload.total / this.itemsPerPage);
    }

    private resolveLastPageItemsAmount(amount: number) {
        return this.action.payload.total - ((amount - 1) * this.itemsPerPage);
    }

    private removeItem() {
        const itemId                      = this.action.id;
        let newList: Array<PortfolioItem> = [];

        this.state.list.forEach(item => {
            if (item.id !== itemId) {
                newList.push(item);
            }
        });

        return newList;
    };
}

export default PortfolioStateResolver;
