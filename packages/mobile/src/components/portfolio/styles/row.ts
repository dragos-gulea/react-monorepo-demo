import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container        : {
        flex           : 1,
        flexDirection  : 'row',
        padding        : 10,
        marginLeft     : 16,
        marginRight    : 16,
        marginTop      : 8,
        marginBottom   : 8,
        borderRadius   : 5,
        backgroundColor: '#FFF',
        elevation      : 2,
    },
    title            : {
        fontSize    : 16,
        color       : '#000',
        marginBottom: 5,
    },
    containerText    : {
        flex          : 1,
        flexDirection : 'column',
        marginLeft    : 12,
        justifyContent: 'center',
    },
    description      : {
        fontSize : 11,
        fontStyle: 'italic',
    },
    photo            : {
        height    : 100,
        width     : 100,
        resizeMode: 'contain',
    },
    containerActions : {
        marginTop    : 10,
        flex         : 1,
        flexDirection: 'row',
    },
    actionButton     : {
        marginRight: 10,
    },
    actionButtonLabel: {
        color             : 'gray',
        textDecorationLine: 'underline',
    },
    fieldName        : {
        color: 'gray',
    },
});

export default styles;
