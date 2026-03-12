import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import BookingCard from './BookingCard';
import EmptyCard from './EmptyCard';
import color from '../constants/color';
import typography from '../constants/typography';

export default function ScheduleSection({
	title,
	data = [],
	emptyMessage,
	emptyIcon = 'calendar',
	onPressViewAll,
	containerStyle,
}) {
	return (
		<View style={[styles.container, containerStyle]}>
			<View style={styles.sectionHeaderRow}>
				<Text style={styles.header}>{title}</Text>
				<Pressable onPress={onPressViewAll}>
					<Text style={styles.viewAll}>View All</Text>
				</Pressable>
			</View>
			{data.length === 0 ? (
				<EmptyCard message={emptyMessage} image={emptyIcon} />
			) : (
				<FlatList
					data={data}
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
					scrollEnabled
					style={styles.bookingList}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
});
