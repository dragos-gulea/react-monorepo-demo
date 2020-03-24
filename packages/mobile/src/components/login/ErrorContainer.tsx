import React, {Component} from 'react';
import {Text, View}       from 'react-native';
import styles             from './styles';

export default class ErrorContainer extends Component<{error: string}> {

    render() {
        if (this.props.error) {
            return (
                <View style={styles.errorBlock}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }

        return (
            <View style={styles.errorBlockEmpty}/>
        );
    }
}
