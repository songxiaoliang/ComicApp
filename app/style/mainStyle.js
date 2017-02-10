import {
    StyleSheet
} from 'react-native';

import Dimen from './../constant/dimission';

export let mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    contentContainer: {
        flex: 1
    },

    banner: {
        width: Dimen.window.width,
        height: (Dimen.window.width - 120)
    },

    listview: {
        height: Dimen.window.height
    },

    listitem: {
        alignItems: "center",
        flexDirection: 'row',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 0.5
    },

    itemImage: {
        margin: 10,
        width: 105,
        height: 70,
        borderRadius: 5
    },

    item: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',

    },

    itemContent: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },

    itemTitle: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },

    time: {
        marginTop: 7,
        marginBottom: 7,
        fontSize: 12
    },

    hintImg: {
        width: 50,
        height: 50,
    },
    desc: {
        fontSize: 12
    }

})
