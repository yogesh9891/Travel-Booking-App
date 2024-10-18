import {Image, View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function Header(props: any) {
  return (
    <View style={headerStyle.header}>
        <View>
            {
                props.bckbtn &&
                <Pressable>
                    <Image source={require('../../assets/img/bckbtn.png')} style={headerStyle.bckbtn} />
                </Pressable>
            }
            {
                props.baricon &&
                <Image source={require('../../assets/img/1Burger.png')} style={{width:wp(6), height:wp(6)}} />
            }
        </View>
        <View>
            {
                props.logo &&
                <Image source={require('../../assets/img/logo.png')} style={{width:wp(40), height:wp(10), objectFit:'contain'}}  />
            }
            {     
                props.compontetname &&
                <Text style={headerStyle.compontetname}>{props.compontetnm}</Text>
            }
        </View>
        <View>
            <Image source={require('../../assets/img/1Bell.png')} style={{width:wp(6), height:wp(6)}}   />
        </View>
    </View>
  )
}

const headerStyle = StyleSheet.create({
    compontetname:{
        color:'#fff',
        fontSize:15,
        fontFamily:'Roboto-Medium'
    },
    bckbtn:{
        width:wp(8),
        height:wp(8),
    },
    header:{
        backgroundColor:'#351C78',
        padding:10,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'


    }
})