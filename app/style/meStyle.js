import {
    StyleSheet
} from 'react-native';

import Dimen from './../constant/dimission';

export let meStyle = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
    },

    headContainer: {
        position: 'absolute',
        top: 100,
        left: (Dimen.window.width - 50) / 2,
    },

    head: {
        width: 60,
        height: 60,
        borderRadius: 30,

    },

    headbg: {
        width: Dimen.window.width,
        height: 230
    },

    space:{
        height:10,
        backgroundColor:'#E6E6E6'
    }
})