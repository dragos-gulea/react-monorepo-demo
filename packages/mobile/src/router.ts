import React                   from 'react';
import {createSwitchNavigator} from 'react-navigation';
import DrawerAuthenticated     from './navigators/DrawerAuthenticated';
import DrawerNotAuthenticated  from './navigators/DrawerNotAuthenticated';

export const createRootNavigator = (loggedIn: boolean = false) => {
    return createSwitchNavigator(
        {
            Authenticated   : {
                screen: DrawerAuthenticated,
            },
            NotAuthenticated: {
                screen: DrawerNotAuthenticated,
            },
        },
        {
            initialRouteName: loggedIn ? 'Authenticated' : 'NotAuthenticated',
        },
    );
};
