import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../ReuseableComp/Header'
import Styles from '../Stylecomponents/Style'
import Searchresultflight from './Searchresultflight'
import Showmultipalflight from './Homeallcomponent/Showmultipalflight'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function FlightDetails() {
    return (
        <>
            <Header bckbtn compontetname compontetnm='Flight Details' />
            <ScrollView style={[Styles.bgwhite, Styles.container]}>
                <Showmultipalflight />

                <View style={internalcss.detailscard}>
                    <View style={[Styles.spacebetween, internalcss.headerflight]}>
                        <View style={[Styles.d_row, { gap: 10, alignItems: 'center' }]}>
                            <Image source={require('../../assets/img/logoflight.png')} style={{ width: wp(6), height: wp(6), objectFit: 'cover' }} />
                            <Text style={internalcss.nameflight}>Air India AI947</Text>
                        </View>
                        <Text style={internalcss.flightprice}>₹ 26,490.00</Text>
                    </View>
                    <View style={{marginVertical:10,}}>
                        <Text style={internalcss.heading}>Included Baggage</Text>
                        <Text style={internalcss.textpgr}>The total baggage included in the price</Text>
                    </View>



                    <View style={Styles.spacebetween}>
                        <View style={[Styles.d_row, {width:wp(70), gap:10, alignItems:'center'}]}>
                            <Image source={require('../../assets/img/bagicon3.png')} style={{width:wp(8), height:wp(8)}} />
                            <View>
                                <Text style={internalcss.onepresone}>1 Personal item</Text>
                                <Text style={internalcss.desciprt}>Fits under the seat in front of you</Text>
                            </View>
                        </View>
                        <Text style={internalcss.textlink}>Included</Text>
                    </View>
                    

                </View>
            </ScrollView>

        </>
    )
}


const internalcss = StyleSheet.create({
    textlink:{
        color:'#2F80ED',
        fontFamily: 'Roboto-Medium',
        fontSize:11
    },
    desciprt:{
        color:'#84818E',
        fontSize:9,
        fontFamily: 'Roboto-Regular',
    },
    onepresone:{
        color:'#09021C',
        fontSize:12,
        fontFamily: 'Roboto-Regular',
    },
    textpgr:{
        color:'#84818E',
        fontFamily: 'Roboto-Regular',
        fontSize:10
    },
    heading:{
        color:'#351C78',
        fontFamily: 'Roboto-Medium',
        fontSize:14
    },
    detailscard: {
        marginTop: 10,
        marginHorizontal: 1,
        backgroundColor: '#fff',
        marginBottom: 15,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    headerflight: {
        // paddingHorizontal:10,
        paddingBottom: 5,
        marginVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    nameflight: {
        color: '#09021C',
        fontFamily: 'Roboto-Medium',
        fontSize: 12
    },
    flightprice: {
        color: '#351C78',
        fontFamily: 'Roboto-Medium',
        fontSize: 13
    },
})
