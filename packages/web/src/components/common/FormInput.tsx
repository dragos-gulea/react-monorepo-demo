import React, {Component} from 'react';
import {FormInputProps}   from 'shared/src/types/common';

export default class FormInput extends Component<FormInputProps> {

    render() {
        return (
            <div className="input-group mb-3">
                <input type={this.props.type ? this.props.type : 'text'}
                       className={'form-control ' + (this.props.error ? 'is-invalid' : '')}
                       aria-label={this.props.placeholder}
                       placeholder={this.props.placeholder}
                       value={this.props.value}
                       onChange={(event) => this.props.onChange(this.props.field_name, event.target.value)}/>

                <div className="invalid-feedback">
                    {this.props.error}
                </div>
            </div>
        );
    }
}
