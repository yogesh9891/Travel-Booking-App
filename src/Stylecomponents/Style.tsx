import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    bgwhite:{
        backgroundColor:'#fff'
    },
    container:{
        paddingHorizontal:15
    },
    flex1:{
        flex:1
    },
    d_row:{
        display:'flex',
        flexDirection:'row'

    },
    heading:{
        fontFamily:'PlayfairDisplay-Bold',
        fontSize:20,
        color:'#000',
        marginBottom:10
    },
    spacebetween:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    betweenall:{
        color:'#2F80ED',
        fontFamily:'Roboto-Regular',
        fontSize:16
    }

})

export default Styles;