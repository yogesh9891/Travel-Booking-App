import {Image,  View, Text, StyleSheet,Pressable, } from 'react-native'
import React, { useState } from 'react'
import Styles from '../../Stylecomponents/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function Selectpackage({active } : {active?: "flight"|"hotels"|"holidays"}) {
    const navigate = useNavigation()
    const [selecpackage, setselecpackage] = useState();

    const handelselectpackage = (index: any)=>{
        setselecpackage(index)
    }

  return (
    <View style={internalcss.pacageheader}>
        {/* <Pressable onPress={()=> handelselectpackage('flight')}   style={[ selecpackage === 'flight' ? internalcss.boxforactive  : internalcss.boxcol4]}> */}
        <Pressable onPress={()=> navigate.navigate('Flightsbooking')}style={[ active === 'flight' ? internalcss.boxforactive  : internalcss.boxcol4]}>
            <Image source={require('../../../assets/img/airplane.png')} style={ active === 'flight' ? internalcss.boxiconwhite  : internalcss.boxicon} />
            <Text style={active === 'flight' ? internalcss.whitecolor : internalcss.textcolor}>   Flights</Text>
        </Pressable>
        <Pressable onPress={()=> handelselectpackage('Hotels')}   style={[ active === 'hotels' ? internalcss.boxforactive  : internalcss.boxcol4]}>
            <Image source={require('../../../assets/img/hotel.png')} style={ active === 'hotels' ? internalcss.boxiconwhite  : internalcss.boxicon} />
            <Text style={active === 'hotels' ? internalcss.whitecolor : internalcss.textcolor}>Hotels</Text>
        </Pressable>
        <Pressable onPress={()=> handelselectpackage('Holidays')} style={[ active === 'holidays' ? internalcss.boxforactive  : internalcss.boxcol4]}>
            <Image source={require('../../../assets/img/trip.png')} style={ active === 'holidays' ? internalcss.boxiconwhite  : internalcss.boxicon} />
            <Text style={active === 'holidays' ? internalcss.whitecolor : internalcss.textcolor}>Holidays Package</Text>
        </Pressable>
    </View>
  )
}
const internalcss = StyleSheet.create({
    pacageheader:{
        display:'flex',
        flexDirection:'row',
        gap:8,
        backgroundColor:'#fbfbfb',
        paddingVertical:10,
        paddingHorizontal:15,
    },
    boxcol4:{
        backgroundColor:'#fff',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:15,
        gap:5,
        borderRadius:10,
        flex:1
    },
    boxforactive:{
        backgroundColor:'#351c78',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:15,
        gap:5,
        borderRadius:10,
        flex:1
    
    },
    boxicon:{
        width:wp(5),
        height:wp(5),
    },
    boxiconwhite:{
        width:wp(5),
        height:wp(5),
        tintColor:'#fff'
    },
    textcolor:{
        color:'#351C78',
        fontFamily:'Roboto-Medium',
        fontSize:12,
    },
    whitecolor:{
        color:'#fff',
        fontFamily:'Roboto-Medium',
        fontSize:12,

    }

})