import React, {Component}               from 'react';
import {ArrStrStr, FuncArgsUnknownVoid} from 'shared/src/types/common';
import {Picker, Text, View}             from 'react-native';
import styles                           from '../common/styles';

interface Props {
    defaultValue: string,
    list        : ArrStrStr,
    onChange    : FuncArgsUnknownVoid,
    error       : string
}

export default class ClientTitlesPicker extends Component<Props> {

    render() {
        let options = [];

        for (let [key, value] of Object.entries(this.props.list)) {
            options.push(<Picker.Item label={value} value={key} key={key}/>);
        }

        return (
            <View>
                <Picker
                    selectedValue={this.props.defaultValue}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.props.onChange('title', itemValue, false)}>
                    {options}
                </Picker>

                <Text style={styles.validationError}>{this.props.error}</Text>
            </View>
        );
    }
}
