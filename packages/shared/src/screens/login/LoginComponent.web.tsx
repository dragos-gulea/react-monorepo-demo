import React, {Component}    from 'react';
import {LoginComponentProps} from '../../types/login';
import FormButton            from 'web/src/components/common/FormButton';
import FormInput             from 'web/src/components/common/FormInput';

export default class LoginComponent extends Component<LoginComponentProps> {

    handleSubmit() {
        this.props.onButtonPress(() => {window.location.href = '/dashboard'});
    }

    renderError() {
        if (this.props.data.error) {
            return (
                <div style={{color: 'red', textAlign: 'center'}}>
                    {this.props.data.error}
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col grid-custom welcome">
                        Authentication
                    </div>
                </div>

                <div className="form-custom">
                    <FormInput field_name="email" placeholder="Email"
                               value={this.props.data.email} error={this.props.data.errors.email}
                               onChange={this.props.onChange}/>

                    <FormInput field_name="password" placeholder="Password" type="password"
                               value={this.props.data.password} error={this.props.data.errors.password}
                               onChange={this.props.onChange}/>

                    {this.renderError()}

                    <FormButton label={'Get me in'} onClick={this.handleSubmit.bind(this)}
                                isSubmitting={this.props.data.loading}/>
                </div>
                <hr/>
            </div>
        );
    }
}
