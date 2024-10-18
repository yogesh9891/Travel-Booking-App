import {Image, FlatList, View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Styles from '../../Stylecomponents/Style'
import Header from '../../ReuseableComp/Header'
import Selectpackage from './Selectpackage'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function InspirationNextTrip() {
  return (
    <>
    <View>
    <View style={[Styles.spacebetween, {flexWrap:'wrap'}]}>
        <Text style={[Styles.heading, ]}>Get inspiration for your next tripd</Text>
    </View>
    <View style={{position:'relative', overflow:'hidden'}}>
        <Image source={require('../../../assets/img/next_trip.png')} style={internalcss.nextrip_img} />
        <Text style={internalcss.textoverlay}>Singapore</Text>
    </View>
    <View style={[Styles.spacebetween, {gap:10, marginTop:15}]}>
        <View style={[Styles.flex1, {position:'relative'}]}>
            <Image source={require('../../../assets/img/tripimg3.png')} style={internalcss.nextripimg} />
            <Text style={internalcss.textoverlay}>Singapore</Text>
        </View>
        <View style={[Styles.flex1, {position:'relative'}]}>
            <Image source={require('../../../assets/img/tripimg4.png')} style={internalcss.nextripimg} />
            <Text style={internalcss.textoverlay}>Harbin</Text>
        </View>
    </View>
    <View style={[Styles.spacebetween, {gap:10, marginTop:15}]}>
        <View style={[Styles.flex1, {position:'relative'}]}>
            <Image source={require('../../../assets/img/tripimg2.png')} style={internalcss.nextripimg} />
            <Text style={internalcss.textoverlay}>Singapore</Text>
        </View>
        <View style={[Styles.flex1, {position:'relative'}]}>
            <Image source={require('../../../assets/img/tripimg1.png')} style={internalcss.nextripimg} />
            <Text style={internalcss.textoverlay}>Seoul</Text>
        </View>
    </View>
    <View style={[Styles.spacebetween, {gap:10, marginTop:15, alignItems:'flex-start'}]}>
        <View style={[ {position:'relative' , width:wp(45)}]}>
            <Image source={require('../../../assets/img/next_trip.png')} style={internalcss.nextripimg} />
            <Text style={internalcss.textoverlay}>Singapore</Text>
        </View >
        <View style={[ {width:wp(45)}]}>
            <View style={{position:'relative'}}>
            <Image source={require('../../../assets/img/tripimg3.png')} style={internalcss.nextripimg1} />
            <Text style={[internalcss.textoverlay, {fontSize:9}]}>Seoul</Text>
            </View>
            <View style={[Styles.spacebetween, {gap:5, marginTop:5}]}>
        <View style={[Styles.flex1, {position:'relative'}]}>
            <Image source={require('../../../assets/img/tripimg2.png')} style={internalcss.nextripimg3} />
            <Text style={[internalcss.textoverlay, {fontSize:10}]}>Singapore</Text>
        </View>
        <View style={[Styles.flex1, {position:'relative'}]}>
            <Image source={require('../../../assets/img/tripimg1.png')} style={internalcss.nextripimg3} />
            <Text style={[internalcss.textoverlay, {fontSize:10}]}>Seoul</Text>
        </View>
    </View>
        </View>
        
    </View>
</View>
    </>
  )
}
const internalcss = StyleSheet.create({
    content_cart:{
        marginBottom:10,
        padding:10,
        backgroundColor:'#fff',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,

        shadowColor: 'rgba(1, 1, 1, 1)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
            shadowOpacity: 0.18,
            shadowRadius: 1.00,
            elevation: 1,
    },
    flexrow:{
        display:'flex',
        gap:15,
        flexDirection:'row'
    },
   
    textmain:{
        color:'#84818E',
        fontFamily:'Roboto-Regular',
        fontSize:16
    },
  
   
  
    nextrip_img:{
        width:'100%',
        height:160,
        objectFit:'cover',
        borderRadius:10,
    },
    textoverlay:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        width:'100%',
        paddingVertical:5,
        color:'#fff',
        textAlign:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
        fontFamily:'Roboto-Regular',
        fontSize:15,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,

    },
    nextripimg:{
        width:'100%',
        height:hp(20) ,
        objectFit:'cover',
        borderRadius:10,
    },
    nextripimg1:{
        width:'100%',
        height:hp(11),
        objectFit:'cover',
        borderRadius:10,
    },
    nextripimg3:{
        width:'100%',
        height:hp(8) ,
        objectFit:'cover',
        borderRadius:10,
    }
})