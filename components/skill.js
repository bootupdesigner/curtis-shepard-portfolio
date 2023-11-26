import { StyleSheet, Text, Pressable, } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { Ionicons, Fontisto } from '@expo/vector-icons';

const Skill = ({ id, icon, title, color, dependent }) => {
    const navigation = useNavigation();

    const navigateToSkill = (skillId) => {
        navigation.navigate('skill', { skillId });
    };

    return (
        <Pressable onPress={() => navigateToSkill(id)} style={styles.body}>
            {dependent === 'Fontisto' ?
                <Fontisto name={icon} size={48} color={color} />
                : <Ionicons name={icon} size={48} color={color} />
            }

            {title && (
                <Text onPress={() => navigateToSkill(id)} style={{ textAlign: 'center', color: 'gray', fontSize: 18.72, fontWeight: 'bold' }}>{title}</Text>
            )}
        </Pressable>
    )
}

export default Skill

const styles = StyleSheet.create({
    body: {
        elevation: 5,
        borderRadius: 20,
        justifyContent: 'space-evenly',
        padding:10,
        alignItems: 'center',
    }
})