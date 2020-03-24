import React                     from 'react';
import {Provider}                from 'react-redux';
import {isLoggedIn}              from 'shared/src/helpers';
import store                     from 'shared/src/store'
import Header                    from './components/common/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import MenuSwitcher              from './components/common/MenuSwitcher';
import Footer                    from './components/common/Footer';
import {ApplicationState}        from 'shared/src/types/common';

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

        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header loggedIn={loggedIn} />
                        <hr/>
                        <MenuSwitcher loggedIn={loggedIn} />
                    </div>
                </Router>
                <Footer />
            </Provider>
        );
    }
}
