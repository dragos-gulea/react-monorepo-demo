import {FuncArgsUnknownVoid, HistoryObject, Navigation, OnPressCallback} from './common';

export type PortfolioItem = {
    id           : string,
    image_url    : string,
    thumb_url?   : string
    title        : string,
    year         : string,
    unit         : string,
    quantity     : number,
    price_bought : number | null,
    price_market : number | null,
    performance  : number | null,
    tasting_notes: string,
    parker_score : string,
    description  : string,
    is_own?      : boolean,
}

export type PortfolioList = PortfolioItem[];

export type PortfolioProps = {
    list                     : PortfolioList,
    needRefresh              : boolean,
    isRefreshing             : boolean,
    allowPrepend             : boolean,
    allowAppend              : boolean,
    isLoadingMore            : boolean,
    pagesActive              : Array < number >,
    pagesAmount              : number,
    lastPageItemsAmount      : number,
    removingItemId           : string | null,
    itemsRemovedAmount       : number,
    showRemoveModal          : boolean,
    navigation               : Navigation,
    loadPortfolioData        : () => void
    removePortfolioItemInit  : () => void
    removePortfolioItemCancel: () => void
    removePortfolioItem      : (id: string) => void
    loadMorePortfolioData    : (page: number, append: boolean) => void
}

export type PortfolioListRowProps = {
    item          : PortfolioItem,
    showDetails   : OnPressCallback,
    removeItem    : OnPressCallback,
    removingItemId: string | null,
}

export type RenderLoader = FuncArgsUnknownVoid;

export interface PortfolioListComponentProps {
    data               : PortfolioProps,
    onRefresh          : FuncArgsUnknownVoid
    renderPrependLoader: (callback: RenderLoader) => void
    renderAppendLoader : (callback: RenderLoader) => void
    history            : HistoryObject
}

export type PortfolioApiResponse = {
    list : {[k: number]: PortfolioItem},
    total: number
}
