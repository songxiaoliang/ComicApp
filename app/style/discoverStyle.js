import {
    StyleSheet
} from 'react-native';

import Dimen from './../constant/dimission';
export let discoverStyle = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    listview: {
        height: Dimen.window.height,
        marginLeft: 10,
        marginRight: 10
    },

    listitem: {
        flexDirection: 'column',
        paddingTop: 10
    },

    img: {
        width:Dimen.window.width - 20 ,
        height: 200,
        borderRadius:6
    },

    disc: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 10,
        marginRight:10,
        justifyContent: 'flex-start',
    }
})