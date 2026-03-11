import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/color';

export default function EmptyCard({ message, image }) {
	return (
		<View style={styles.container}>
			<Ionicons name={image} size={50} color={color.emptyIconBackground} />
			<Text style={styles.text}>{message}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.secondaryBackground,
		opacity: 0.8,
		borderRadius: 12,
		borderWidth: 0.5,
		padding: 20,
		borderColor: color.borderColor,
		marginTop: 10,
	},
	text: {
		color: color.secondaryText,
		marginTop: 10,
	},
});
