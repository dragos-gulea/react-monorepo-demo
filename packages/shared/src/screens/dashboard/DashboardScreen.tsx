import React, {Component}           from 'react';
import {connect}                    from 'react-redux';
import {DashboardProps}             from 'shared/src/types/dashboard';
import {AppState}                   from 'shared/src/types/common';
import {loadDashboardData}          from 'shared/src/actions/dashboard';
import DashboardComponent           from './DashboardComponent';

class DashboardScreen extends Component<DashboardProps> {

    componentDidMount() {
        this.props.loadDashboardData();
    }

    buildWelcomeMessage() {
        return 'Welcome ' + this.props.firstName + ' ' + this.props.lastName;
    }

    render() {
        return (
            <DashboardComponent data={this.props} welcomeMessage={this.buildWelcomeMessage()}/>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    title       : state.dashboard.title,
    firstName   : state.dashboard.firstName,
    lastName    : state.dashboard.lastName,
    balance     : state.dashboard.balance,
    statistics  : state.dashboard.statistics,
    isRefreshing: state.dashboard.isRefreshing,
});

export default connect(mapStateToProps, {loadDashboardData})(DashboardScreen);
