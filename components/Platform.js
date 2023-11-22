import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

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
    }

    return (
        <View >
            <Text style={{ fontSize: 18.72, fontWeight: 'bold', }}>{heading}</Text>

            <Text style={{ fontSize: 16 }}>{paragraph}</Text>
            <View style={{ width: '100%', justifyContent: 'center', }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Samples</Text>

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
            <Text>{summary}</Text>
            
        </View>
    )
}


const styles = StyleSheet.create({
})

export default Platform
