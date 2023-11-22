import { Button, StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { useRouter, useNavigation } from 'expo-router';

import Fontisto from '@expo/vector-icons/Fontisto';
import { Ionicons } from '@expo/vector-icons'; 

const Skill = ({ id, icon, title, description, shortDescription, color ,dependent}) => {
    const router = useRouter();
    const navigation = useNavigation();

    const navigateToExperience = (skillId) => {
        navigation.navigate('experience', { skillId });
    };

    return (
        <Pressable onPress={() => navigateToExperience(id)} style={styles.body}>
            {dependent === 'Fontisto' ?
                <Fontisto name={icon} size={48} color={color} />
                 : <Ionicons name={icon} size={48} color={color} />
                 }

            <Text onPress={() => navigateToExperience(id)} style={{ textAlign: 'center', color:'white',fontSize: 18.72, fontWeight: 'bold' }}>{title}</Text>

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