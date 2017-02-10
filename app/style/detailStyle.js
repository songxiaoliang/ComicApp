
import {
    StyleSheet
} from 'react-native';

import Dimen from './../constant/dimission';

export let detailStyle = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    
    listview:{
        height:Dimen.window.height - 165,
        marginTop:10,
        marginBottom:10
    },

    listitem:{
        padding:10
    },
    
    img:{
        width:Dimen.window.width - 50,
        height:Dimen.window.height - 165,
    }
})