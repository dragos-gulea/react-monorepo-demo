import React, {Component}           from 'react';
import {ScrollView, Text, Alert}    from 'react-native';
import {Card, CheckBox}             from 'react-native-elements';
import ClientTitlesPicker           from 'mobile/src/components/registration/ClientTitlesPicker';
import FormInput                    from 'mobile/src/components/common/FormInput';
import FormButton                   from 'mobile/src/components/common/FormButton';
import styles                       from 'mobile/src/components/registration/styles';
import {RegistrationComponentProps} from '../../types/registration';

export default class RegistrationComponent extends Component<RegistrationComponentProps> {

    renderSuccessModal() {
        if (this.props.data.showModal) {
            Alert.alert(
                'Welcome!',
                'Please confirm your account by visiting the link that we\'ve just sent to you via email.',
                [
                    {
                        text: 'Login', style: 'default', onPress: () => {
                            this.props.data.navigation.navigate('Login');
                            this.props.data.registerClientComplete();
                        }
                    },
                ],
                {cancelable: false},
            );
        }

        return null;
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <ClientTitlesPicker
                        list={this.props.data.clientTitles}
                        defaultValue={this.props.data.title}
                        onChange={this.props.onChange}
                        error={this.props.data.errors.title}
                    />

                    <FormInput field_name="first_name" placeholder="First Name" value={this.props.data.first_name}
                               error={this.props.data.errors.first_name} onChange={this.props.onChange}/>

                    <FormInput field_name="last_name" placeholder="Last Name" value={this.props.data.last_name}
                               error={this.props.data.errors.last_name} onChange={this.props.onChange}/>

                    <FormInput field_name="email" placeholder="Email" value={this.props.data.email}
                               error={this.props.data.errors.email} onChange={this.props.onChange}/>

                    <FormInput field_name="phone1" placeholder="Phone Number" value={this.props.data.phone1}
                               error={this.props.data.errors.phone1} onChange={this.props.onChange}/>

                    <FormInput field_name="password" placeholder="Password" value={this.props.data.password}
                               error={this.props.data.errors.password} onChange={this.props.onChange} type="password"/>

                    <FormInput field_name="confirm_password" placeholder="Password Confirm"
                               value={this.props.data.confirm_password}
                               error={this.props.data.errors.confirm_password} onChange={this.props.onChange}
                               type="password"/>

                    <CheckBox
                        title='I confirm I am over 18 years old'
                        checked={this.props.data.age}
                        onPress={() => this.props.onChange('age', !this.props.data.age)}
                    />
                    <Text style={styles.errorTextStyle}>{this.props.data.errors.age}</Text>


                    <FormButton label="Register" onClick={this.props.onSubmit.bind(this)}
                                isSubmitting={this.props.data.isSubmitting}/>

                    {this.renderSuccessModal()}
                </Card>
            </ScrollView>
        );
    }
}
