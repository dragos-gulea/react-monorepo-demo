import React, {ComponentType} from 'react';
import {Route, Redirect}      from 'react-router-dom';

interface Props {
    loggedIn : boolean,
    private  : boolean,
    path     : string,
    key      : string,
    component: ComponentType<any>
}

export default class RouteCustom extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        if (this.props.private && !this.props.loggedIn) {
            return <Redirect to={{pathname: '/login'}}/>;
        }

        if (!this.props.private && this.props.loggedIn) {
            return <Redirect to={{pathname: '/dashboard'}}/>;
        }

        return (
            <Route exact path={this.props.path} component={this.props.component} key={this.props.key}/>
        );
    }
}
