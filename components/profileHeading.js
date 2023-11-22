import { StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import '@expo/match-media'
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import curtis from '../assets/images/curtis.jpg';


const mission = {
    id: '1',
    heading: 'The Mission',
    paragraph: `Creative website designs bring joy to website and app users across the globe. My goal is to share my creativity with users who need the projects I help to inspire and design. I help project owners meet their marketing and advertising needs through web and mobile app development. I also enjoy giving back to my community through organizing charity events using my project management skills.`,
    image: '',
    summary: ``,
};

const ProfileHeading = ({ name, image, jobTitle, heading, paragraph }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-device-width: 1224px)' });

    const makePhoneCall = () => {
        Linking.openURL('tel:+19543489783')
    };

    const sendEmail = () => {
        Linking.openURL('mailto:sheparcurtis2@gmail.com')
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });


    return (
        <>
            {isDesktopOrLaptop ? (
                <View style={{ alignItems: 'center',  }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        {/* image and Title, left */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%', padding: 30, }}>
                            <Image source={curtis} style={{ height: 300, width: 300, borderRadius: 25 }} />
                            <Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold', }}>Curtis Shepard</Text>

                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange', }}>Web Developer</Text>
                        </View>

                        {/* objective statement and links */}

                        <View style={{ justifyContent: 'center', padding: 30, width: '50%', }}>
                            <View style={{ marginBottom: 3 }}>
                                <Text style={{ fontSize: 18.72, color: 'white', fontWeight: 'bold', }}>{mission.heading}</Text>
                                <Text style={{ fontSize: 16, color: 'white', }}>{mission.paragraph}</Text>
                            </View>

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
                    </View>

                </View>
            ) : (
                <View style={styles.container}>
                    <View style={{ alignItems: 'center', }}>

                        <Image source={curtis} style={{ height: 300, width: 300, borderRadius: 25 }} />
                        <Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold', }}>Curtis Shepard</Text>

                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange', }}>Web Developer</Text>

                        <Pressable onPress={() => sendEmail()} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 3, alignItems: 'center', }}>
                            <Ionicons name="mail-outline" size={24} color="white" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', }}>shepardcurtis2@gmail.com</Text>
                        </Pressable>


                        <Pressable onPress={() => makePhoneCall()} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3, }} >
                            <Ionicons name="md-call-outline" size={24} color="white" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', }}>(954)348-9783</Text>
                        </Pressable>

                        <Pressable onPress={() => Linking.openURL('https://curtis-shepard-portfolio.netlify.app')} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3, }} >
                            <Ionicons name="globe-outline" size={24} color="white" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 5, color: 'white', }}>Website</Text>
                        </Pressable>
                    </View>

                    <Text style={{ fontSize: 18.72, color: 'white', fontWeight: 'bold', }}>{mission.heading}</Text>
                    <Text style={{ fontSize: 16, color: 'white', }}>{mission.paragraph}</Text>

                </View>)}
        </>
    )
}

export default ProfileHeading

const styles = StyleSheet.create({
    container: {
    }
})