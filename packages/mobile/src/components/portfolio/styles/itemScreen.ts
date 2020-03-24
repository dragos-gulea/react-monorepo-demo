import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container       : {
        flex           : 1,
        flexDirection  : 'column',
        padding        : 10,
        marginLeft     : 16,
        marginRight    : 16,
        marginTop      : 8,
        marginBottom   : 8,
        borderRadius   : 5,
        backgroundColor: '#FFF',
        elevation      : 2,
    },
    title           : {
        fontSize    : 20,
        color       : '#000',
        marginBottom: 15,
        fontWeight  : 'bold',
    },
    containerText   : {
        flex      : 1,
        marginLeft: 12,
    },
    description     : {
        fontSize    : 15,
        marginBottom: 3,
    },
    photo           : {
        height    : 300,
        width     : 300,
        resizeMode: 'contain',
    },
    containerActions: {
        marginTop: 20,
    },
    actionButton    : {
        backgroundColor: 'black',
    },
    fieldName       : {
        color: 'gray',
    },
});

export default styles;
