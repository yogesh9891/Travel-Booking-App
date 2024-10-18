import {Image,   FlatList, View, Text,TouchableOpacity, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import Header from '../ReuseableComp/Header'
import Selectpackage from './Homeallcomponent/Selectpackage'
import Styles from '../Stylecomponents/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Offertrip from './Homeallcomponent/Offertrip'
import Bookflight from './Homeallcomponent/Bookflight'
import Trendingcities from './Homeallcomponent/Trendingcities'
import ExploreIndia from './Homeallcomponent/ExploreIndia'
import ExploreWorld from './Homeallcomponent/ExploreWorld'
import DiscoverWeekly from './Homeallcomponent/DiscoverWeekly'
import InspirationNextTrip from './Homeallcomponent/InspirationNextTrip'

export default function Flightsbooking() {
  const [value, setValue] = useState('first');
  const [text, setText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [recentflight, setRecentflight] = useState([
    {
      starttravel: 'New Delhi',
      enddae:'Mumbai',
      travelnumb:'1 Traveller',
      travel:'30 Dec 2023',
    },
    {
      starttravel: 'New Delhi',
      enddae:'Mumbai',
      travelnumb:'1 Traveller',
      travel:'30 Dec 2023',
    },
    {
      starttravel: 'New Delhi',
      enddae:'Mumbai',
      travelnumb:'1 Traveller',
      travel:'30 Dec 2023',
    },
  ]);
  const rendflight = ({item, index}) =>{
    return(
      <>
      
      <View style={internalcss.recentrcart}>
                  <View style={[Styles.spacebetween, {gap:5}]}>
                    <Text style={internalcss.starttravel}>New Delhi</Text>
                    <View style={{width:'50%',}}>
                      <Image source={require('../../assets/img/arrowplan.png')}  style={{width:'100%', height:15, objectFit:'contain'}} />
                    </View>
                    <Text style={internalcss.endtravel}>Mumbai</Text>
                  </View>
                  <View style={Styles.spacebetween}>
                    <Text style={internalcss.travelone}>1 Traveller</Text>
                    <Text style={internalcss.travelone}>30 Dec 2023</Text>
                  </View>
                </View>
      </>
    )
  }
  return (
    <>
          <Header baricon logo />
          <ScrollView style={[Styles.bgwhite, ]}>
            <Selectpackage active='flight'  />
            <View style={Styles.container}>

              <Bookflight />

              <Offertrip offername={'Flights Offers'} />

               <View style={Styles.spacebetween}>
                    <Text style={[Styles.heading, ]}>Recent Search</Text>
                    <Text style={Styles.betweenall}>View all</Text>
                </View>

                <FlatList 
                  data={recentflight}
                  keyExtractor={(item, index) => `${index}`}
                  horizontal
                  renderItem={rendflight}
                contentContainerStyle={{ paddingVertical: 15, }}
                />

              <Trendingcities />

              <ExploreIndia />

              <ExploreWorld />

              <DiscoverWeekly />

              <InspirationNextTrip />




            </View>
          </ScrollView>
        </>
  )
}
const internalcss = StyleSheet.create({
  travelone:{
    fontSize:9,
    color:'#84818E',
    fontFamily:'Roboto-Regular'
  },
  starttravel:{
    width:'25%',
    fontSize:10,
    fontFamily:'Roboto-Regular',
    color:'#000',
  },
  endtravel:{
    width:'25%',
    fontSize:10,
    fontFamily:'Roboto-Regular',
    color:'#000'
  },
  recentrcart:{
    backgroundColor:'#F4F9FF',
    padding:10,
    borderRadius:10,
    width:wp(60),
    marginRight:10
  },
  btnpurpal:{
    backgroundColor:'#351c78',
    borderRadius:10,
  },
  btntext:{
    textAlign:'center',
    color:'#fff',
    padding:13,
    fontFamily:'Roboto-Medium'

  },
  labeltext:{
    color:'#09021C',
    fontFamily:'Roboto-Regular'
  },
  dropdowninput:{
    
    backgroundColor:'#fffbff',
    borderWidth:1,
    borderColor:'#787679',
    borderRadius:5,
    borderStyle:'solid',
    color:'#4d484d',
    height:55,
    fontSize:10
  },
  groupfrom:{
    marginBottom:10
  },
  selecttext:{
    color:'#84818E',
    fontFamily:'Roboto-Regular',
    fontSize:15,
  },
  centerclas:{
  display:'flex', 
  alignItems:'center',
  justifyContent:'center', 
  flexDirection:'row',
},
  

  texflight:{
    color:'#351C78',
    fontFamily:'Roboto-Medium',
    fontSize:13,
  },
  imgfluid:{
    width:wp(5),
    height:wp(5),
    
    objectFit:'contain'
  },
  fromarea:{
    marginTop:20,
    backgroundColor:'#fff',
    // padding:10,
    borderRadius:10,
    marginBottom:15,
    shadowColor: 'rgba(1, 1, 1, 1)',
    shadowOffset: {
        width: 0,
        height: 1,
    },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
  }
})