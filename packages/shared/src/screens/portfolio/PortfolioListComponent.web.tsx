import React, {Component}                           from 'react';
import {PortfolioItem, PortfolioListComponentProps} from '../../types/portfolio';
import {formatPounds}                               from '../../helpers/index';
import ReloadButton                                 from 'web/src/components/common/ReloadButton';
import DialogConfirm                                from 'web/src/components/common/DialogConfirm';
import Spinner                                      from 'web/src/components/common/Spinner';
// @ts-ignore
import loaderImage                                  from '../../assets/img/three-dots.png';
import {withRouter}                                 from 'react-router';
import {Link}                                       from 'react-router-dom';

class PortfolioListComponent extends Component<PortfolioListComponentProps, { removingItem: PortfolioItem | null }> {

    constructor(props: PortfolioListComponentProps) {
        super(props);
        this.state = {
            removingItem: null
        };
    }

    removeItemInit(item: PortfolioItem) {
        this.props.data.removePortfolioItemInit();
        this.setState({removingItem: item});
    }

    renderRemoveConfirmation() {
        if (this.props.data.showRemoveModal && this.state.removingItem) {
            return (
                <DialogConfirm
                    show={this.props.data.showRemoveModal}
                    message={`Are you sure you want to completely delete the item ${this.state.removingItem.title} ?`}
                    // @ts-ignore
                    actionCallback={() => this.props.data.removePortfolioItem(this.state.removingItem.id)}
                    cancelCallback={() => this.props.data.removePortfolioItemCancel()}
                />
            );
        }

        return null;
    }

    renderLoader(callback: () => {}, loadNext: boolean = true) {
        let content;

        if (this.props.data.isLoadingMore) {
            content = <Spinner/>;

        } else {
            content = (
                <a onClick={callback}>
                    <img src={loaderImage} width={80} title={loadNext ? 'load next' : 'load previous'} alt="Load more"/>
                </a>
            );
        }

        return <div className="portfolio-loader">{content}</div>;
    }

    renderTableContents() {
        return this.props.data.list.map((item, index) => {
            return (
                <tr key={item.id}>
                    <td><img src={item.thumb_url} height={80} alt=""/></td>
                    <td>{item.title}</td>
                    <td>{item.year}</td>
                    <td>{item.unit}</td>
                    <td>
                        {item.price_bought ? formatPounds(item.price_bought) : '--'}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                        <div className="row">
                            <div className="col">
                                <Link to={`/portfolio/${item.id}`}><i className="far fa-eye fa-lg"/></Link>
                            </div>
                            <div className="col">
                                {this.renderRemoveIcon(item)}
                            </div>
                        </div>
                    </td>
                </tr>
            );
        });
    }

    renderRemoveIcon(item: PortfolioItem) {
        if (item.is_own) {
            if (item.id === this.props.data.removingItemId) {
                return <Spinner/>;
            }

            return (
                <a onClick={() => this.removeItemInit(item)}>
                    <i className="fas fa-times fa-lg"/>
                </a>
            );
        }

        return null;
    }

    render() {
        return (
            <div className="portfolio-page">
                <div className="container">
                    <div className="row">
                        <div className="col grid-custom welcome">
                            Portfolio
                        </div>
                    </div>
                    <div className="row">
                        <div className="col grid-custom welcome refresh">
                            <ReloadButton isLoading={this.props.data.isRefreshing}
                                          onClick={() => this.props.onRefresh()}/>
                        </div>
                    </div>
                </div>

                {this.props.renderPrependLoader(this.renderLoader.bind(this))}

                <table className="table">
                    <thead className="lighten-2">
                    <tr>
                        <th scope="col"/>
                        <th scope="col">Title</th>
                        <th scope="col">Year</th>
                        <th scope="col">Format</th>
                        <th scope="col">Price bought</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableContents()}
                    </tbody>
                </table>

                {this.props.renderAppendLoader(this.renderLoader.bind(this))}
                {this.renderRemoveConfirmation()}
            </div>
        );
    }
}

// @ts-ignore
export default withRouter(PortfolioListComponent);
