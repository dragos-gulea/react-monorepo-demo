import React, {Component} from 'react';
import {Spinner}          from './Spinner';
import {Button}           from 'react-native-elements';
import {FormButtonProps}  from 'shared/src/types/common';
import styles             from './styles';

export default class FormButton extends Component<FormButtonProps> {

    render() {
        if (this.props.isSubmitting) {
            return <Spinner size="large"/>;
        }

        return (
            <Button buttonStyle={styles.button} title={this.props.label} onPress={this.props.onClick}/>
        );
    }
}
