import { Button, StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { useRouter, useNavigation } from 'expo-router';

import Fontisto from '@expo/vector-icons/Fontisto';
import { Ionicons } from '@expo/vector-icons'; 

const Skill = ({ id, icon, title, color ,dependent}) => {
    const router = useRouter();
    const navigation = useNavigation();

    const navigateToSKill = (skillId) => {
        navigation.navigate('skill', { skillId });
    };

    return (
        <Pressable onPress={() => navigateToSKill(id)} style={styles.body}>
            {dependent === 'Fontisto' ?
                <Fontisto name={icon} size={48} color={color} />
                 : <Ionicons name={icon} size={48} color={color} />
                 }

            <Text onPress={() => navigateToSKill(id)} style={{ textAlign: 'center', color:'gray',fontSize: 18.72, fontWeight: 'bold' }}>{title}</Text>

        </Pressable>
    )
}

export default Skill

const styles = StyleSheet.create({
    body: {
        height: 220,
        elevation: 5,
        borderRadius: 20,
        margin: 10,
        justifyContent: 'space-evenly',
        paddingVertical: 30,
        paddingHorizontal: 10,
        alignItems:'center',
    }
})