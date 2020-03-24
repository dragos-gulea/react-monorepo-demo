import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container      : {
        margin         : 20,
        backgroundColor: '#ffffff',
    },
    errorBlock     : {
        backgroundColor: 'white',
    },
    errorBlockEmpty: {
        backgroundColor: 'white',
        height         : 20,
    },
    errorTextStyle : {
        marginTop: 15,
        color    : 'red',
        fontSize : 15,
        alignSelf: 'center',
    },
    welcomeMessage : {
        margin   : 30,
        color    : 'green',
        fontSize : 15,
        textAlign: 'center',
    },
    button         : {
        marginTop      : 20,
        backgroundColor: 'black',
    },
});

export default styles;
