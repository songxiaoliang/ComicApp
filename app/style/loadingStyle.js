import {
    StyleSheet
} from 'react-native';

import Dimen from './../constant/dimission';

export let loadingStyle = StyleSheet.create({
    container: {
        width: 100,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: (Dimen.window.height - 50) / 2,
        left: (Dimen.window.width - 100) / 2,
        flexDirection: 'column',
    },

    img: {
        width: 50,
        height: 50,
    },

    title: {
        fontSize: 14,
        color: 'gray'
    }
})