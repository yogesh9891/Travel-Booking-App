import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList,  } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from '../../Stylecomponents/Style';

export default function Selectdate() {

    const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date:any) => {
    setSelectedDate(date);

  };
const [selectdate, setselectdate] = useState([
  {
    date:1,
    week:'sun',
  },
  {
    date:2,
    week:'mon',
  },
  {
    date:3,
    week:'Tue',
  },
  {
    date:4,
    week:'Wed',
  },
  {
    date:5,
    week:'Thu',
  },
  {
    date:6,
    week:'Fri',
  },
  {
    date:7,
    week:'Sat',
  },
]);


const renderselectdate = ({item,index}) =>{
  return(
    <>
     {/* <TouchableOpacity style={internalcss.dateselect}>
        <Text style={internalcss.calenderdate}>23</Text>
        <Text style={internalcss.calenderweek}>Mon</Text>
      </TouchableOpacity> */}
       <TouchableOpacity
        onPress={() => handleDateSelect(item.date)}
        style={[
          internalcss.dateselect,{ backgroundColor: item.date === selectedDate ? '#fff' : 'transparent' },
        ]}
      >
        <Text style={[internalcss.calenderdate,{color:item.date === selectedDate ? '#351c78' : '#fff' }]}>{item.date}</Text>
        <Text style={[internalcss.calenderweek, {color:item.date === selectedDate ? '#351c78' : '#fff' }]}>{item.week}</Text>
      </TouchableOpacity>
    </>
  )
}



  return (
   <>
   
   <View style={internalcss.flightheader}>
        <View style={internalcss.textcenter}><Image source={require('../../../assets/img/goflight.png')} style={internalcss.flighticon} /></View>
      <View style={[Styles.spacebetween, {marginTop:12}]}>
        <View>
          <Text style={internalcss.desp}>DEL</Text>
          <Text style={internalcss.distanctname}>New Delhi</Text>
        </View>
        <Text style={internalcss.searavivble}>1 Seat Economy</Text>
        <View>
          <Text style={internalcss.desp}>UAE</Text>
          <Text style={internalcss.distanctname}>Dubai</Text>
        </View>
      </View>

      <View style={[Styles.spacebetween, {marginTop:20,}]}>
          <View style={internalcss.calenderbox}>
              <Image source={require('../../../assets/img/Calendar.png')} style={internalcss.celender} />
          </View>
          <Text style={internalcss.linevertal}></Text>
            <View style={internalcss.dateselectcart}>
              <FlatList 
                data={selectdate}
                renderItem={renderselectdate}
                keyExtractor={(item, index) => index.toString()}
                horizontal
              
              />                
            </View>
      </View>

    </View>
   </>


  )
}


const internalcss = StyleSheet.create({
    calenderdate:{
      color:'#fff',
      fontFamily:'Roboto-Medium',
      fontSize:12,
    },
    calenderweek:{
      color:'#fff',
      fontFamily:'Roboto-Medium',
      fontSize:12,
    },
    dateselect:{
      width:wp(15),
      borderWidth:1,
      borderColor:'#fff',
      borderStyle:'solid',
      paddingVertical:3,
      paddingHorizontal:13,
      borderRadius:5,
      textAlign:'center',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      marginRight:10,
    },
    dateselectcart:{
      width:wp(78),
      // backgroundColor:'#ccc',
      // height:20,
    },
    linevertal:{
      width:1,
      height:40,
      backgroundColor:'#9a8dbb'
    },
    calenderbox:{
      borderWidth:1,
      borderColor:'#fff',
      borderStyle:'solid',
      padding:5,
      borderRadius:5
    },
    celender:{
      width:wp(8),
      height:wp(8)
    },
    flightheader:{
      backgroundColor:'#351c78',
      paddingVertical:20,
      paddingHorizontal:10
  
  
    },
    searavivble:{
      color:'#fff',
      fontSize:11,
    },
    distanctname:{
      fontSize:11,
      fontFamily:'Roboto-Regular',
      color:'#fff'
    },
    flighticon:{
      width:wp(40),
      height:wp(12),
      objectFit:'cover'
    },
    textcenter:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      // backgroundColor:'red'
    },
    desp:{
      fontSize:13,
      fontFamily:'Roboto-Medium',
      color:'#fff'
    }
  })