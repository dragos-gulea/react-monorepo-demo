import React, {Component}    from 'react';
import {connect}             from 'react-redux';
import {RegistrationProps}   from 'shared/src/types/registration';
import {AppState}            from 'shared/src/types/common';
import {
    loadClientTitles,
    updateFormData,
    validateField,
    validateForm,
    registerClientComplete
}                            from 'shared/src/actions/registration';
import RegistrationComponent from './RegistrationComponent';


class RegistrationScreen extends Component<RegistrationProps> {

    componentDidMount() {
        if (Object.entries(this.props.clientTitles).length === 0) {
            this.props.loadClientTitles();
        }
    }

    onSubmit() {
        this.props.validateForm();
    }

    onChange(field: string, value: string | boolean, validate: boolean = true) {
        let data: any = {};
        data[field]   = value;

        this.props.updateFormData(data);

        if (validate) {
            this.props.validateField(field, value);
        }
    }

    render() {
        return (
            <RegistrationComponent
                data={this.props}
                onSubmit={this.onSubmit.bind(this)}
                onChange={this.onChange.bind(this)}
                history={{push: () => {}}}
            />
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    email           : state.register.email,
    password        : state.register.password,
    confirm_password: state.register.confirm_password,
    title           : state.register.title,
    first_name      : state.register.first_name,
    last_name       : state.register.last_name,
    phone1          : state.register.phone1,
    age             : state.register.age,
    clientTitles    : state.register.clientTitles,
    errors          : state.register.errors,
    isFormValid     : state.register.isFormValid,
    isSubmitting    : state.register.isSubmitting,
    showModal       : state.register.showModal,
});

export default connect(
    mapStateToProps, {loadClientTitles, updateFormData, validateField, validateForm, registerClientComplete},
)(RegistrationScreen);
