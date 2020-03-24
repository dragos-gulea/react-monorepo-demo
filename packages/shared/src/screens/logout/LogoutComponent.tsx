import React, {Component} from 'react';
import {Spinner}          from 'mobile/src/components/common/Spinner';
import {View}             from 'react-native';
import {LogoutProps}      from '../../types/logout';


export default class LogoutComponent extends Component<LogoutProps> {

    render() {
        /*setTimeout(() => {
            this.props.logoutClient(() => {this.props.navigation.navigate('NotAuthenticated')});
        }, 500);*/

        this.props.logoutClient(() => {this.props.navigation.navigate('NotAuthenticated')});

        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Spinner size="large"/>
            </View>
        );
    }
}
