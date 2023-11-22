import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, } from "react-native";
import { useMediaQuery } from 'react-responsive'
import '@expo/match-media'
import { useLocalSearchParams, Link, useNavigation } from 'expo-router';

import Skill from "../components/skill";
import Heading from "../components/heading";
import Ecommerce1 from '../assets/images/Ecommerce1.jpeg';
import Ecommerce2 from '../assets/images/Ecommerce2.jpeg';
import Ecommerce3 from '../assets/images/Ecommerce3.jpeg';
import Android1 from '../assets/images/Android1.jpg';
import Android2 from '../assets/images/Android2.jpg';
import Android3 from '../assets/images/Android3.jpg';
import Platform from "../components/Platform";
import ProfileHeading from "../components/profileHeading";

export const skills = [
  {
    id: 'wordpress',
    title: 'WordPress',
    shortDescription: 'E-Commerce Website Designs',
    icon: 'wordpress',
    color: '#096484',
    link: 'wordpress',
    description: `Design online stores and educational websites that are user friendly. Enhance Search Engine Optimization`,
    dependent: 'Fontisto',

  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    shortDescription: 'iOS & Android Development',
    icon: 'react',
    link: 'frontend',
    color: '#61dbfb',
    description: '',
    dependent: 'Fontisto',

  },
  {
    id: 'database',
    title: 'Database',
    shortDescription: 'MongoDB',
    icon: 'mongodb',
    color: '#4db33d',
    link: 'backend',
    description: '',
    dependent: 'Fontisto',
  },
  {
    id: 'ios',
    title: 'iOS',
    shortDescription: 'iOS',
    dependent: 'Ionicons',
    description: 'iOS',
    icon: 'ios-logo-apple-appstore',
    color: '#555555',
  },
  {
    id: 'android',
    title: 'Android',
    shortDescription: 'Android',
    dependent: 'Ionicons',
    description: 'Android',
    icon: 'logo-android',
    color: '#78C257',
  },
  {
    id: 'html',
    title: 'HTML',
    shortDescription: 'HTML',
    dependent: 'Fontisto',
    description: 'HTML',
    icon: 'html5',
    color: 'white',
  },
  {
    id: 'css',
    title: 'CSS',
    shortDescription: 'CSS',
    dependent: 'Fontisto',
    description: 'CSS',
    icon: 'css3',
    color: 'white',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    shortDescription: 'JavaScript',
    dependent: 'Ionicons',
    description: 'JavaScript',
    icon: 'logo-javascript',
    color: 'white',
  },
];


const about = [

  {
    id: 1,
    heading: 'E-Commerce Website Design',
    paragraph: `Creative website designs bring joy to website and app users across the globe. My goal is to share my creativity with users who need the projects I help to inspire and design. I help project owners meet their marketing and advertising needs through web and mobile app development.`,
    images: [Ecommerce1, Ecommerce2, Ecommerce3],
    summary: ``,
  },

  {
    id: 2,
    heading: 'Mobile App Designs',
    paragraph: `Creative website designs bring joy to website and app users across the globe. My goal is to share my creativity with users who need the projects I help to inspire and design. I help project owners meet their marketing and advertising needs through web and mobile app development.`,
    images: [Android1, Android2, Android3],
    summary: ``,
  }
];
export default function Page() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  return (
    <SafeAreaView>
      <View style={{paddingHorizontal:10,backgroundColor:'black',}}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <ProfileHeading/>

          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange', textAlign: 'center', }}>Web Development Experience</Text>

          {
            about.map((about, index) => (
              <View key={index}
                style={{
                  margin: 5,
                }}>
                <Platform
                  id={about.id}
                  heading={about.heading}
                  paragraph={about.paragraph}
                  images={about.images}
                />
              </View>
            ))
          }
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange', textAlign: 'center', }}>Website & App Development Skills</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {
              skills.map((i, id) => (
                <View style={{ flexDirection: 'row' }} key={id}>

                  <Skill
                    id={i.id}
                    image={i.image}
                    color={i.color}
                    icon={i.icon}
                    title={i.title}
                    description={i.description}
                    shortDescription={i.shortDescription}
                    link={i.link}
                    dependent={i.dependent} />
                </View>
              ))
            }
          </ScrollView>

        </ScrollView>
      </View >
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
