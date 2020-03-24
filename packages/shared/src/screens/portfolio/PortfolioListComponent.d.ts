import { Component } from 'react';
import { PortfolioItem, PortfolioListComponentProps } from '../../types/portfolio';
import { OnPressCallback } from '../../types/common';
export default class PortfolioListComponent extends Component<PortfolioListComponentProps> {
    viewDetails(item: PortfolioItem): void;
    removeItem(item: PortfolioItem): void;
    renderLoader(callback: OnPressCallback): JSX.Element;
    render(): JSX.Element;
}
