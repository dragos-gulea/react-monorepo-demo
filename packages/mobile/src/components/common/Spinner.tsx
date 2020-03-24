import React                                             from 'react';
import {View, ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import styles                                            from './styles';

const Spinner = (props: ActivityIndicatorProps) => {

    return (
        <View style={styles.spinner}>
            <ActivityIndicator color="#0071CE" size={props.size}/>
        </View>
    );
};

export {Spinner};
