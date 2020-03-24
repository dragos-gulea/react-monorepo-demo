import React, {Component} from 'react';
import {LogoutProps}      from '../../types/logout';
import Spinner            from 'web/src/components/common/Spinner';

export default class LogoutComponent extends Component<LogoutProps> {

    render() {
        /*setTimeout(() => {
            this.props.logoutClient(() => {window.location.href = '/'});
        }, 500);*/

        this.props.logoutClient(() => {window.location.href = '/'});

        return (
            <div style={{textAlign: 'center'}}><Spinner /></div>
        );
    }
}

