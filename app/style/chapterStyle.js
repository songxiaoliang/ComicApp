
import {
    StyleSheet
} from 'react-native';

import Dimen from './../constant/dimission';

export let chapterStyle = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF'
    },

    listview: {
        height: Dimen.window.height
    },

    item: {
        height: 50,
        flexDirection: 'column',
    },

    itemContainer: {
        height: 49,
        flexDirection: 'row',
        alignItems: 'center'
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