import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SettingsScreen } from './src/containers/SettingsPage'
import { AnimePage } from './src/containers/AnimePage'
import { HomeScreen } from './src/containers/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Home = () => {
    return (
        <NavigationContainer independent>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AnimePage"
                    component={AnimePage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />

                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
