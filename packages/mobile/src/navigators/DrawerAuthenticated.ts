import {createDrawerNavigator, createStackNavigator, NavigationScreenProps} from 'react-navigation';
import {buildNavigationOptions}                                             from './Helper';
import DashboardScreen                                                      from 'shared/src/screens/dashboard/DashboardScreen';
import AccountScreen                                                        from 'shared/src/screens/account/AccountScreen';
import PortfolioListScreen                                                  from '../../../mobile/src/components/portfolio/PortfolioScreen';
import PortfolioItemScreen                                                  from '../components/portfolio/PortfolioItemScreen';
import LogoutScreen                                                         from 'shared/src/screens/logout/LogoutScreen';

const DashboardStackNavigator = createStackNavigator({
    Dashboard: {
        screen           : DashboardScreen,
        navigationOptions: ({navigation}: NavigationScreenProps) => (buildNavigationOptions(navigation, 'Dashboard')),
    },
});

const AccountStackNavigator = createStackNavigator({
    Account: {
        screen           : AccountScreen,
        navigationOptions: ({navigation}: NavigationScreenProps) => (buildNavigationOptions(navigation, 'Account Management')),
    },
});

const PortfolioStackNavigator = createStackNavigator({
    Portfolio: {
        screen           : PortfolioListScreen,
        navigationOptions: ({navigation}: NavigationScreenProps) => (buildNavigationOptions(navigation, 'Portfolio')),
    },
    PortfolioItem: {
        screen           : PortfolioItemScreen,
        navigationOptions: ({navigation}: NavigationScreenProps) => (buildNavigationOptions(navigation, 'Product details')),
    },
});

const LogoutStackNavigator = createStackNavigator({
    Logout: {
        screen           : LogoutScreen,
        navigationOptions: ({navigation}: NavigationScreenProps) => (buildNavigationOptions(navigation, 'Logging out...')),
    },
});

const DrawerAuthenticated = createDrawerNavigator({
    Dashboard: {
        screen           : DashboardStackNavigator,
        navigationOptions: {
            drawerLabel: 'Dashboard',
        },
    },
    Account  : {
        screen           : AccountStackNavigator,
        navigationOptions: {
            drawerLabel: 'Account',
        },
    },
    Portfolio: {
        screen           : PortfolioStackNavigator,
        navigationOptions: {
            drawerLabel: 'Portfolio',
        },
    },
    Logout       : {
        screen           : LogoutStackNavigator,
        navigationOptions: {
            drawerLabel: 'Log out',
        },
    },
});

export default DrawerAuthenticated;
