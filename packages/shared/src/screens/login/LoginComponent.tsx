import React, {Component}    from 'react';
import {View}                from 'react-native';
import {Card}                from 'react-native-elements';
import ErrorContainer        from 'mobile/src/components/login/ErrorContainer';
import FormButton            from 'mobile/src/components/common/FormButton';
import FormInput             from 'mobile/src/components/common/FormInput';
import {LoginComponentProps} from '../../types/login';

export default class LoginComponent extends Component<LoginComponentProps> {

    handleSubmit() {
        this.props.onButtonPress(() => {
            this.props.data.navigation.navigate('Authenticated')
        });
    }

    render() {
        return (
            <View>
                <Card>
                    <FormInput field_name="email" placeholder="Email" value={this.props.data.email}
                               error={this.props.data.errors.email} onChange={this.props.onChange}/>

                    <FormInput field_name="password" placeholder="Password" value={this.props.data.password}
                               error={this.props.data.errors.password} onChange={this.props.onChange}
                               type="password"/>

                    <ErrorContainer error={this.props.data.error}/>
                    <FormButton label="Get me in" onClick={this.handleSubmit.bind(this)}
                                isSubmitting={this.props.data.loading}/>
                </Card>
            </View>
        );
    }
}
