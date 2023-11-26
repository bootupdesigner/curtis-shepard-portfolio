import { StyleSheet, ScrollView, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Heading from '../components/heading'

import { useMediaQuery } from 'react-responsive'
import '@expo/match-media'
const resume = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return (
        <>
            {isDesktopOrLaptop ? (
                <SafeAreaView>

                    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                        <View>
                            <Heading back={true} />
                        </View>
                        <View style={{ paddingHorizontal: 100, backgroundColor: 'black', }}>

                        </View>
                    </ScrollView>
                </SafeAreaView>) : (
                <SafeAreaView>
                    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                        <View>
                            <Heading back={true} />
                        </View>

                        <View style={{ paddingHorizontal: 100, backgroundColor: 'black', }}>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            )
            }
        </>
    )
}

export default resume

const styles = StyleSheet.create({})