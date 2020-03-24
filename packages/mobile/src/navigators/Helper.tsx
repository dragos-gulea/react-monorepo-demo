import React, {Component}              from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {NavigationScreenProps}         from 'react-navigation';
import {NavigationWParams}             from 'shared/src/types/common';

class NavigationDrawerStructure extends Component<NavigationScreenProps> {
    toggleDrawer = () => {
        this.props.navigation.toggleDrawer();
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={require('../../../shared/src/assets/img/drawer.png')}
                        style={{width: 28, height: 28, marginLeft: 5}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export const buildNavigationOptions = (navigation: NavigationWParams, title: string) => {
    return {
        title          : title,
        headerLeft     : <NavigationDrawerStructure navigation={navigation}/>,
        headerStyle    : {
            //backgroundColor: '#FF9800',
        },
        headerTintColor: 'black',
        headerRight    : (
            <Image
                source={require('../../../shared/src/assets/img/amdaris-logo.png')}
                style={{resizeMode: 'contain', width: 200, height: 35, marginRight: -50}}
            />
        ),
    };
};
