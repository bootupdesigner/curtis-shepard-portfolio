import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { skills } from '../assets/data.js';
import {Fontisto, Ionicons} from '@expo/vector-icons';
import Heading from '../components/heading';

const Skill = () => {
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

        <ScrollView>
        <Heading back={true} />

        <View style={{ paddingHorizontal: 10, justifyContent: 'space-evenly', alignItems: 'center', flex:1 }}>
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
    </SafeAreaView>
  );
};

export default Skill;

const styles = StyleSheet.create({});
