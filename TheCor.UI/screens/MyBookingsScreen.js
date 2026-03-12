import { FlatList, StyleSheet, View } from 'react-native';
import BookingCard from '../components/BookingCard';
import color from '../constants/color';
import spacing from '../constants/spacing';

const MY_BOOKINGS = [
	{
		id: 'booking-1',
		className: 'Functional Group Training',
		instructorName: 'Sarah Johnson',
		dateLabel: 'Thu, Mar 12, 2026',
		timeLabel: '7:00 AM',
		durationLabel: '60 min',
		status: 'completed',
	},
	{
		id: 'booking-2',
		className: 'Functional Group Training',
		instructorName: 'Sarah Johnson',
		dateLabel: 'Thu, Mar 12, 2026',
		timeLabel: '2:00 PM',
		durationLabel: '60 min',
		status: 'completed',
	},
	{
		id: 'booking-3',
		className: 'Functional Group Training',
		instructorName: 'Sarah Johnson',
		dateLabel: 'Thu, Mar 12, 2026',
		timeLabel: '7:00 PM',
		durationLabel: '60 min',
		status: 'upcoming',
	},
	{
		id: 'booking-4',
		className: 'Functional Group Training',
		instructorName: 'Sarah Johnson',
		dateLabel: 'Fri, Mar 13, 2026',
		timeLabel: '7:00 AM',
		durationLabel: '60 min',
		status: 'upcoming',
	},
];

export default function MyBookingsScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				data={MY_BOOKINGS}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <BookingCard withDetails {...item} />}
				ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
				contentContainerStyle={styles.listContent}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.primaryBackground,
	},
	listContent: {
		padding: spacing.padding.screen,
		paddingBottom: spacing.padding.screen + 10,
	},
	cardSeparator: {
		height: 16,
	},
});
