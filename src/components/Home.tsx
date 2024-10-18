import {Image, FlatList, View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import Styles from '../Stylecomponents/Style'
import Header from '../ReuseableComp/Header'
import Selectpackage from './Homeallcomponent/Selectpackage'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Offertrip from './Homeallcomponent/Offertrip'
import Trendingcities from './Homeallcomponent/Trendingcities'
import ExploreIndia from './Homeallcomponent/ExploreIndia'
import ExploreWorld from './Homeallcomponent/ExploreWorld'
import InspirationNextTrip from './Homeallcomponent/InspirationNextTrip'
import DiscoverWeekly from './Homeallcomponent/DiscoverWeekly'
import { useNavigation } from "@react-navigation/native";
export default function Home() {
    const navigate = useNavigation()
 
       
    

  return (
    <>
        <Header baricon  logo />
        <ScrollView style={[Styles.bgwhite]}>
           <Selectpackage />
            <View style={Styles.container}>
                
                <Offertrip  offername={'Offer'} listtag />

                <Trendingcities />
                
               <ExploreIndia />

                <ExploreWorld />

                <InspirationNextTrip />

                <DiscoverWeekly />
            </View>  
            
            <Pressable >
                <Text>adfadf</Text>
            </Pressable>

        </ScrollView>
    </>
  )
}
const internalcss = StyleSheet.create({
   
   
})