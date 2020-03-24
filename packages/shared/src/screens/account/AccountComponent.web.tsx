import React, {Component}      from 'react';
import {AccountComponentProps} from 'shared/src/types/account';
import FormInput               from 'web/src/components/common/FormInput';
import DialogAlert             from 'web/src/components/common/DialogAlert';
import FormButton              from 'web/src/components/common/FormButton';
import ReloadButton            from 'web/src/components/common/ReloadButton';

export default class AccountComponent extends Component<AccountComponentProps> {

    renderSuccessModal() {
        if (this.props.data.showModal) {
            return <DialogAlert
                title={'Account updated successfully!'}
                message={''}
                btnTitle={'Close'}
                callBack={() => this.props.data.updateAccountComplete()}
            />;
        }

        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col grid-custom welcome">
                        Account management
                    </div>
                </div>

                <div className="form-custom">

                    <FormInput field_name="first_name" placeholder="First Name"
                               value={this.props.data.first_name} error={this.props.data.errors.first_name}
                               onChange={this.props.onChange}/>

                    <FormInput field_name="last_name" placeholder="Last Name"
                               value={this.props.data.last_name} error={this.props.data.errors.last_name}
                               onChange={this.props.onChange}/>

                    <FormInput field_name="phone1" placeholder="Phone Number"
                               value={this.props.data.phone1} error={this.props.data.errors.phone1}
                               onChange={this.props.onChange}/>

                    <FormButton label={'Save'} onClick={this.props.onSubmit.bind(this)}
                                isSubmitting={this.props.data.isSubmitting}/>

                    {this.renderSuccessModal()}
                </div>
                <hr/>
            </div>
        );
    }
}
