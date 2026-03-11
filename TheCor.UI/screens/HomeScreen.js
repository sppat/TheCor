import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import BookingCard from '../components/BookingCard';
import color from '../constants/color';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

const UPCOMING_CLASSES = [
	{
		id: 'yoga-1',
		className: 'Yoga Class',
		classDateTime: '10:00 AM - 11:00 AM',
		instructorName: 'John Doe',
	},
	{
		id: 'pilates-1',
		className: 'Pilates Session',
		classDateTime: '2:00 PM - 3:00 PM',
		instructorName: 'Jane Smith',
	}
];

export default function HomeScreen({ navigation }) {
	function openMyBookings() {
		navigation.navigate('My Bookings');
	}

	return (
		<View style={styles.container}>
			<View>
				<View style={styles.sectionHeaderRow}>
					<Text style={styles.header}>Upcoming Classes</Text>
					<Pressable onPress={openMyBookings}>
						<Text style={styles.viewAll}>View All</Text>
					</Pressable>
				</View>
				<FlatList
					data={UPCOMING_CLASSES}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<BookingCard
							className={item.className}
							classDateTime={item.classDateTime}
							instructorName={item.instructorName}
						/>
					)}
					ItemSeparatorComponent={() => <View style={styles.bookingCardSeparator} />}
					scrollEnabled={false}
					style={styles.bookingList}
				/>
			</View>
			<View>
				<View style={styles.sectionHeaderRow}>
					<Text style={styles.header}>Today's Schedule</Text>
					<Pressable onPress={openMyBookings}>
						<Text style={styles.viewAll}>View All</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.primaryBackground,
		padding: spacing.padding.screen
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
	},
	bookingList: {
		marginTop: 12
	},
	bookingCardSeparator: {
		height: 12
	}
});
