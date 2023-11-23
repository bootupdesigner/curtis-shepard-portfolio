import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, Image, ScrollView } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { about} from './index';
import Fontisto from '@expo/vector-icons/Fontisto';
import Heading from '../components/heading';
import ecommerce2 from '../assets/images/Ecommerce1.jpeg'

const Experience = () => {
  const glob = useGlobalSearchParams();
  const experienceId = glob.experienceId;

  const selectedExperience = about.find(about => about.id === experienceId);

  if (!selectedExperience) {
    return (
      <View>
        <Text>No skill found with the ID: {experienceId}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>

      <View >
        <ScrollView>
        <Heading back={Platform.OS === 'ios' ? true : false} />

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Experience;

const styles = StyleSheet.create({});
