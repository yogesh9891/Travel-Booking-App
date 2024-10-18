import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Home from '../components/Home'
import Flightsbooking from '../components/Flightsbooking';
import Searchresultflight from '../components/Searchresultflight';
import FlightDetails from '../components/FlightDetails';


export default function Root() {
    const Stack = createNativeStackNavigator();
    return (
        <>

            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        options={{
                            headerShown: false,
                            gestureDirection: 'horizontal',
                        }}
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: false,
                            gestureDirection: 'horizontal',
                        }}
                        name="Flightsbooking"
                        component={Flightsbooking}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: false,
                            gestureDirection: 'horizontal',
                        }}
                        name="Searchresultflight"
                        component={Searchresultflight}
                    />

                    <Stack.Screen
                        options={{
                            headerShown: false,
                            gestureDirection: 'horizontal',
                        }}
                        name="FlightDetails"
                        component={FlightDetails}
                    />
                    
                </Stack.Navigator>
            </NavigationContainer>
        </>

    )
}