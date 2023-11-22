import { StyleSheet, Text, ScrollView, View, Pressable, Platform, StatusBar, } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const menu = [
    {
        id: 'portfolio/index',
        name: 'Portfolio',
    },
    {
        id: 'experience',
        name: 'Experience',
    },
]
const Heading = ({back}) => {
    const navigate = useNavigation();
    return (
        <Pressable style={{ flexDirection: 'row', padding: 10, alignContent: 'center' }}
            onPress={() => navigate.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontWeight:'bold',fontSize: 16}}>Back</Text>
        </Pressable>
    )

}

export default Heading

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 0,
    }
})