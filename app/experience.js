import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, FlatList, ScrollView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { useNavigation } from 'expo-router';
import { useMediaQuery } from 'react-responsive'
import '@expo/match-media'
import { Fontisto } from '@expo/vector-icons';

import { about, skills } from '../assets/data.js';

import Heading from '../components/heading';
import Footer from '../components/Footer.js';
import ExperienceBlock from '../components/experienceBlock';
import Skill from '../components/skill.js';
import ExperienceDefault from '../components/ExperienceDefault.js';

const Item = ({ item, onPress, backgroundColor, textColor, shadowColor, shadowOffset, shadowOpacity, shadowRadius, buttonColor }) => {
    const truncatedParagraph = item.paragraph.substring(0, 180);

    return (
        <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor, shadowColor, shadowOffset, shadowOpacity, shadowRadius, width: '25%', }]}>
            <Fontisto name={item.icon} size={48} color={item.color} />

            <Text style={[styles.title, { color: textColor, marginVertical: 5 }]}>{item.skill}</Text>

            <Text style={{ fontSize: 18.72, fontWeight: 'bold', color: 'orange', }}>Experience: {item.time}</Text>

            <Text style={{ color: textColor }}>{truncatedParagraph}...</Text>

            <TouchableOpacity style={{ padding: 10, borderStyle: 'solid', borderColor: textColor, borderWidth: 1, borderRadius: 25, marginVertical: 5, width: '50%' }}>
                <Text style={{ color: textColor, textAlign: 'center', }}>Learn More</Text>
            </TouchableOpacity>

        </TouchableOpacity>
    )
};


const Experience = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonPress = (buttonId) => {
        setSelectedButton((prevState) => (prevState === buttonId ? null : buttonId));
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const glob = useGlobalSearchParams();
    const experienceId = glob.experienceId;

    const selectedExperience = about.find(about => about.id === experienceId);

    let imageStyle;

    if (experienceId === 'e-commerce-website-design') {
        imageStyle = {
            height: 301,
            width: 169,
            borderRadius: 3,
        };
    } else if (experienceId === 'mobile-app-design') {
        imageStyle = {
            height: 162,
            width: 326,
            borderRadius: 3,
        };
    };
    if (!experienceId) {
        return (
            <SafeAreaView>
                <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, backgroundColor: 'black', }} >
                    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]} >

                        <View>
                            <Heading back={true} />
                        </View>

                        <View style={{ paddingHorizontal: 10, backgroundColor: 'black', }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center', }}>Experience in Web Design & Development</Text>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.contentContainer}>
                            {
                                about.map((i, id) => (
                                    <View key={id}>
                                        <ExperienceDefault
                                            id={i.id}
                                            icon={i.icon}
                                            color={i.color}
                                            skill={i.skill}
                                            onPress={() => handleButtonPress(i.id)}
                                            isSelected={selectedButton === i.id}
                                            paragraph={i.paragraph}
                                            time={i.time}
                                        />

                                    </View>
                                ))
                            }
                        </ScrollView>


                        <Footer />

                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
    return (
        <>
            {isDesktopOrLaptop ? (

                <SafeAreaView>
                    <View>
                        <Heading back={true} />
                    </View>

                    <View style={{ paddingHorizontal: 100, backgroundColor: 'black', }}>
                        <Text style={{ color: 'gray', textAlign: 'center', fontSize: 32, fontWeight: 'bold', }}>{selectedExperience.heading}</Text>

                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', }}>
                            {
                                skills.map((i, id) => (
                                    <View key={id}>

                                        <Skill
                                            id={i.id}
                                            color={i.color}
                                            icon={i.icon}
                                            dependent={i.dependent} />
                                    </View>
                                ))
                            }
                        </View>

                        <ExperienceBlock
                            id={selectedExperience.id}
                            images={selectedExperience.images}
                            paragraph={selectedExperience.paragraph}
                            summary={selectedExperience.summary}
                            exampleWebsite={selectedExperience.exampleWebsite}
                            websiteName={selectedExperience.websiteName}
                            designExperience={selectedExperience.designExperience}
                        />

                    </View>
                    <Footer />
                </SafeAreaView>
            ) : (

                <SafeAreaView>
                    <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} >
                        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                            <View>
                                <Heading back={true} />
                            </View>

                            <View style={{ paddingHorizontal: 10, backgroundColor: 'black', }}>
                                <Text style={{ color: 'gray', textAlign: 'center', fontSize: 32, fontWeight: 'bold', }}>{selectedExperience.heading}</Text>

                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', }}>
                                    {
                                        skills.map((i, id) => (
                                            <View key={id}>

                                                <Skill
                                                    id={i.id}
                                                    color={i.color}
                                                    icon={i.icon}
                                                    dependent={i.dependent} />
                                            </View>
                                        ))
                                    }
                                </View>

                                <ExperienceBlock
                                    id={selectedExperience.id}
                                    images={selectedExperience.images}
                                    paragraph={selectedExperience.paragraph}
                                    summary={selectedExperience.summary}
                                    exampleWebsite={selectedExperience.exampleWebsite}
                                    websiteName={selectedExperience.websiteName}
                                    designExperience={selectedExperience.designExperience}
                                />

                            </View>
                            <Footer />
                        </ScrollView>
                    </View>
                </SafeAreaView>
            )
            }
        </>
    );
};

export default Experience;

const styles = StyleSheet.create({
    contentContainer:{
        alignItems:'center',
        marginVertical:10,
    }
});
