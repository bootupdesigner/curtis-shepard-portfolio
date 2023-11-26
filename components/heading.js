import { StyleSheet, Text, View, Pressable,Linking,Platform,StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const menu = [
    {
        id: 'portfolio/index',
        name: 'Portfolio',
    },
    {
        id: 'experience',
        name: 'Experience',
    },
]
const Heading = ({ back }) => {
    const navigate = useNavigation();
    return (
        <>
            <View style={styles.container} >
              

            <View style={{ width: '25%' }}>
                    <Pressable style={{ padding: 10, alignItems: 'center' }}
                        onPress={() => navigate.openDrawer()}>
                        <Ionicons name="menu" size={24} color="gray" />
                    </Pressable>
                </View>

                <View style={{ width: '50%', }}>
                    <Pressable 
                    onPress={()=> Linking.openURL('sms:+19543489783')}
                    style={{ padding: 10,borderWidth:1,borderStyle:'solid',borderColor:'gray',borderRadius:100, }}>

                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'gray', fontSize: 16 }}>Schedule a Interview</Text>
                    </Pressable>
                </View>

                {back && (
                    <View style={{ width: '25%' ,}}>
                        <Pressable style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}
                            onPress={() => navigate.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="gray" />
                            <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 16 }}>Back</Text>
                        </Pressable>
                    </View>
                )}

            </View>
        </>
    )

}

export default Heading

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 10,
            flexDirection: 'row',
             alignItems: 'center', 
             backgroundColor:'black',
             paddingBottom:10
      },
})