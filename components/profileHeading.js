import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import '@expo/match-media'
import { Ionicons } from '@expo/vector-icons';
import {Link} from 'expo-router';
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

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return (
        <>
            {isDesktopOrLaptop ? (<View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%', padding: 30, }}>
                        <Image source={curtis} style={{ height: 300, width: 300, borderRadius: 25 }} />
                        <Text style={{ fontSize: 32, fontWeight: 'bold', }}>Curtis Shepard</Text>

                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange', }}>Web Developer</Text>
                    </View>

                    <View style={{ justifyContent: 'space-evenly', padding: 30, width: '50%', }}>
                        <View>
                            <Text style={{ fontSize: 18.72, fontWeight: 'bold', }}>{mission.heading}</Text>
                            <Text style={{ fontSize: 16 }}>{mission.paragraph}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                            <Ionicons name="mail-outline" size={24} color="black" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 5 }}>shepardcurtis2@gmail.com</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                            <Ionicons name="md-call-outline" size={24} color="black" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 5 }}>(954)348-9783</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                            <Ionicons name="globe-outline" size={24} color="black" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 5 }}>https://curtis-shepard-portfolio.netlify.app/</Text>
                        </View>

                    </View>
                </View>

            </View>) : (
                <View style={styles.container}>
                    <Image source={curtis} style={{ height: 300, width: 300, borderRadius: 25 }} />
                    <Text style={{ fontSize: 32, fontWeight: 'bold', }}>Curtis Shepard</Text>

                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange', }}>Web Developer</Text>
                    
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                            <Ionicons name="mail-outline" size={24} color="black" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 5 }}>shepardcurtis2@gmail.com</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                            <Ionicons name="md-call-outline" size={24} color="black" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 5 }}>(954)348-9783</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                        <Link href='https://curtis-shepard-portfolio.netlify.app' >
                            <Ionicons name="globe-outline" size={24} color="black" />
                            <Text style={{ textAlign: 'left', paddingHorizontal: 5 }}>Website</Text>
                            </Link>
                        </View>

                    <Text style={{ fontSize: 18.72, fontWeight: 'bold', }}>{mission.heading}</Text>
                    <Text style={{ fontSize: 16 }}>{mission.paragraph}</Text>

                </View>)}
        </>
    )
}

export default ProfileHeading

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})