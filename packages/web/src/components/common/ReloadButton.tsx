import React, {Component}    from 'react';
import {FuncArgsUnknownVoid} from 'shared/src/types/common';

interface Props {
    label   ?: string,
    isLoading: boolean,
    onClick  : FuncArgsUnknownVoid
}

export default class ReloadButton extends Component<Props> {

    render() {
        if (this.props.isLoading) {
            return (
                <i className="fas fa-spinner fa-lg fa-spin loading-icon"/>
            );
        }

        return (
            <button type="button" className="btn btn-primary btn-sm reload-btn"
                onClick={() => this.props.onClick()}>{this.props.label ? this.props.label : 'reload'}
            </button>
        );
    }
}
