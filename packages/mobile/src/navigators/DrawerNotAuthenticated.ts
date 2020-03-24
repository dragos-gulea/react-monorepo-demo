import {createDrawerNavigator, createStackNavigator, NavigationScreenProps} from 'react-navigation';
import {buildNavigationOptions}                                             from './Helper';
import LoginScreen                                                          from 'shared/src/screens/login/LoginScreen';
import RegistrationScreen                                                   from 'shared/src/screens/registration/RegistrationScreen';

const LoginStackNavigator = createStackNavigator({
    Login: {
        screen           : LoginScreen,
        navigationOptions: ({navigation}: NavigationScreenProps) => (buildNavigationOptions(navigation, 'Sign in')),
    },
});

const RegistrationStackNavigator = createStackNavigator({
    Registration: {
        screen           : RegistrationScreen,
        navigationOptions: ({navigation}: NavigationScreenProps) => (buildNavigationOptions(navigation, 'Sign up')),
    },
});

const DrawerNotAuthenticated = createDrawerNavigator({
    Login: {
        screen           : LoginStackNavigator,
        navigationOptions: {
            drawerLabel: 'Sign in',
        },
    },
    Registration  : {
        screen           : RegistrationStackNavigator,
        navigationOptions: {
            drawerLabel: 'Sign up',
        },
    },
});


export default DrawerNotAuthenticated;
