import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import color from './constants/color';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<SafeAreaView style={styles.container}>
					<NavigationContainer>
						<Tab.Navigator>
							<Tab.Screen name='Home' options={{ headerShown: false }} component={() => <Text style={{ flex: 1, backgroundColor: 'red' }}>Home</Text>} />
							<Tab.Screen name='Settings' options={{ headerShown: false }} component={() => <Text style={{ flex: 1, backgroundColor: 'white' }}>Settings</Text>} />
						</Tab.Navigator>
					</NavigationContainer>
				</SafeAreaView>
			</SafeAreaProvider>
			<StatusBar style='light' />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.primaryBackground,
	},
	text: {
		color: color.primaryText,
	},
});
