import { Component } from 'react';
import { RenderLoader, PortfolioProps } from '../../types/portfolio';
declare class PortfolioListScreen extends Component<PortfolioProps> {
    componentDidMount(): void;
    renderPrependLoader(callback: RenderLoader): void | null;
    renderAppendLoader(callback: RenderLoader): void | null;
    loadMore(append?: boolean): null | undefined;
    onRefresh(): void;
    checkNeedRefresh(): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof PortfolioListScreen, Pick<PortfolioProps, "navigation" | "pagesAmount" | "lastPageItemsAmount" | "itemsRemovedAmount">>;
export default _default;
