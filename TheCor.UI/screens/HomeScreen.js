import { Pressable, StyleSheet, Text, View } from 'react-native';
import color from '../constants/color';
import typography from '../constants/typography';

export default function HomeScreen({ navigation }) {
	function openMyBookings() {
		navigation.navigate('My Bookings');
	}

	return (
		<View style={styles.container}>
			<View style={styles.sectionHeaderRow}>
				<Text style={styles.header}>Upcoming Classes</Text>
				<Pressable onPress={openMyBookings}>
					<Text style={styles.viewAll}>View All</Text>
				</Pressable>
			</View>
			<View style={styles.sectionHeaderRow}>
				<Text style={styles.header}>Today's Schedule</Text>
				<Pressable onPress={openMyBookings}>
					<Text style={styles.viewAll}>View All</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.primaryBackground
	},
	sectionHeaderRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	header: {
		fontSize: typography.fontSize['text-xxl'],
		color: color.primaryText
	},
	viewAll: {
		color: color.cardIconBackground,
		fontWeight: typography.fontWeight['font-semibold']
	}
});
