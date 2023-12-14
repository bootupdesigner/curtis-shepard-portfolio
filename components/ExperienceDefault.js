import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const ExperienceDefault = (
    {
        id,
        title,
        onPress,
        icon,
        color,
        skill,
        isSelected,
        paragraph,
        time
    }
) => {


    const navigation = useNavigation();

    const navigateToExperience = (experienceId) => {
        navigation.navigate('experience', { experienceId });
    };

    const truncatedParagraph = paragraph.substring(0, 180);


    const backgroundColor = isSelected ? '#ffffff10' : 'black';
    const textColor = isSelected ? 'gray' : 'white';
    const shadowColor = isSelected ? '#ffa500' : '#000000';
    const shadowOffset = isSelected ? { width: -2, height: 6 } : { width: 0, height: 0 };
    const shadowOpacity = isSelected ? 0.2 : 0;
    const shadowRadius = isSelected ? 3 : 0;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ backgroundColor: backgroundColor, borderColor: 'gray', borderWidth: 1, borderRadius: 25, padding: 20, marginHorizontal: 10, alignItems: 'center', }}>
            <Fontisto name={icon} size={48} color={color} />
            <Text style={[styles.title, { color: textColor, marginVertical: 5 }]}>{skill}</Text>

            <View>
                <Text style={{ fontSize: 18.72, fontWeight: 'bold', color: 'orange', }}>Experience: {time}</Text>

                <Text style={{ color: textColor, width: 250 }}>{truncatedParagraph}...</Text>
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => navigateToExperience(id)}
                    style={{ padding: 10, borderStyle: 'solid', borderColor: textColor, borderWidth: 1, borderRadius: 25, marginVertical: 5, }}>
                    <Text style={{ color: textColor, textAlign: 'center', }}>Learn More</Text>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    )
}

export default ExperienceDefault

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },

})