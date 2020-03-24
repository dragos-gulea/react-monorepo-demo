import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    validationError: {
        color    : 'red',
        fontSize : 13,
        alignSelf: 'flex-start',
    },
    button        : {
        marginTop      : 20,
        backgroundColor: 'black',
    },
    picker        : {
        height: 50,
        width : 100,
    },
    spinner: {
        flex          : 1,
        justifyContent: 'center',
        alignItems    : 'center'
    }
});

export default styles;
