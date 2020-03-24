import React, {Component}             from 'react';
import {AppState, HistoryObject}      from 'shared/src/types/common';
import {connect}                      from 'react-redux';
import {PortfolioItem, PortfolioList} from 'shared/src/types/portfolio';
import ItemResolver                   from 'shared/src/actions/portfolio/ItemResolver';
import {formatPercents, formatPounds} from 'shared/src/helpers/index';
import FormButton                     from '../common/FormButton';

interface Props {
    list   : PortfolioList
    match  : { [k: string]: any }
    history: HistoryObject
}

class PortfolioItemScreen extends Component<Props, { item: PortfolioItem | null }> {

    constructor(props: Props) {
        super(props);

        this.state = {item: null};
    }

    componentDidMount() {
        new ItemResolver(this.props.match.params.id, this.props.list).run()
            .then((result: any) => {
                this.setState({item: result});
            });
    }

    renderDescription(description: string) {
        if (description && description.length > 0 && description != '0') {
            return (
                <div>
                    <div className="row">
                        <div className="col grid-custom product-description">
                            {description}
                        </div>
                    </div>
                    <hr/>
                </div>
            );
        }

        return null;
    }

    renderField(label: string, value: string | number | null) {
        if (!value || value === '') {
            value = '--';
        }

        return (
            <div className="row">
                <div className="col grid-custom product-info-left">{label}</div>
                <div className="col grid-custom product-info-right">{value}</div>
            </div>
        );
    }

    render() {

        if (this.state.item) {
            const {item} = this.state;

            return (
                <div className="container">
                    <div className="row">
                        <div className="col grid-custom welcome">
                            Product details
                        </div>
                    </div>

                    <div className="row">
                        <div className="col grid-custom product-image">
                            <img src={item.image_url} alt={item.title}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col grid-custom product-title">
                            {item.title}
                        </div>
                    </div>

                    {this.renderDescription(item.description)}

                    {this.renderField('Year', item.year)}
                    {this.renderField('Format', item.unit)}
                    {this.renderField('Quantity', item.quantity)}
                    {this.renderField('Price bought', item.price_bought ? formatPounds(item.price_bought) : null)}
                    {this.renderField('Market price', item.price_market ? formatPounds(item.price_market) : null)}
                    {this.renderField('Performance', item.performance ? formatPercents(item.performance) : null)}
                    {this.renderField('Tasting notes', item.tasting_notes)}
                    {this.renderField('Parker score', item.parker_score)}

                    <hr/>

                    <FormButton label={"Back to list"} onClick={() => this.props.history.push('/portfolio')} isSubmitting={false}/>
                </div>
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col grid-custom welcome">
                        Product Not found
                    </div>
                </div>

                <FormButton label={"Back to list"} onClick={() => this.props.history.push('/portfolio')} isSubmitting={false}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    list: state.portfolio.list,
});

export default connect(mapStateToProps, {})(PortfolioItemScreen);
