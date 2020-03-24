import React, {Component} from 'react';
import {Text, View}       from 'react-native';
import {Input}            from 'react-native-elements';
import {FormInputProps}   from 'shared/src/types/common';
import styles             from './styles';

export default class FormInput extends Component<FormInputProps> {

    render() {
        return (
            <View>
                <Input
                    secureTextEntry={this.props.type === 'password'}
                    placeholder={this.props.placeholder}
                    onChangeText={(value) => this.props.onChange(this.props.field_name, value)}
                    value={this.props.value}/>
                <Text style={styles.validationError}>{this.props.error}</Text>
            </View>
        );
    }
}
