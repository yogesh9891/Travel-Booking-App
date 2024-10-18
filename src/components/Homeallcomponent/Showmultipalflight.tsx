import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from '../../Stylecomponents/Style';
export default function Showmultipalflight() {

const [flightlist, setflightlist] = useState([
    {
        flighlogo:require('../../../assets/img/logoflight.png'),
        flightname:'Air India',
        flightprice:`26,490.00`,
        flightstart:'New Delhi',
        flightstarttime:'09:00',
        flightstartcode:'DEL',
        flighttimedecrotaion:'7h 30m',
        flightto:'Dubai',
        flighendtime:' 16:30',
        flightocode:' UAE',
    },
    {
        flighlogo:require('../../../assets/img/logoflight.png'),
        flightname:'Air India',
        flightprice:`26,490.00`,
        flightstart:'New Delhi',
        flightstarttime:'09:00',
        flightstartcode:'DEL',
        flighttimedecrotaion:'7h 30m',
        flightto:'Dubai',
        flighendtime:' 16:30',
        flightocode:' UAE',
    },
    {
        flighlogo:require('../../../assets/img/logoflight.png'),
        flightname:'Air India',
        flightprice:`26,490.00`,
        flightstart:'New Delhi',
        flightstarttime:'09:00',
        flightstartcode:'DEL',
        flighttimedecrotaion:'7h 30m',
        flightto:'Dubai',
        flighendtime:' 16:30',
        flightocode:' UAE',
    },
    {
        flighlogo:require('../../../assets/img/logoflight.png'),
        flightname:'Air India',
        flightprice:`26,490.00`,
        flightstart:'New Delhi',
        flightstarttime:'09:00',
        flightstartcode:'DEL',
        flighttimedecrotaion:'7h 30m',
        flightto:'Dubai',
        flighendtime:' 16:30',
        flightocode:' UAE',
    }
]);


const renderflightcard =({item, index}) =>{
        return(
            <>
            <TouchableOpacity style={internalcss.selectflightcard}>
             <View style={[Styles.spacebetween, internalcss.headerflight]}>
                <View style={[Styles.d_row, {gap:10, alignItems:'center'}]}>
                    <Image source={item.flighlogo} style={{width:wp(6), height:wp(6), objectFit:'cover'}} />
                    <Text style={internalcss.nameflight}>{item.flightname}</Text>
                </View>
                <Text style={internalcss.flightprice}>₹ {item.flightprice}</Text>
             </View>
             <View style={internalcss.textcenter}><Image source={require('../../../assets/img/goflight.png')} style={internalcss.flighticon} /></View>
            <View style={[Styles.spacebetween, {marginTop:12}]}>
                <View>
                <Text style={internalcss.distanctname}>{item.flightstart}</Text>
                <Text style={internalcss.time}>{item.flightstarttime}</Text>
                <Text style={internalcss.distanctname}>{item.flightstartcode}</Text>
                </View>
                <View>
                    <Text style={[internalcss.searavivble, {marginBottom:4}]}>{item.flighttimedecrotaion}</Text>
                    <Text style={internalcss.searavivble}>Direct</Text>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={internalcss.distanctname}>{item.flightto}</Text>
                    <Text style={internalcss.time}>{item.flighendtime}</Text>
                    <Text style={internalcss.distanctname}>{item.flightocode}</Text>
                </View>
            </View>
        </TouchableOpacity>
            
            </>
        )
}


  return (
    <>
        <FlatList 
            data={flightlist}
            renderItem={renderflightcard}
        />
    </>
  )
}

const internalcss = StyleSheet.create({
    flightprice:{
        color:'#351C78',
        fontFamily:'Roboto-Medium',
        fontSize:13
    },
    nameflight:{
        color:'#09021C',
        fontFamily:'Roboto-Medium',
        fontSize:12
    },
    selectflightcard:{
        marginTop:10,
        marginHorizontal:1,
        backgroundColor:'#fff',
        marginBottom:15,
        padding:10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    headerflight:{
        // paddingHorizontal:10,
        paddingBottom:5,
        marginVertical:10,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        borderStyle:'solid'
    },
    textcenter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red'
      },
      flightheader:{
        backgroundColor:'#351c78',
        paddingVertical:20,
        paddingHorizontal:10
    
    
      },
      searavivble:{
        color:'#84818E',
        fontSize:11,
      },
      distanctname:{
        fontSize:11,
        fontFamily:'Roboto-Regular',
        color:'#84818E'
      },
      flighticon:{
        width:wp(43),
        height:wp(13),
        objectFit:'cover',
        tintColor:'#351C78'
      },
      desp:{
        fontSize:13,
        fontFamily:'Roboto-Medium',
        color:'#351C78'
      },
      time:{
        color:'#09021C',
        fontSize:14,
        fontFamily:'Roboto-Medium',
      }
})