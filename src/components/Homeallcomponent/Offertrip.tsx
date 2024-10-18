import {Image, FlatList, View, Text,TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Styles from '../../Stylecomponents/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Offertrip(props: any) {
    const [selectoffer, setselectoffer] = useState();

    const handelclick = (index:any) =>{
        setselectoffer(index)
    }


    const [trandigcard, setTrandigcard] = useState([
        {
            trandingimg:require('../../../assets/img/trandig_img.png'),
            offerlist:'Offer ends in 31 Dec 23',
            trandingheading:'Grab Flat 10% OFF* on Domestic Flights',
            trandigcontent:'Book with Credit Card & fly away to a soomthing destination for a break.',
        },
        {
            trandingimg:require('../../../assets/img/trandig_img1.png'),
            offerlist:'Offer ends in 31 Dec 23',
            trandingheading:'Grab Flat 10% OFF* on Domestic Flights',
            trandigcontent:'Book with Credit Card & fly away to a soomthing destination for a break.',
        },
        {
            trandingimg:require('../../../assets/img/trandig_img.png'),
            offerlist:'Offer ends in 31 Dec 23',
            trandingheading:'Grab Flat 10% OFF* on Domestic Flights',
            trandigcontent:'Book with Credit Card & fly away to a soomthing destination for a break.',
        },
        {
            trandingimg:require('../../../assets/img/trandig_img.png'),
            offerlist:'Offer ends in 31 Dec 23',
            trandingheading:'Grab Flat 10% OFF* on Domestic Flights',
            trandigcontent:'Book with Credit Card & fly away to a soomthing destination for a break.',
        },
        {
            trandingimg:require('../../../assets/img/trandig_img.png'),
            offerlist:'Offer ends in 31 Dec 23',
            trandingheading:'Grab Flat 10% OFF* on Domestic Flights',
            trandigcontent:'Book with Credit Card & fly away to a soomthing destination for a break.',
        },
    ]);

    const rendertrandigcart = ({item, index}) =>{
        return(
            <>
             <TouchableOpacity style={internalcss.trandicard}>
                    <View style={{position:'relative'}}>
                        <Image source={item.trandingimg} style={internalcss.imgtranding} />
                        <Text style={internalcss.offerlist}>{item.offerlist}</Text>
                    </View>
                    <View style={internalcss.content_cart}>
                        <Text style={internalcss.trandinghead}>{item.trandingheading}</Text>
                        <Text style={internalcss.trandigdescpir}>{item.trandigcontent}</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }









  return (
    <>
    <Text style={[Styles.heading,]}>{props.offername}</Text>
    {
        props.listtag &&
    <View style={internalcss.flexrow}>
        <Text onPress={()=> handelclick('Trending')} style={ selectoffer ===  'Trending' ?  internalcss.activetext  :   internalcss.textmain}>Trending</Text>
        <Text onPress={()=> handelclick('Flights')} style={ selectoffer ===  'Flights' ?  internalcss.activetext  :   internalcss.textmain}>Flights</Text>
        <Text onPress={()=> handelclick('Hotels')} style={ selectoffer ===  'Hotels' ?  internalcss.activetext  :   internalcss.textmain}>Hotels</Text>
        <Text  onPress={()=> handelclick('Holidays')} style={ selectoffer ===  'Holidays' ?  internalcss.activetext  :   internalcss.textmain}>Holidays</Text>
    </View>
    }

    

    {/* ----------------------tranding flatlist------------------- */}
    {/* ----------------------tranding flatlist------------------- */}
    <FlatList
        data={trandigcard}
        keyExtractor={(item, index) => `${index}`}
        horizontal
        renderItem={rendertrandigcart}
        contentContainerStyle={{ paddingVertical: 15, }}
        />
        </>
  )
}
const internalcss = StyleSheet.create({
    
    trandinghead:{
        fontSize:10,
        color:'#000',
        fontFamily:'Roboto-Medium',
        marginBottom:5
    },
    trandigdescpir:{
        color:'#84818E',
        fontSize:9,
        fontFamily:'Roboto-Regular'
    },
    trandicard:{
        width:wp(42),
        marginRight:10,
        

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
    activetext:{
        color:'#EBB423',
        fontFamily:'Roboto-Regular',
        fontSize:16,
        borderBottomColor:'#EBB423',
        borderBottomWidth:1,
        paddingBottom:2
    },
    imgtranding:{
        width: '100%',
        height:hp(17),
        objectFit:'cover',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    offerlist:{
        position:'absolute',
        bottom:0,
        paddingHorizontal:5,
        paddingVertical:10,
        backgroundColor:'rgba(0,0,0,0.5)',
        width:'100%',
        color:'#ffff',
        fontFamily:'Roboto-Medium',
        textAlign:'center',
        fontSize:9
    },
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
})