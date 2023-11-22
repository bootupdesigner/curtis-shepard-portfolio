import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import Experience from './experience';

export default function Layout() {
    return (
        < Drawer >
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
                name='experience'
                options={{
                    drawerLabel: 'Experience',
                    presentation: 'modal',
                    title: 'Experience',
                    showDrawerLabel: false,

                }} />
        </Drawer>
    );
}