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

    return (
        <>
            {isDesktopOrLaptop ? (
                <View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'grey', }}>
                        <View style={{ paddingHorizontal: 10, width: '50%' }}>
                            <Text style={{ marginVertical: 3, color: 'white', fontWeight: 'bold', fontSize: 18.72, textDecorationColor: 'white', textDecorationStyle: 'double', textDecorationLine: 'underline', }}>Contact</Text>
                            <Pressable onPress={() => sendEmail()} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 3, alignItems: 'center', }}>
                                <Ionicons name="mail-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', }}>shepardcurtis2@gmail.com</Text>
                            </Pressable>

                            <Pressable onPress={() => makePhoneCall()} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3, }} >
                                <Ionicons name="md-call-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', }}>(954)348-9783</Text>
                            </Pressable>

                            <Pressable onPress={() => router.push('https://curtis-shepard-portfolio.netlify.app')} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3, }} >
                                <Ionicons name="globe-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', }}>Website</Text>
                            </Pressable>
                        </View>



                        <View style={{ paddingHorizontal: 10, width: '50%' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18.72, textDecorationColor: 'white', textDecorationStyle: 'double', textDecorationLine: 'underline', marginVertical: 3, }}>Hours & Location</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginVertical: 3, }}>Hollywood, FL 33023</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginVertical: 3, }}>Mon - Fri</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginVertical: 3, }}>9:00 AM - 7:00 PM</Text>


                        </View>
                    </View>
                    <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 16, textAlign: 'center', paddingVertical: 10 }}>Web App Design by Curtis Shepard</Text>
                </View>
            ) : (
                <View>
                    <View style={{ backgroundColor: 'grey', }}>
                        <View style={{ paddingHorizontal: 10, }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18.72, textDecorationColor: 'white', textDecorationStyle: 'double', textDecorationLine: 'underline', }}>Contact</Text>
                            <Pressable onPress={() => sendEmail()} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 3, alignItems: 'center', }}>
                                <Ionicons name="mail-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', }}>shepardcurtis2@gmail.com</Text>
                            </Pressable>

                            <Pressable onPress={() => makePhoneCall()} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3, }} >
                                <Ionicons name="md-call-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', }}>(954)348-9783</Text>
                            </Pressable>


                            <Pressable onPress={() => router.push('https://curtis-shepard-portfolio.netlify.app')} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3, }} >
                                <Ionicons name="globe-outline" size={24} color="white" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', }}>Website</Text>
                            </Pressable>
                        </View>
                        <View style={{ paddingHorizontal: 10,  }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18.72, textDecorationColor: 'white', textDecorationStyle: 'double', textDecorationLine: 'underline', marginVertical: 3, }}>Hours & Location</Text>
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