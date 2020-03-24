import React                                              from 'react';
import {createAppContainer}                               from 'react-navigation';
import {Provider}                                         from 'react-redux';
import {setJSExceptionHandler, setNativeExceptionHandler} from 'react-native-exception-handler';
import {createRootNavigator}                              from './router';
import {isLoggedIn}                                       from 'shared/src/helpers';
import store                                              from 'shared/src/store';
import {ApplicationState}                                 from 'shared/src/types/common';

console.disableYellowBox = true;

setJSExceptionHandler((error, isFatal) => {
    console.log(error, isFatal);
}, true);

setNativeExceptionHandler(errorString => {
    console.log('NATIVE EXCEPTION', errorString);
});

export default class App extends React.Component<{}, ApplicationState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            loggedIn       : false,
            checkedLoggedIn: false,
        };
    }

    componentDidMount() {
        isLoggedIn()
            .then((res: boolean) => this.setState({loggedIn: res, checkedLoggedIn: true}))
            .catch((err: unknown) => console.log('Failed checking logged in', err));
    }

    render() {
        const {checkedLoggedIn, loggedIn} = this.state;

        if (!checkedLoggedIn) {
            return null;
        }

        const AppContainer = createAppContainer(createRootNavigator(loggedIn));

        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}
