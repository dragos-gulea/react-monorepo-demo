import React, {Component}             from 'react';
import {formatPercents, formatPounds} from 'shared/src/helpers/index';
import {DashboardSectionProps}        from 'shared/src/types/dashboard';

export default class DashboardSection extends Component<DashboardSectionProps> {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col grid-custom section-title">
                        {this.props.title}
                    </div>
                </div>
                <div className="row">
                    <div className="col grid-custom content-left">Invested:</div>
                    <div className="col grid-custom content-right">{formatPounds(this.props.data.invested)}</div>
                </div>
                <div className="row">
                    <div className="col grid-custom content-left">Current Value:</div>
                    <div className="col grid-custom content-right">{formatPounds(this.props.data.value)}</div>
                </div>
                <div className="row">
                    <div className="col grid-custom content-left">Performance:</div>
                    <div className="col grid-custom content-right">{formatPercents(this.props.data.performance)}</div>
                </div>
            </div>
        );
    }
}
