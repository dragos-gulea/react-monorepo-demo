export declare const loadPortfolioData: () => (dispatch: import("redux").Dispatch<any>) => void;
export declare const loadMorePortfolioData: (page: number, append?: boolean) => (dispatch: import("redux").Dispatch<any>) => void;
export declare const removePortfolioItemInit: () => {
    type: string;
};
export declare const removePortfolioItemCancel: () => {
    type: string;
};
export declare const removePortfolioItem: (id: string) => (dispatch: import("redux").Dispatch<any>) => void;
