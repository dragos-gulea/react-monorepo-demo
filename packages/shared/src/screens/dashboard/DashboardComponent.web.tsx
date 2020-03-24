import React, {Component}        from 'react';
import {DashboardComponentProps} from '../../types/dashboard';
import {formatPounds}            from '../../helpers/index';
import DashboardSection          from 'web/src/components/dashboard/DashboardSection';
import ReloadButton              from 'web/src/components/common/ReloadButton';

export default class DashboardComponent extends Component<DashboardComponentProps> {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col grid-custom welcome">
                        {this.props.welcomeMessage}
                    </div>
                </div>
                <div className="row">
                    <div className="col grid-custom welcome refresh">
                        <ReloadButton isLoading={this.props.data.isRefreshing}
                                      onClick={() => this.props.data.loadDashboardData()}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col grid-custom section-title">
                        Wallet
                    </div>
                </div>
                <div className="row">
                    <div className="col grid-custom content-left">Current balance:</div>
                    <div className="col grid-custom content-right">{formatPounds(this.props.data.balance)}</div>
                </div>

                <DashboardSection title={'Acquired performance'} data={this.props.data.statistics.ig}/>
                <DashboardSection title={'Own performance'} data={this.props.data.statistics.own}/>
                <DashboardSection title={'Totals'} data={this.props.data.statistics.totals}/>
            </div>
        );
    }
}
