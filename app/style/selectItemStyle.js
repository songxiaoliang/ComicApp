import {
    StyleSheet
} from 'react-native';

export let selectItemStyle = StyleSheet.create({

    item: {
        flexDirection: 'column'
    },

    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },

    img: {
        width:20,
        height:20,
        marginLeft: 20,
    },

    title: {
        flex: 1,
        marginLeft: 15,
    },

    skipImg: {
        marginRight: 20
    },

    underline: {
        height: 0.5,
        backgroundColor: "#E6E6E6",
        marginLeft: 10,
        marginRight: 10
    }
})