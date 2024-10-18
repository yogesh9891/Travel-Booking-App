import {Image, FlatList, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Styles from '../../Stylecomponents/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function DiscoverWeekly() {

const [explorecard, setExplorecard] = useState([
    {
        exploreimg:require('../../../assets/img/Discoverimg.png'),
        exploreheading:'Ecotourism Sabah sightseeing tours – 2 hours',
        locationo:'Sabah, Malaysia',
        rating:'4.5',
        exploreprice:'99,999.00',
        saveletter:'Save for later',
    },
    {
        exploreimg:require('../../../assets/img/Discoverimg.png'),
        exploreheading:'Ecotourism Sabah sightseeing tours – 2 hours',
        locationo:'Sabah, Malaysia',
        rating:'4.5',
        exploreprice:'99,999.00',
        saveletter:'Save for later',
    },
    {
        exploreimg:require('../../../assets/img/Discoverimg.png'),
        exploreheading:'Ecotourism Sabah sightseeing tours – 2 hours',
        locationo:'Sabah, Malaysia',
        rating:'4.5',
        exploreprice:'99,999.00',
        saveletter:'Save for later',
    },
    {
        exploreimg:require('../../../assets/img/Discoverimg.png'),
        exploreheading:'Ecotourism Sabah sightseeing tours – 2 hours',
        locationo:'Sabah, Malaysia',
        rating:'4.5',
        exploreprice:'99,999.00',
        saveletter:'Save for later',
    },
]);


const explorerendercartd = ({item, index}) =>{
    return(
        <>
         <TouchableOpacity style={internalcss.discoerycart}>
            <View style={internalcss.cardimg}>
               <Image source={item.exploreimg} style={internalcss.exploreimg} />
            </View>
            <View style={internalcss.contenarea}>
                <Text style={internalcss.heading}>{item.exploreheading} </Text>
                <Text style={internalcss.address}><EvilIcons name='location' size={15} color='#EB5757' />{item.locationo}</Text>
                <View style={[Styles.spacebetween, {marginBottom:8}]}>
                    <View>
                    <Text style={internalcss.rating}><AntDesign name='star' size={11} color='#F2C94C' /> 4.5 </Text>
                    </View>
                    <View>
                        <Text style={internalcss.pricee}>₹ {item.exploreprice}</Text>
                    </View>
                </View>
                <View style={Styles.spacebetween}>
                    <View>
                        <Text style={internalcss.saveltr}>
                            <MaterialIcons name='save-alt' size={11} color='red' /> {item.saveletter}
                        </Text>
                    </View>
                    <View>
                        <Text style={internalcss.explore}>Explore <AntDesign name='arrowright' size={11} color='#351C78' />  </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        </>
    )
}

  return (
    <View style={{marginTop:15}}>
      <Text style={[Styles.heading, ]}>Explore World</Text>


      <FlatList
    data={explorecard}
    keyExtractor={(item, index) => `${index}`}

    renderItem={explorerendercartd}
    contentContainerStyle={{ paddingVertical: 15, }}
/>

       
    </View>
  )
}
const internalcss = StyleSheet.create({
    explore:{
        color:'#351C78',
        fontFamily:'Roboto-Medium',
        fontSize:11,
    },
    saveltr:{
        color:'#EB5757',
        fontFamily:'Roboto-Medium',
        fontSize:11,
    },
    pricee:{
        fontSize:13,
        fontFamily:'Roboto-Bold',
        color:'#000'
    },
    rating:{
        color:'#84818E',
        fontSize:11,
        fontFamily:'Roboto-Medium',
    },
    address:{
        color:'#84818E',
        fontFamily:'Roboto-Medium',
        paddingVertical:8,
        fontSize:11
    },
    heading:{
        fontSize:13,
        fontFamily:'Roboto-Medium',
        color:'#000'
    },
discoerycart:{
    display:'flex',
    flexDirection:'row',
    marginBottom:15,
    gap:2,
    shadowColor: 'rgba(1, 1, 1, 1)',
    shadowOffset: {
        width: 0,
        height: 1,
    },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        borderRadius:10,
        backgroundColor:'#fff'
   
},
exploreimg:{
    width:'100%',
    height:hp(17),
    objectFit:'cover',
    borderRadius:10,
},
cardimg:{
    width:wp(30),
    padding:5
},
contenarea:{
    width:wp(60),
    padding:5
    // backgroundColor:'green'
}
})