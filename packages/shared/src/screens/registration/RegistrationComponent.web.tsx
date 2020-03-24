import React, {Component}           from 'react';
import {withRouter}                 from 'react-router';
import {RegistrationComponentProps} from '../../types/registration';
import FormInput                    from 'web/src/components/common/FormInput';
import DialogAlert                  from 'web/src/components/common/DialogAlert';
import FormButton                   from 'web/src/components/common/FormButton';

class RegistrationComponent extends Component<RegistrationComponentProps> {

    buildSelectOptions() {
        let options = [];

        for (let [key, value] of Object.entries(this.props.data.clientTitles)) {
            options.push(<option value={key} key={key}>{value}</option>);
        }

        return options;
    }

    renderSuccessModal() {
        if (this.props.data.showModal) {
            return <DialogAlert
                title={'Welcome!'}
                message={'Please confirm your account by visiting the link that we\'ve just sent to you via email'}
                btnTitle={'Login'}
                callBack={() => {
                    this.props.history.push('/login');
                    this.props.data.registerClientComplete();
                }}
            />;
        }

        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col grid-custom welcome">
                        Registration
                    </div>
                </div>

                <div className="form-custom registration">
                    <div className="input-group mb-3">
                        <select
                            className={'browser-default custom-select ' + (this.props.data.errors.title ? 'is-invalid' : '')}
                            onChange={(event) => this.props.onChange('title', event.target.value, true)}
                            value={this.props.data.title}>

                            {this.buildSelectOptions()}
                        </select>
                        <div className="invalid-feedback">
                            {this.props.data.errors.title}
                        </div>
                    </div>

                    <FormInput field_name="first_name" placeholder="First Name"
                               value={this.props.data.first_name} error={this.props.data.errors.first_name}
                               onChange={this.props.onChange}/>

                    <FormInput field_name="last_name" placeholder="Last Name"
                               value={this.props.data.last_name} error={this.props.data.errors.last_name}
                               onChange={this.props.onChange}/>

                    <FormInput field_name="email" placeholder="Email"
                               value={this.props.data.email} error={this.props.data.errors.email}
                               onChange={this.props.onChange}/>

                    <FormInput field_name="phone1" placeholder="Phone Number"
                               value={this.props.data.phone1} error={this.props.data.errors.phone1}
                               onChange={this.props.onChange}/>

                    <FormInput field_name="password" placeholder="Password" type="password"
                               value={this.props.data.password} error={this.props.data.errors.password}
                               onChange={this.props.onChange}/>

                    <FormInput field_name="confirm_password" placeholder="Password Confirm" type="password"
                               value={this.props.data.confirm_password} error={this.props.data.errors.confirm_password}
                               onChange={this.props.onChange}/>

                    <div className="input-group mb-3">
                        <div className="form-check">
                            <input type="checkbox"
                                   className={'form-check-input ' + (this.props.data.errors.age ? 'is-invalid' : '')}
                                   id="age-confirmed"
                                   checked={this.props.data.age}
                                   onChange={(event) => this.props.onChange('age', !this.props.data.age)}/>
                            <label className="form-check-label" htmlFor="age-confirmed">I confirm I am over 18 years
                                old</label>
                            <div className="invalid-feedback">
                                {this.props.data.errors.age}
                            </div>
                        </div>
                    </div>


                    <FormButton label={'Register'} onClick={this.props.onSubmit.bind(this)}
                                isSubmitting={this.props.data.isSubmitting}/>

                    {this.renderSuccessModal()}
                </div>
                <hr/>
            </div>
        );
    }
}

// @ts-ignore
export default withRouter(RegistrationComponent);
