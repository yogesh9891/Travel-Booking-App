import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList,  } from 'react-native'
import React, { useState } from 'react'
import Header from '../ReuseableComp/Header'
import Styles from '../Stylecomponents/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Selectdate from './Homeallcomponent/Selectdate';
import Showmultipalflight from './Homeallcomponent/Showmultipalflight';
import { useNavigation } from '@react-navigation/native';
export default function Searchresultflight() {
  
  const navigate = useNavigation()

  return (
    <>
    <Header bckbtn compontetname compontetnm='Search flight' />

    <Selectdate />

    <View style={[Styles.container, Styles.bgwhite, Styles.flex1]}>

      <Showmultipalflight />
    
    </View>
    
    <View style={[Styles.bgwhite, internalcss.bottomcss, Styles.spacebetween]}>
    
      <TouchableOpacity onPress={()=> navigate.navigate('FlightDetails')} style={[Styles.flex1, ]}>
         <Text style={internalcss.flexcenter}><Image source={require('../../assets/img/sort.png')} style={{width:wp(4), height:wp(5), objectFit:'contain'}} /> Sort</Text>
      </TouchableOpacity>
    
      <Text style={{width:1, height:30, backgroundColor:'#ceccd1'}}></Text>
    
      <TouchableOpacity style={[Styles.flex1, ]}>
        <Text style={internalcss.flexcenter}> <Image source={require('../../assets/img/Filter.png')} style={{width:wp(4), height:wp(5),  objectFit:'contain'}} /> Filter</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

const internalcss = StyleSheet.create({
  flexcenter:{
    textAlign:'center',
    color:'#09021C',
    fontFamily:'Roboto-Medium',
    fontSize:15,
    paddingVertical:10
  },
  bottomcss:{
    paddingHorizontal:10,
    borderTopColor:'#ccc',
    borderTopWidth:1,
    borderStyle:'solid',
    backgroundColor:'#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  }
})