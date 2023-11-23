import { StyleSheet, Text, View, Pressable, Linking } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { useMediaQuery } from 'react-responsive'
import '@expo/match-media';

const Footer = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const makePhoneCall = () => {
        Linking.openURL('tel:+19543489783')
    };

    const sendEmail = () => {
        Linking.openURL('mailto:sheparcurtis2@gmail.com')
    };

    const openWebsite=()=>{
        Linking.openURL('https://curtis-shepard-portfolio.netlify.app')
    }
    return (
        <>
            {isDesktopOrLaptop ? (
                <View style={{backgroundColor:'black'}}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'grey', borderTopEndRadius:25, borderTopStartRadius:25, paddingBottom:10,}}>
                        <View style={{ paddingHorizontal: 10, width: '50%' }}>
                            <Text style={{ paddingVertical:10, marginVertical: 3, color: 'white', fontWeight: 'bold', fontSize: 18.72, textDecorationColor: 'white', textDecorationStyle: 'double', textDecorationLine: 'underline', }}>Contact</Text>
                            <Pressable onPress={() => sendEmail()} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 3, alignItems: 'center', }}>
                                <Ionicons name="mail-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', fontSize: 16,}}>shepardcurtis2@gmail.com</Text>
                            </Pressable>

                            <Pressable onPress={() => makePhoneCall()} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3, }} >
                                <Ionicons name="md-call-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', fontSize: 16,}}>(954)348-9783</Text>
                            </Pressable>

                            <Pressable onPress={() => openWebsite()} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3, }} >
                                <Ionicons name="globe-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', fontSize: 16,}}>Website</Text>
                            </Pressable>
                        </View>



                        <View style={{ paddingHorizontal: 10, width: '50%' }}>
                            <Text style={{ paddingVertical:10,color: 'white', fontWeight: 'bold', fontSize: 18.72, textDecorationColor: 'white', textDecorationStyle: 'double', textDecorationLine: 'underline', marginVertical: 3, }}>Hours & Location</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginVertical: 3, }}>Hollywood, FL 33023</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginVertical: 3, }}>Mon - Fri</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginVertical: 3, }}>9:00 AM - 7:00 PM</Text>


                        </View>
                    </View>
                    <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 16, textAlign: 'center', paddingVertical: 10 }}>Web App Design by Curtis Shepard</Text>
                </View>
            ) : (
                <View style={{backgroundColor:'black'}}>
                    <View style={{ backgroundColor: 'grey', backgroundColor: 'grey', borderTopEndRadius:25, borderTopStartRadius:25,paddingBottom:10,}}>
                        <View style={{ paddingHorizontal: 10, }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18.72, textDecorationColor: 'white', textDecorationStyle: 'double', textDecorationLine: 'underline',paddingVertical:10, }}>Contact</Text>
                            <Pressable onPress={() => sendEmail()} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 3, alignItems: 'center', }}>
                                <Ionicons name="mail-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, fontSize: 16,color: 'white', }}>shepardcurtis2@gmail.com</Text>
                            </Pressable>

                            <Pressable onPress={() => makePhoneCall()} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3, }} >
                                <Ionicons name="md-call-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', fontSize: 16,}}>(954)348-9783</Text>
                            </Pressable>


                            <Pressable onPress={() => openWebsite()} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3, }} >
                                <Ionicons name="globe-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', fontSize: 16,}}>Website</Text>
                            </Pressable>
                        </View>
                        <View style={{ paddingHorizontal: 10,  }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18.72, textDecorationColor: 'white', textDecorationStyle: 'double', textDecorationLine: 'underline', marginVertical: 3, paddingVertical:10,}}>Hours & Location</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginVertical: 3, }}>Hollywood, FL 33023</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginVertical: 3, }}>Mon - Fri</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginVertical: 3, }}>9:00 AM - 7:00 PM</Text>


                        </View>
                    </View>
                    <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 16, textAlign: 'center', paddingVertical: 10 }}>Web App Design by Curtis Shepard</Text>
                </View>
            )}
        </>
    )
}

export default Footer

const styles = StyleSheet.create({})