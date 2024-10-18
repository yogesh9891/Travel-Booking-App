import {Image, FlatList, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Styles from '../../Stylecomponents/Style'
import Header from '../../ReuseableComp/Header'
import Selectpackage from './Selectpackage'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ExploreWorld() {
  return (
    <>
    <View style={Styles.spacebetween}>
                    <Text style={[Styles.heading, ]}>Explore World</Text>
                    <Text style={Styles.betweenall}>View all</Text>
                </View>
                
                <View style={[Styles.spacebetween, {gap:10}]}>
                    <View style={[Styles.flex1, ]}>
                      <TouchableOpacity style={internalcss.explorecart}>
                        <Image source={require('../../../assets/img/world4.png')} style={[internalcss.exploreinde, {height:hp(30)}]} />
                        <View style={internalcss.overlaytext}>
                            <Text style={internalcss.area}>Create Memories in</Text>
                            <Text style={internalcss.cityname}>Switzerland</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={internalcss.explorecart}>
                        <Image source={require('../../../assets/img/world2.png')} style={internalcss.exploreinde} />
                        <View style={internalcss.overlaytext}>
                            <Text style={internalcss.area}>Create Memories in</Text>
                            <Text style={internalcss.cityname}>London</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={[Styles.flex1]}>
                    <TouchableOpacity style={internalcss.explorecart}>
                        <Image source={require('../../../assets/img/world3.png')} style={internalcss.exploreinde1} />
                        <View style={internalcss.overlaytext}>
                            <Text style={internalcss.area}>Create Memories in</Text>
                            <Text style={internalcss.cityname}>Italy</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={internalcss.explorecart}>
                        <Image source={require('../../../assets/img/world1.png')} style={internalcss.exploreinde1} />
                        <View style={internalcss.overlaytext}>
                            <Text style={internalcss.area}>Create Memories in</Text>
                            <Text style={internalcss.cityname}>Rajasthan</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                </View>
    </>
  )
}

const internalcss = StyleSheet.create({
    
    explorecart:{
        position:'relative',
        overflow:'hidden',
        marginBottom:10
        
    },
    
    exploreinde:{
        width:'100%',
    height:hp(30),
    objectFit:'cover',
    borderRadius:10,
    
},
exploreinde1:{
    width:'100%',
    height:hp(31),
    objectFit:'cover',
    borderRadius:10,
},
overlaytext:{
    position:'absolute',
    bottom:0,
    padding:15,
    backgroundColor:'rgba(0,0,0,0.1)',
    // backgroundColor:'blue',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    width:'100%',
    textAlign:'center',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
},
area:{
    color:'#fff',
    fontSize:15,
    textAlign:'center',
    fontFamily:'Roboto-Regular'
},
cityname:{
    color:'#fff',
    fontSize:17,
    fontFamily:'PlayfairDisplay-Regular',
},
})