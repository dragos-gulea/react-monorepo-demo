import React, {Component}      from 'react';
import {ScrollView, Alert}     from 'react-native';
import {Card}          from 'react-native-elements';
import {AccountComponentProps} from 'shared/src/types/account';
import FormInput               from 'mobile/src/components/common/FormInput';
import FormButton              from 'mobile/src/components/common/FormButton';

export default class AccountComponent extends Component<AccountComponentProps> {

    renderSuccessModal() {
        if (this.props.data.showModal) {
            Alert.alert(
                'Account updated successfully!',
                '',
                [{text: 'Close', onPress: () => this.props.data.updateAccountComplete()}],
                {cancelable: false},
            );
        }

        return null;
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <FormInput field_name="first_name" placeholder="First Name" value={this.props.data.first_name}
                               error={this.props.data.errors.first_name} onChange={this.props.onChange}/>

                    <FormInput field_name="last_name" placeholder="Last Name" value={this.props.data.last_name}
                               error={this.props.data.errors.last_name} onChange={this.props.onChange}/>

                    <FormInput field_name="phone1" placeholder="Phone number" value={this.props.data.phone1}
                               error={this.props.data.errors.phone1} onChange={this.props.onChange}/>


                    <FormButton label="Save" onClick={this.props.onSubmit.bind(this)}
                                isSubmitting={this.props.data.isSubmitting}/>

                    {this.renderSuccessModal()}
                </Card>
            </ScrollView>
        );
    }
}
