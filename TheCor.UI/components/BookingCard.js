import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/color';
import spacing from '../constants/spacing';
import typography from '../constants/typography';

export default function BookingCard({
	className,
	classDateTime,
	instructorName,
}) {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.cardIconContainer}>
				<Ionicons name='calendar' size={40} color={color.cardIconBackground} />
			</View>
			<View>
				<Text style={styles.className}>{className}</Text>
				<Text style={styles.instructorName}>{instructorName}</Text>
				<Text style={styles.classDateTime}>{classDateTime}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: color.secondaryBackground,
		padding: spacing.padding.card,
		borderRadius: 12,
		borderColor: color.cardBorder,
		borderWidth: 0.5,
	},
	cardIconContainer: {
		marginEnd: 15,
	},
	className: {
		fontSize: typography.fontSize['text-xl'],
		color: color.primaryText,
	},
	instructorName: {
		fontSize: typography.fontSize['text-sm'],
		color: color.secondaryText,
		marginTop: 4,
	},
	classDateTime: {
		fontSize: typography.fontSize['text-sm'],
		color: color.secondaryText,
		marginTop: 2,
	},
});
