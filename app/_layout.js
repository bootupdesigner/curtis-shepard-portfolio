import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
    return (
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
                name='portfolio/index'
                options={{
                    drawerLabel: "Portfolio",
                    title: "Portfolio",
                    tabBarIcon: () => (
                        <Ionicons name="folder-open" size={32} color="black" />),
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
    );
}