import React, {Component} from 'react';
import {connect}          from 'react-redux';
import {logoutClient}     from 'shared/src/actions/logout';
import {LogoutProps}      from 'shared/src/types/logout';
import LogoutComponent    from './LogoutComponent';

class LogoutScreen extends Component<LogoutProps> {

    render() {
        return <LogoutComponent {...this.props} />
    }
}

export default connect(null, {logoutClient})(LogoutScreen);
