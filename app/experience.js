import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { useNavigation } from 'expo-router';
import { useMediaQuery } from 'react-responsive';

import { about, skills } from '../assets/data.js';

import Heading from '../components/heading';
import Footer from '../components/Footer.js';
import Platform from '../components/Platform.js';
import Skill from '../components/skill.js';

const Experience = () => {
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
            <View>
                <Text>No skill found with the ID: {experienceId}</Text>
            </View>
        );
    }
    return (
        <>
            {isDesktopOrLaptop ? (

                <SafeAreaView>

                    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
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

                            <Platform
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
                </SafeAreaView>
            ) : (

                <SafeAreaView>

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

                            <Platform
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
                </SafeAreaView>
            )
            }
        </>
    );
};

export default Experience;

const styles = StyleSheet.create({});
