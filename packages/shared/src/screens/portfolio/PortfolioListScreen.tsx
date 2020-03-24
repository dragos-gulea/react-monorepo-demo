import React, {Component}             from 'react';
import {connect}                      from 'react-redux';
import {RenderLoader, PortfolioProps} from '../../types/portfolio';
import {AppState}                     from '../../types/common';
import {
    loadPortfolioData,
    loadMorePortfolioData,
    removePortfolioItemInit,
    removePortfolioItemCancel,
    removePortfolioItem
}                                     from '../../actions/portfolio';
import PortfolioListComponent         from './PortfolioListComponent';

class PortfolioListScreen extends Component<PortfolioProps> {

    componentDidMount() {
        this.props.loadPortfolioData();
    }

    renderPrependLoader(callback: RenderLoader) {
        if (this.props.allowPrepend) {
            return callback(() => this.loadMore(false), false);
        }

        return null;
    }

    renderAppendLoader(callback: RenderLoader) {
        if (this.props.allowAppend) {
            return callback(() => this.loadMore(), true);
        }

        return null;
    }

    loadMore(append: boolean = true) {
        if (this.props.isRefreshing) {
            return null;
        }

        let page = append ? this.props.pagesActive.slice(-1)[0] + 1 : this.props.pagesActive[0] - 1;

        this.props.loadMorePortfolioData(page, append);
    }

    onRefresh() {
        if (!this.props.isLoadingMore) {
            this.props.loadPortfolioData();
        }
    }

    checkNeedRefresh() {
        if (this.props.needRefresh && !this.props.isRefreshing) {
            this.props.loadPortfolioData();
        }
    }

    render() {
        this.checkNeedRefresh();

        return (
            <PortfolioListComponent
                data={this.props}
                onRefresh={this.onRefresh.bind(this)}
                renderPrependLoader={this.renderPrependLoader.bind(this)}
                renderAppendLoader={this.renderAppendLoader.bind(this)}
                history={{push: () => {}}}
            />
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    list           : state.portfolio.list,
    isRefreshing   : state.portfolio.isRefreshing,
    isLoadingMore  : state.portfolio.isLoadingMore,
    allowAppend    : state.portfolio.allowAppend,
    allowPrepend   : state.portfolio.allowPrepend,
    pagesActive    : state.portfolio.pagesActive,
    removingItemId : state.portfolio.removingItemId,
    needRefresh    : state.portfolio.needRefresh,
    showRemoveModal: state.portfolio.showRemoveModal,

});

export default connect(mapStateToProps, {
    loadPortfolioData, loadMorePortfolioData, removePortfolioItemInit, removePortfolioItemCancel, removePortfolioItem
},)(PortfolioListScreen);
