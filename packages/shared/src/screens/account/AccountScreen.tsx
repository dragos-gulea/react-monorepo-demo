import React, {Component} from 'react';
import {connect}          from 'react-redux';
import {AppState}         from 'shared/src/types/common';
import {AccountProps}     from 'shared/src/types/account';
import {
    fetchData,
    updateFormData,
    validateField,
    validateForm,
    updateAccountComplete
}                         from 'shared/src/actions/account';
import AccountComponent   from './AccountComponent';

class AccountScreen extends Component<AccountProps> {

    componentDidMount(): void {
        this.props.fetchData();
    }

    onSubmit(): void {
        this.props.validateForm();
    }

    onChange(field: string, value: string, validate: boolean = true) {
        let data: any = {};
        data[field]   = value;

        this.props.updateFormData(data);

        if (validate) {
            this.props.validateField(field, value);
        }
    }

    render() {
        return (
            <AccountComponent
                data={this.props}
                onSubmit={this.onSubmit.bind(this)}
                onChange={this.onChange.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    first_name  : state.account.first_name,
    last_name   : state.account.last_name,
    phone1      : state.account.phone1,
    errors      : state.account.errors,
    isFormValid : state.account.isFormValid,
    isSubmitting: state.account.isSubmitting,
    showModal   : state.account.showModal,
});

export default connect(
    mapStateToProps, {fetchData, updateFormData, validateField, validateForm, updateAccountComplete},
)(AccountScreen);
