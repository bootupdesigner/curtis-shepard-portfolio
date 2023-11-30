import { StyleSheet, Linking, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react';

import { useNavigation } from 'expo-router';
import { useMediaQuery } from 'react-responsive';
import '@expo/match-media'

const ExperienceBlock = ({

    id,
    heading,
    paragraph,
    images,
    button,
    summary,
    exampleWebsite,
    websiteName,
    designExperience
}) => {
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


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });


    return (
        <>
            {isDesktopOrLaptop ? (
                <View>
                    {heading &&
                        (
                            <Text style={{ fontSize: 18.72, fontWeight: 'bold', color: 'gray', marginVertical: 10, }}>{heading}</Text>
                        )}

                    {designExperience && (
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10, color: 'gray', }}>{designExperience}</Text>

                    )}
                    {paragraph && (
                        <Text style={{ fontSize: 16, marginVertical: 10, color: 'gray', }}>{paragraph}</Text>
                    )}

                    {images && (
                        <View style={{ width: '100%', justifyContent: 'center', }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray', marginVertical: 10, }}>Gallery</Text>
                            {/* images scroll */}

                            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                {
                                    images.map((image, index) => (
                                        <View key={index} style={{ margin: 10, elevation: 5, borderRadius: 3, }}>
                                            <Image
                                                srcSet={image.avif}
                                                source={image.source}
                                                style={imageStyle} />
                                        </View>
                                    ))
                                }
                            </ScrollView>


                        </View>
                    )}

                    {websiteName && (
                        <Text style={{ color: 'gray', fontSize: 18.72, fontWeight: 'bold', }}>{websiteName}</Text>
                    )}

                    {summary && summary.map((paragraph, index) => (
                        <Text key={index} style={{ fontSize: 16, color: 'gray', paddingVertical: 10 }}>{paragraph}</Text>))
                    }

                    {exampleWebsite && (
                        <Pressable
                            onPress={() => Linking.openURL(exampleWebsite)}
                            style={{ width: '100%', marginVertical: 10, borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 100 }}>

                            <Text style={{ color: 'gray', fontSize: 16, textAlign: 'center', fontWeight: 'bold', }}>
                                Visit {websiteName}
                            </Text>
                        </Pressable>
                    )}

                    {button && (
                        <Pressable
                            onPress={() => navigateToExperience(id)}
                            style={{ width: '100%', marginVertical: 10, borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 100 }}>
                            <Text style={{
                                color: 'gray', fontWeight: 'bold', fontSize: 16, textAlign: 'center',
                            }}>{heading} Experience</Text>
                        </Pressable>
                    )}
                </View>
            ) : (
                <View >
                    {heading &&
                        (
                            <Text style={{ marginVertical: 10, fontSize: 18.72, fontWeight: 'bold', color: 'gray', }}>{heading}</Text>
                        )
                    }

                    {designExperience && (
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10, color: 'gray', }}>{designExperience}</Text>

                    )}

                    {paragraph && (
                        <Text style={{ fontSize: 16, marginVertical: 10, color: 'gray', }}>{paragraph}</Text>
                    )}

                    {images && (
                        <View style={{ width: '100%', justifyContent: 'center', }}>
                            <Text style={{ marginVertical: 10, fontSize: 16, fontWeight: 'bold', color: 'gray', }}>Gallery</Text>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    images.map((image, index) => (
                                        <View key={index} style={{ flexDirection: 'row', margin: 10, elevation: 5, backgroundColor: 'grey', borderRadius: 3, }}>
                                            <Image
                                                source={image.source}
                                                style={imageStyle} />
                                        </View>
                                    ))
                                }
                            </ScrollView>
                        </View>
                    )}

                    {summary && (
                        <Text style={{ fontSize: 16, color: 'gray', paddingVertical: 10 }}>{summary}</Text>
                    )}

                    {exampleWebsite && (
                        <Pressable
                            onPress={() => Linking.openURL(exampleWebsite)}
                            style={{ width: '100%', marginVertical: 10, borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 100 }}>

                            <Text style={{ color: 'gray', fontSize: 16, textAlign: 'center', fontWeight: 'bold', }}>
                                Visit {websiteName}
                            </Text>
                        </Pressable>
                    )}


                    {button && (
                        <Pressable
                            onPress={() => navigateToExperience(id)}
                            style={{ width: '100%', marginVertical: 10, borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 100 }}>
                            <Text style={{
                                color: 'gray', fontWeight: 'bold', fontSize: 16, textAlign: 'center',
                            }}>{heading} Experience</Text>
                        </Pressable>
                    )}

                </View >
            )}
        </>

    )
}


const styles = StyleSheet.create({
})

export default ExperienceBlock
