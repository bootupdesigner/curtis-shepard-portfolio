import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

import { useMediaQuery } from 'react-responsive'
import '@expo/match-media'

const Platform = ({

    id,
    heading,
    paragraph,
    images,
    summary,

}) => {
    let imageStyle;

    if (id === 1) {
        imageStyle = {
            height: 301,
            width: 169,
            borderRadius: 3,
        };
    } else if (id === 2) {
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
                    <Text style={{ fontSize: 18.72, fontWeight: 'bold', color: 'white', marginVertical:3,}}>{heading}</Text>

                    <Text style={{ fontSize: 16,marginVertical:3, color: 'white', }}>{paragraph}</Text>
                    <View style={{ width: '100%', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginVertical:3,}}>Gallery</Text>
                        {/* images scroll */}

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            {
                                images.map((image, index) => (
                                    <View key={index} style={{ margin: 10, elevation: 5, marginVertical:3, borderRadius: 3, }}>
                                        <Image
                                            source={image}
                                            style={imageStyle} />

                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                    <Text style={{ fontSize: 16,marginVertical:3, color: 'white', }}>{summary}</Text>
                </View>
            ) : (
                <View >
                    <Text style={{ marginVertical:3,fontSize: 18.72, fontWeight: 'bold', color: 'white', }}>{heading}</Text>

                    <Text style={{ marginVertical:3,fontSize: 16, color: 'white', }}>{paragraph}</Text>
                    <View style={{ width: '100%', justifyContent: 'center', }}>
                        <Text style={{ marginVertical:3,fontSize: 16, fontWeight: 'bold', color: 'white', }}>Gallery</Text>

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
                    </View>
                    <Text style={{ fontSize: 16, color: 'white', }}>{summary}</Text>

                </View >
            )}
        </>

    )
}


const styles = StyleSheet.create({
})

export default Platform
