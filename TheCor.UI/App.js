import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppTabNavigator from './navigation/AppTabNavigator';
import color from './constants/color';

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<SafeAreaView style={styles.container} edges={['top']}>
					<NavigationContainer>
						<AppTabNavigator />
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
});
