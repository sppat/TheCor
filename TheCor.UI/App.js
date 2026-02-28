import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import color from './constants/color';

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<Text style={styles.text}>Open up App.js to start working on your app!</Text>
				<StatusBar style='light' />
			</SafeAreaView>
		</SafeAreaProvider>
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
