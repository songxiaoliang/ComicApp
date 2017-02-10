import {
    StyleSheet
} from 'react-native';
export let toolBarStyle = StyleSheet.create({

    container: {
        height: 75,
        paddingTop: 25,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray',
        backgroundColor: '#FE2D4A'
    },

    back:{
        marginLeft:15
    },
    
    title: {
        flex:1,
        fontSize: 18,
        color: 'white',
    }
})