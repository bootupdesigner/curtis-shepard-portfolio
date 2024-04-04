import { SafeAreaView, ScrollView, Text, View, Image, Platform, StatusBar } from "react-native";
import { useMediaQuery } from 'react-responsive'
import '@expo/match-media'

import Skill from "../components/skill";
import Heading from "../components/heading";

import ProfileHeading from "../components/profileHeading";
import Footer from "../components/Footer";

import { about, skills } from '../assets/data.js';
import ExperienceBlock from "../components/experienceBlock";
import Form from "../components/Form.js";



export default function Page() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <SafeAreaView>

          <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]} >
            <View>
              <Heading back={false} />
            </View>
            <View style={{ paddingHorizontal: 100, backgroundColor: 'black', }}>

              <ProfileHeading />

              <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange', textAlign: 'center', }}>Web Development Experience</Text>

              {
                about.map((about, index) => (
                  <View key={index}
                    style={{
                      margin: 5,
                    }}>
                    <ExperienceBlock
                      id={about.id}
                      heading={about.heading}
                      paragraph={about.paragraph}
                      images={about.images}
                      button={true}
                      avifImages={about.avifImages}
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
                        dependent={i.dependent} />
                    </View>
                  ))
                }
              </ScrollView>
            </View >
            <Form/>
            <Footer />

          </ScrollView>
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} >
            <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]} >
              <View>
                <Heading back={false} />
              </View>
              <View style={{ paddingHorizontal: 10, backgroundColor: 'black', }}>

                <ProfileHeading />

                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange', textAlign: 'center', }}>Web Development Experience</Text>

                {
                  about.map((aboutData, index) => (
                    <View key={index} style={{ margin: 5 }}>
                      <ExperienceBlock
                        id={aboutData.id}
                        heading={aboutData.heading}
                        paragraph={aboutData.paragraph}
                        images={aboutData.images}
                        button={true}
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
                          color={i.color}
                          icon={i.icon}
                          title={i.title}
                          dependent={i.dependent} />
                      </View>
                    ))
                  }
                </ScrollView>
              </View >
              <Form/>
              <Footer />

            </ScrollView>
          </View>
        </SafeAreaView>
      )
      }

    </ >

  );
}

