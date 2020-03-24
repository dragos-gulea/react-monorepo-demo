import React, {Component} from 'react';
import {FormButtonProps}  from 'shared/src/types/common';
import Spinner            from './Spinner';

export default class FormButton extends Component<FormButtonProps> {

    render() {
        let content;

        if (this.props.isSubmitting) {
            content = <Spinner/>;

        } else {
            content = (
                <button className="btn btn-md btn-default m-0 px-5 btn-black" type="button"
                        onClick={this.props.onClick}>{this.props.label}
                </button>
            );
        }

        return (
            <div className="form-btn">{content}</div>
        );
    }
}
