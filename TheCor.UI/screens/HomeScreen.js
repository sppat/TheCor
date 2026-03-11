import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import BookingCard from '../components/BookingCard';
import EmptyCard from '../components/EmptyCard';
import color from '../constants/color';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

const UPCOMING_CLASSES = [
	{
		id: 'personal-training',
		className: 'Personal Training',
		classDateTime: 'Wed, Mar 18 • 10:00 AM',
		instructorName: 'Fotis Lempesis',
	},
	{
		id: 'group-training',
		className: 'Group Training',
		classDateTime: 'Thu, Mar 19 • 2:00 PM',
		instructorName: 'Kostas Lempesis',
	},
];

const TODAY_SCHEDULE = [];

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
				{UPCOMING_CLASSES.length === 0 ? (
					<EmptyCard message='No upcoming classes booked.' image='calendar' />
				) : (
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
						ItemSeparatorComponent={() => (
							<View style={styles.bookingCardSeparator} />
						)}
						scrollEnabled={false}
						style={styles.bookingList}
					/>
				)}
			</View>
			<View style={styles.nextSection}>
				<View style={styles.sectionHeaderRow}>
					<Text style={styles.header}>Today's Schedule</Text>
					<Pressable onPress={openMyBookings}>
						<Text style={styles.viewAll}>View All</Text>
					</Pressable>
				</View>
				{TODAY_SCHEDULE.length === 0 ? (
					<EmptyCard
						message='No classes scheduled for today.'
						image='calendar'
					/>
				) : (
					<FlatList
						data={TODAY_SCHEDULE}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<BookingCard
								className={item.className}
								classDateTime={item.classDateTime}
								instructorName={item.instructorName}
							/>
						)}
						ItemSeparatorComponent={() => (
							<View style={styles.bookingCardSeparator} />
						)}
						scrollEnabled={false}
						style={styles.bookingList}
					/>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.primaryBackground,
		padding: spacing.padding.screen,
	},
	sectionHeaderRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	header: {
		fontSize: typography.fontSize['text-xxl'],
		color: color.primaryText,
	},
	viewAll: {
		color: color.cardIconBackground,
		fontWeight: typography.fontWeight['font-semibold'],
	},
	bookingList: {
		marginTop: 12,
	},
	bookingCardSeparator: {
		height: 12,
	},
	nextSection: {
		marginTop: spacing.padding.screen,
	},
});
