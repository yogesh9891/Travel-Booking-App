import {Image,   FlatList, View, Text,TouchableOpacity, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'


import Styles from '../../Stylecomponents/Style';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RadioButton, TextInput , Checkbox , IconButton } from 'react-native-paper';
import { AntDesign } from 'react-native-vector-icons/AntDesign'; // Import the icon from the desired library
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function Bookflight() {
    const navigate = useNavigation()
    const [value, setValue] = useState('first');
    const [text, setText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <View style={internalcss.fromarea}>
                <View style={[Styles.d_row, {gap:10, alignItems:'center', padding:10, borderBottomWidth:0.5, borderBottomColor:'#ceccd1'}]}><Image source={require('../../../assets/img/airplane.png')} style={internalcss.imgfluid} /><Text style={internalcss.texflight}>Flight Booking</Text></View>
                <View style={{padding:10}}>
                  <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                  <View style={[Styles.spacebetween, {borderBottomWidth:0.5, borderBottomColor:'#ceccd1', paddingBottom:10, marginBottom:15}]}>
                    <View style={internalcss.centerclas}>
                      <RadioButton value="first"  />
                      <Text style={internalcss.selecttext}>One way</Text>
                    </View>
                    <View style={internalcss.centerclas}>
                      <RadioButton value="second" />
                      <Text style={internalcss.selecttext}>Round trip</Text>
                    </View>
                    <View style={internalcss.centerclas}>
                      <RadioButton value="theerd" />
                      <Text style={internalcss.selecttext}>Multi-city</Text>
                    </View>
                  </View>
                </RadioButton.Group>
                <View>
                      <TextInput mode="outlined" label="From" style={internalcss.groupfrom} />                  
                      <TextInput mode="outlined" label="To" style={internalcss.groupfrom} /> 
                      <TextInput mode="outlined" label="Departure"  style={internalcss.groupfrom} right={<TextInput.Icon icon="calendar" />}/>     
                </View>

                <View style={internalcss.dropdowninput}>
                    <Picker
                      selectedValue={selectedLanguage}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                      }
                      style={[internalcss.groupfrom, {fontSize:10, height:30, display:'flex', alignItems:'center', justifyContent:'center'}]}
                      >
                      <Picker.Item label="Travellers & Class" value="Travellers & Class" />
                      <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center', }}>
                  <Checkbox.Item  status="checked" label='' style={{width:19, marginLeft:-20  }} /> 
                  <Text style={internalcss.labeltext}>Direct flights only</Text>
                </View>
                <Pressable onPress={()=> navigate.navigate('Searchresultflight')} style={internalcss.btnpurpal}>
                  <Text style={internalcss.btntext}>Search flight</Text>
                </Pressable>
              </View>
              </View>
    </View>
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
      width:'70%',
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