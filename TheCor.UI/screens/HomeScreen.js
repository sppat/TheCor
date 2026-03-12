import { StyleSheet, View } from 'react-native';
import ScheduleSection from '../components/ScheduleSection';
import color from '../constants/color';
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
	}
];

const TODAY_SCHEDULE = [
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
	}, {
		id: 'personal-training-',
		className: 'Personal Training',
		classDateTime: 'Wed, Mar 18 • 10:00 AM',
		instructorName: 'Fotis Lempesis',
	},
	{
		id: 'group-training-',
		className: 'Group Training',
		classDateTime: 'Thu, Mar 19 • 2:00 PM',
		instructorName: 'Kostas Lempesis',
	},
];

const HOME_SECTIONS = [
	{
		id: 'upcoming-classes',
		title: 'Upcoming Classes',
		data: UPCOMING_CLASSES,
		emptyMessage: 'No upcoming classes booked.',
		emptyIcon: 'calendar',
	},
	{
		id: 'today-schedule',
		title: "Today's Schedule",
		data: TODAY_SCHEDULE,
		emptyMessage: 'No classes scheduled for today.',
		emptyIcon: 'calendar',
	},
];

export default function HomeScreen({ navigation }) {
	function openMyBookings() {
		navigation.navigate('My Bookings');
	}

	return (
		<View style={styles.container}>
			{HOME_SECTIONS.map((section, index) => (
				<ScheduleSection
					key={section.id}
					title={section.title}
					data={section.data}
					emptyMessage={section.emptyMessage}
					emptyIcon={section.emptyIcon}
					onPressViewAll={openMyBookings}
					containerStyle={index === 0 ? null : styles.nextSection}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.primaryBackground,
		padding: spacing.padding.screen,
	},
	nextSection: {
		marginTop: spacing.padding.screen,
	},
});
