import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useMediaQuery } from 'react-responsive';
import '@expo/match-media';

import { skills } from '../assets/data.js';

import Heading from '../components/heading';
import Footer from '../components/Footer.js';

const Skill = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

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
   <>
   {isDesktopOrLaptop ? (
     <SafeAreaView>

     <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
       <View>
         <Heading back={true} />
       </View>

       <View style={{ paddingHorizontal: 100, backgroundColor: 'black', }}>

         <Text style={{ fontWeight: 'bold',paddingVertical:10, fontSize: 32, color: 'gray', textAlign: 'center', }}>{selectedSkill.shortDescription}</Text>

         {selectedSkill.dependent === 'Fontisto' ? (
           <View style={{ alignItems: 'center', paddingVertical:10,}}>
             <Fontisto name={selectedSkill.icon} size={48} color={selectedSkill.color} />
           </View>
         ) : (
           <View style={{ alignItems: 'center', paddingVertical:10,}}>
             <Ionicons name={selectedSkill.icon} size={48} color={selectedSkill.color} />
           </View>
         )
         }

         <View>
           <Text style={{ fontWeight: 'bold', fontSize: 24, paddingVertical:10,color: 'gray', textAlign: 'center', }}>{selectedSkill.skillName}</Text>

           <Text style={{ fontWeight: 'bold', paddingVertical:10,fontSize: 18.72, color: 'gray', alignSelf: 'flex-start', }}>{selectedSkill.title}</Text>

           <Text style={{ color: 'gray', paddingVertical:10,fontSize: 16, }}>{selectedSkill.description}</Text>
         </View>

       </View>
       <Footer />
     </ScrollView>
   </SafeAreaView>
   ):(
    <SafeAreaView>

    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
      <View>
        <Heading back={true} />
      </View>

      <View style={{ paddingHorizontal: 10, backgroundColor: 'black', }}>

        <Text style={{ fontWeight: 'bold',paddingVertical:10, fontSize: 32, color: 'gray', textAlign: 'center', }}>{selectedSkill.shortDescription}</Text>

        {selectedSkill.dependent === 'Fontisto' ? (
          <View style={{ alignItems: 'center', paddingVertical:10,}}>
            <Fontisto name={selectedSkill.icon} size={48} color={selectedSkill.color} />
          </View>
        ) : (
          <View style={{ alignItems: 'center', paddingVertical:10,}}>
            <Ionicons name={selectedSkill.icon} size={48} color={selectedSkill.color} />
          </View>
        )
        }

        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 24, paddingVertical:10,color: 'gray', textAlign: 'center', }}>{selectedSkill.skillName}</Text>

          <Text style={{ fontWeight: 'bold', paddingVertical:10,fontSize: 18.72, color: 'gray', alignSelf: 'flex-start', }}>{selectedSkill.title}</Text>

          <Text style={{ color: 'gray', paddingVertical:10,fontSize: 16, }}>{selectedSkill.description}</Text>
        </View>

      </View>
      <Footer />
    </ScrollView>
  </SafeAreaView>
   )}
   </>
  );
};

export default Skill;

const styles = StyleSheet.create({});
