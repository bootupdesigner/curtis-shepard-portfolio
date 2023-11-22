import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, Image, ScrollView } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { skills } from './index';
import Fontisto from '@expo/vector-icons/Fontisto';
import Heading from '../components/heading';
import ecommerce2 from '../assets/images/Ecommerce1.jpeg'

const Experience = () => {
  const glob = useGlobalSearchParams();
  const skillId = glob.skillId;

  const selectedSkill = skills.find(skill => skill.id === skillId);

  if (!selectedSkill) {
    return (
      <View>
        <Text>No skill found with the ID: {skillId}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>

      <View >
        <ScrollView>
        <Heading back={Platform.OS === 'ios' ? true : false} />

        <View style={{ paddingHorizontal: 10, justifyContent: 'space-evenly', alignItems: 'center', flex:1 }}>
          <Image source={ecommerce2} style={{height:200,width:200,}}/>
          <Text style={{ fontWeight: 'bold', fontSize: 32, }}>{selectedSkill.shortDescription}</Text>
          {selectedSkill.dependent === 'Fontisto' ?
            <Fontisto name={selectedSkill.icon} size={48} color={selectedSkill.color} />
            : <Ionicons name={selectedSkill.icon} size={48} color={selectedSkill.color} />
          }

          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'center', }}>Experience</Text>

            <Text style={{ fontWeight: 'bold', fontSize: 18.72, alignSelf: 'flex-start', }}>{selectedSkill.title}</Text>

            <Text>{selectedSkill.description}</Text>
          </View>

        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Experience;

const styles = StyleSheet.create({});
