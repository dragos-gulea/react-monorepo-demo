import React         from 'react';
import {Link}        from 'react-router-dom';
import logo          from 'shared/src/assets/img/amdaris-logo.png'
import {HeaderProps} from 'shared/src/types/common';

export default class Header extends React.Component<HeaderProps> {
    constructor(props: HeaderProps) {
        super(props);
    }

    renderMenu() {
        let items = [];

        if (this.props.loggedIn) {
            items.push(<li key="dashboard"><Link to={'/dashboard'} className="nav-link"> Dashboard </Link></li>);
            items.push(<li key="account"><Link to={'/account'} className="nav-link"> Account </Link></li>);
            items.push(<li key="portfolio"><Link to={'/portfolio'} className="nav-link"> Portfolio </Link></li>);
            items.push(
                <li key="logout" className="last-menu-item">
                    <Link to={'/logout'} className="nav-link"><i className="fas fa-power-off"/></Link>
                </li>
            );

        } else {
            items.push(<li key="registration"><Link to={'/registration'} className="nav-link">Sign up</Link></li>);
            items.push(
                <li key="login" className="last-menu-item">
                    <Link to={'/login'} className="nav-link"><i className="fas fa-arrow-right"/></Link>
                </li>
            );
        }

        return (
            <nav className="navbar navbar-expand-xl navbar-dark primary-color">
                <ul className="navbar-nav mr-auto">
                    {items}
                </ul>
            </nav>
        );
    }

    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <div className="row-item">
                        <Link to={"/dashboard"} className="nav-link"><img src={logo} className="logo" alt="Logo"/></Link>
                    </div>
                </div>

                {this.renderMenu()}
            </div>
        );
    }
}
