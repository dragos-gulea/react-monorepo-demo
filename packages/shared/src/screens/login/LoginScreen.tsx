import React, {Component}                           from 'react';
import {connect}                                    from 'react-redux';
import {LoginProps}                                 from 'shared/src/types/login';
import {AppState, FuncArgsUnknownVoid}              from 'shared/src/types/common';
import {loginClient, validateField, updateFormData} from 'shared/src/actions/login';
import LoginComponent                               from './LoginComponent';

class LoginScreen extends Component<LoginProps> {

    onChange(field: string, value: string, validate: boolean = true) {
        let data: any = {};
        data[field]   = value;

        this.props.updateFormData(data);

        if (validate) {
            this.props.validateField(field, value);
        }
    }

    onButtonPress(callback: FuncArgsUnknownVoid) {
        const {email, password} = this.props;

        if (this.props.isFormValid) {
            this.props.loginClient({login: email, password: password}, callback);
        }
    }

    render() {
        return (
            <LoginComponent
                data={this.props}
                onChange={this.onChange.bind(this)}
                onButtonPress={this.onButtonPress.bind(this)}
                history={{push: () => {}}}
            />
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    email      : state.login.email,
    password   : state.login.password,
    error      : state.login.error,
    loading    : state.login.loading,
    loggedIn   : state.login.loggedIn,
    errors     : state.login.errors,
    validation : state.login.validation,
    isFormValid: state.login.isFormValid,
});

export default connect(mapStateToProps, {loginClient, validateField, updateFormData})(LoginScreen);
