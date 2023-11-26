import { StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import '@expo/match-media'
import { Ionicons } from '@expo/vector-icons';
import curtis from '../assets/images/curtis.jpg';
import curtisAvif from '../assets/images/curtis.avif';
import { useNavigation } from 'expo-router';


const mission = {
    id: '1',
    heading: 'The Mission',
    paragraph: `Creative website designs bring joy to website and app users across the globe. My goal is to share my creativity with users who need the projects I help to inspire and design. I help project owners meet their marketing and advertising needs through web and mobile app development. I also enjoy giving back to my community through organizing charity events using my project management skills.`,
    image: '',
    summary: ``,
};

const ProfileHeading = ({ name, image, jobTitle, heading, paragraph }) => {
    const navigate = useNavigation();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const makePhoneCall = () => {
        Linking.openURL('tel:+19543489783')
    };

    const sendEmail = () => {
        Linking.openURL('mailto:sheparcurtis2@gmail.com')
    };
    const accessibilityLabelText = `Curtis Shepard, Web Developer`;
    const altText = `Curtis Shepard, Web Developer`;
    return (
        <>
            {isDesktopOrLaptop ? (
                <View style={{ alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10, }}>
                        {/* image and Title, left */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%', padding: 30, }}>
                            <Image source={curtis} alt={altText} srcSet={curtisAvif} accessibilityLabel={accessibilityLabelText} style={{ height: 300, width: 300, borderRadius: 25 }} />
                            <Text style={{ fontSize: 32, color: 'gray', fontWeight: 'bold', }}>Curtis Shepard</Text>

                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange', }}>Web Developer</Text>
                        </View>

                        {/* objective statement and links */}

                        <View style={{ justifyContent: 'center', padding: 30, width: '50%', }}>
                            <View style={{ marginBottom: 3 }}>
                                <Text style={{ fontSize: 18.72, marginVertical: 10, color: 'gray', fontWeight: 'bold', }}>{mission.heading}</Text>
                                <Text style={{ fontSize: 16, color: 'gray', }}>{mission.paragraph}</Text>
                            </View>

                            <Pressable
                                onPress={() => navigate.navigate('curtis-shepard-resume')}
                                accessibilityLabel="View and print Curtis Shepard's resume."
                                style={{ width: '100%', marginVertical: 10, borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 100 }}>
                                <Text style={{
                                    color: 'gray', fontSize: 16, textAlign: 'center',
                                }}>Web Developer Resume</Text>
                            </Pressable>

                            <Pressable accessibilityLabel="Curtis Shepard's, email address shepard curtis the number two at gmail dotcom" onPress={() => sendEmail()} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10, alignItems: 'center', }}>
                                <Ionicons name="mail-outline" size={24} color="gray" />
                                <Text style={{ textAlign: 'left', fontSize: 18, paddingHorizontal: 10, color: 'gray', }}>shepardcurtis2@gmail.com</Text>
                            </Pressable>

                            <Pressable accessibilityLabel="Curtis Shepard's phone number, nine five four three four eight nine seven eight three" onPress={() => makePhoneCall()} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10, }} >
                                <Ionicons name="md-call-outline" size={24} color="gray" />
                                <Text style={{ textAlign: 'left', fontSize: 18, paddingHorizontal: 10, color: 'gray', }}>(954)348-9783</Text>
                            </Pressable>


                            <Pressable accessibilityLabel="Visit Curtis Shepard's Portfolio" onPress={() => router.push('https://curtis-shepard-portfolio.netlify.app')} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10, }} >
                                <Ionicons name="globe-outline" size={24} color="gray" />
                                <Text style={{ textAlign: 'left', paddingHorizontal: 10, fontSize: 18, color: 'gray', }}>Website</Text>
                            </Pressable>
                        </View>
                    </View>

                </View>
            ) : (
                <View style={styles.container}>
                    <View style={{ alignItems: 'center', paddingVertical: 10, }}>

                        <Image source={curtis} style={{ height: 300, width: 300, borderRadius: 25 }} />
                        <Text style={{ fontSize: 32, color: 'gray', fontWeight: 'bold', }}>Curtis Shepard</Text>

                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange', }}>Web Developer</Text>

                        <Pressable accessibilityLabel="Curtis Shepard's, email address shepard curtis the number two at gmail dot com" onPress={() => sendEmail()} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10, alignItems: 'center', }}>
                            <Ionicons name="mail-outline" size={24} color="gray" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 10, color: 'gray', fontSize: 18, }}>shepardcurtis2@gmail.com</Text>
                        </Pressable>


                        <Pressable accessibilityLabel="Curtis Shepard's phone number, nine five four three four eight nine seven eight three" onPress={() => makePhoneCall()} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10, }} >
                            <Ionicons name="md-call-outline" size={24} color="gray" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 10, color: 'gray', fontSize: 18, }}>(954)348-9783</Text>
                        </Pressable>

                        <Pressable accessibilityLabel="Visit Curtis Shepard's Portfolio GitHub" onPress={() => Linking.openURL('https://curtis-shepard-portfolio.netlify.app')} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10, }} >
                            <Ionicons name="globe-outline" size={24} color="gray" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 10, color: 'gray', fontSize: 18, }}>Website</Text>
                        </Pressable>
                    </View>

                    <Text style={{ fontSize: 18.72, marginVertical: 10, color: 'gray', fontWeight: 'bold', }}>{mission.heading}</Text>
                    <Text style={{ marginVertical: 10, fontSize: 16, color: 'gray', }}>{mission.paragraph}</Text>

                    <Pressable
                        onPress={() => navigate.navigate('curtis-shepard-resume')}
                        accessibilityLabel="View and print Curtis Shepard's resume."
                        style={{ width: '100%', marginVertical: 10, borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 100 }}>
                        <Text style={{
                            color: 'gray', fontSize: 16, textAlign: 'center',
                        }}>Web Developer Resume</Text>
                    </Pressable>
                </View>
            )}
        </>
    )
}

export default ProfileHeading

const styles = StyleSheet.create({
    container: {
    }
})