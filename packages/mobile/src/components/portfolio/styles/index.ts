import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container      : {
        flex: 1,
    },
    actionButton   : {
        backgroundColor: 'black',
        margin         : 30,
    },
    loaderContainer: {
        margin    : 5,
        alignItems: 'center',
    },
    loaderButton   : {
        height    : 50,
        width     : 50,
        resizeMode: 'contain',
    },
});

export default styles;
