import React               from 'react';
import {withRouter}        from 'react-router';
import {Switch}            from 'react-router-dom';
import {History}           from 'history';
import LoginScreen         from 'shared/src/screens/login/LoginScreen';
import RegistrationScreen  from 'shared/src/screens/registration/RegistrationScreen';
import DashboardScreen     from 'shared/src/screens/dashboard/DashboardScreen';
import AccountScreen       from 'shared/src/screens/account/AccountScreen';
import LogoutScreen        from 'shared/src/screens/logout/LogoutScreen';
import PortfolioListScreen from 'shared/src/screens/portfolio/PortfolioListScreen';
import PortfolioItemScreen from 'web/src/components/portfolio/PortfolioItemScreen';
import RouteCustom         from './RouteCustom';

interface Props {
    loggedIn: boolean,
    history: History
}

class MenuSwitcher extends React.Component<Props> {

    constructor(props: Props) {
        super(props);

        this.redirectDefault();
    }

    redirectDefault() {
        if (this.props.history.location.pathname === '/') {
            this.props.history.push(this.props.loggedIn ? '/dashboard' : '/login');
        }
    }

    render() {
        return (
            <Switch>
                <RouteCustom path="/login" component={LoginScreen} key="login" loggedIn={this.props.loggedIn}
                             private={false}/>
                <RouteCustom path="/registration" component={RegistrationScreen} key="registration"
                             loggedIn={this.props.loggedIn} private={false}/>

                <RouteCustom path="/dashboard" component={DashboardScreen} key="dashboard"
                             loggedIn={this.props.loggedIn} private={true}/>
                <RouteCustom path="/account" component={AccountScreen} key="account" loggedIn={this.props.loggedIn}
                             private={true}/>
                <RouteCustom path="/portfolio/:id" component={PortfolioItemScreen} key="portfolio-item"
                             loggedIn={this.props.loggedIn} private={true}/>
                <RouteCustom path="/portfolio" component={PortfolioListScreen} key="portfolio"
                             loggedIn={this.props.loggedIn} private={true}/>
                <RouteCustom path="/logout" component={LogoutScreen} key="logout" loggedIn={this.props.loggedIn}
                             private={true}/>
            </Switch>
        );
    }
}

// @ts-ignore
export default withRouter(MenuSwitcher);
