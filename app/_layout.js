import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
    return (
       
    <>
    <GestureHandlerRootView style={{ flex: 1 }}>
       < Drawer screenOptions={{
            headerShown: false,
        }}>
            <Drawer.Screen name='index' options={{
                drawerLabel: "Home",
                title: "Web Developer Portfolio",
                tabBarIcon: () => (
                    <Ionicons name="home" size={32} color="black" />
                ),
            }} />
            

            <Drawer.Screen
                name='skill'
                options={{
                    title: 'Skill',
                    drawerLabel: 'Skill'

                }} />

            <Drawer.Screen
                name='experience'
                options={{
                    drawerLabel: 'Experience',
                    title: 'Experience',

                }} />

            <Drawer.Screen
                name='curtis-shepard-resume'
                options={{
                    drawerLabel: 'Resume',
                    title: 'Resume',

                }} />
        </Drawer>
      </GestureHandlerRootView>
      <Toast />
      </>
    );
}