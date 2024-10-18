import {Image, FlatList, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Styles from '../../Stylecomponents/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Trendingcities() {
    const [offerlist, setOfferlist] = useState([
        {
            offercardimg:require('../../../assets/img/offerimg.png'),
            offerheading:'Dubai, United Arab Emirates',
            offerdesing:'Flights from Delhi International Airport',
            offerarivaldate:'7 Jan - 14 Jan (Round trip)',
            offerprice: '9,999.00'
        },
        {
            offercardimg:require('../../../assets/img/offerimg.png'),
            offerheading:'Dubai, United Arab Emirates',
            offerdesing:'Flights from Delhi International Airport',
            offerarivaldate:'7 Jan - 14 Jan (Round trip)',
            offerprice: '9,999.00'
        },
        {
            offercardimg:require('../../../assets/img/offerimg.png'),
            offerheading:'Dubai, United Arab Emirates',
            offerdesing:'Flights from Delhi International Airport',
            offerarivaldate:'7 Jan - 14 Jan (Round trip)',
            offerprice: '9,999.00'
        },
        {
            offercardimg:require('../../../assets/img/offerimg.png'),
            offerheading:'Dubai, United Arab Emirates',
            offerdesing:'Flights from Delhi International Airport',
            offerarivaldate:'7 Jan - 14 Jan (Round trip)',
            offerprice: '9,999.00'
        },
    ]);
    
    const renderoffercard = ({item, index}) =>{
        return(
            <>
             <TouchableOpacity style={internalcss.offercard}>
                    <View style={{position:'relative'}}>
                        <Image source={item.offercardimg} style={internalcss.offerimg} />
                    </View>
                    <View style={internalcss.content_cart}>
                        <Text style={internalcss.offerheading}>{item.offerheading}</Text>
                        <Text style={internalcss.offerdes}>{item.offerdesing}</Text>
                        <Text style={internalcss.offerdes}>{item.offerarivaldate}</Text>
                        <View style={[Styles.d_row, {gap:10, marginTop:2}]}>
                            <Text style={internalcss.startprice}>Starting from</Text>
                            <Text style={internalcss.totalprice}>₹ {item.offerprice}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
  return (
    <>
    <View style={Styles.spacebetween}>
    <Text style={[Styles.heading, ]}>Trending Cities</Text>
    <Text style={Styles.betweenall}>View all</Text>
</View>

<FlatList
    data={offerlist}
    keyExtractor={(item, index) => `${index}`}
    horizontal
    renderItem={renderoffercard}
    contentContainerStyle={{ paddingVertical: 15, }}
/>
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
    totalprice:{
        fontSize:12,
        color:'#219653',
        fontFamily:'Roboto-Bold',
    },
offercard:{
    width:wp(65),
    marginRight:10
},
offerimg:{
    width: '100%',
    height:hp(24),
    objectFit:'cover',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
},
explorecart:{
   position:'relative',
   overflow:'hidden',
   marginBottom:10

},
offerheading:{
    fontSize:12,
    color:'#000',
    fontFamily:'Roboto-Medium',
    marginBottom:5
},
offerdes:{
    fontSize:10,
    marginVertical:1,
    color:'#84818E',
    fontFamily:'Roboto-Regular'

},
startprice:{
    fontSize:11,
    fontFamily:'Roboto-Bold',
    color:'#84818E'
},
})