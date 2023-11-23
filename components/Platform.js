import { StyleSheet, Text, View, Image, ScrollView, Linking, Pressable } from 'react-native'
import React from 'react';

import { useRouter, useNavigation } from 'expo-router';
import { useMediaQuery } from 'react-responsive'
import '@expo/match-media'

const Platform = ({

    id,
    heading,
    paragraph,
    images,


}) => {
    const router = useRouter();
    const navigation = useNavigation();

    const navigateToExperience = (experienceId) => {
        navigation.navigate('experience', { experienceId });
    };


    let imageStyle;

    if (id === 'e-commerce-website-design') {
        imageStyle = {
            height: 301,
            width: 169,
            borderRadius: 3,
        };
    } else if (id === 'mobile-app-design') {
        imageStyle = {
            height: 162,
            width: 326,
            borderRadius: 3,
        };
    };

    const isTabletOrMobile = useMediaQuery({ query: '(max-device-width: 1224px)' });

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });


    return (
        <>
            {isDesktopOrLaptop ? (
                <View>
                    <Text style={{ fontSize: 18.72, fontWeight: 'bold', color: 'white', marginVertical: 3, }}>{heading}</Text>

                    <Text style={{ fontSize: 16, marginVertical: 3, color: 'white', }}>{paragraph}</Text>
                    <View style={{ width: '100%', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginVertical: 3, }}>Gallery</Text>
                        {/* images scroll */}

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            {
                                images.map((image, index) => (
                                    <View key={index} style={{ margin: 10, elevation: 5, marginVertical: 3, borderRadius: 3, }}>
                                        <Image
                                            source={image}
                                            style={imageStyle} />

                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            ) : (
                <View >
                    <Text style={{ marginVertical: 3, fontSize: 18.72, fontWeight: 'bold', color: 'white', }}>{heading}</Text>

                    <Text style={{ marginVertical: 3, fontSize: 16, color: 'white', }}>{paragraph}</Text>
                    <View style={{ width: '100%', justifyContent: 'center', }}>
                        <Text style={{ marginVertical: 3, fontSize: 16, fontWeight: 'bold', color: 'white', }}>Gallery</Text>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                images.map((image, index) => (
                                    <View key={index} style={{ flexDirection: 'row', margin: 10, elevation: 5, backgroundColor: 'grey', borderRadius: 3, }}>
                                        <Image
                                            source={image}
                                            style={imageStyle} />

                                    </View>
                                ))
                            }
                        </ScrollView>
                        <Pressable
                            onPress={() => navigateToExperience(id)}
                            style={{ width: '100%', marginVertical: 3, borderColor: 'white', borderWidth: 1, padding: 10, borderRadius: 100 }}>
                            <Text style={{
                                color: 'white', fontSize: 16, textAlign: 'center',
                            }}>{heading} Experience</Text>
                        </Pressable>
                    </View>

                </View >
            )}
        </>

    )
}


const styles = StyleSheet.create({
})

export default Platform
