import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/color';
import spacing from '../constants/spacing';
import typography from '../constants/typography';

export default function BookingCard({
	className,
	classDateTime,
	instructorName,
	withDetails = false,
	status = 'upcoming',
	dateLabel,
	timeLabel,
	durationLabel = '60 min',
}) {
	if (!withDetails) {
		return (
			<View style={styles.cardContainer}>
				<View style={styles.cardIconContainer}>
					<Ionicons
						name='calendar'
						size={40}
						color={color.cardIconBackground}
					/>
				</View>
				<View>
					<Text style={styles.className}>{className}</Text>
					<Text style={styles.instructorName}>{instructorName}</Text>
					<Text style={styles.classDateTime}>{classDateTime}</Text>
				</View>
			</View>
		);
	}

	const isCompleted = status === 'completed';
	const secondaryTextColor = isCompleted
		? styles.completedMetaText.color
		: color.secondaryText;
	const resolvedDateLabel = dateLabel ?? classDateTime;

	return (
		<View style={[styles.detailsCard, isCompleted && styles.completedCard]}>
			<View style={styles.headerRow}>
				<Text
					style={[styles.detailsTitle, isCompleted && styles.completedTitle]}
				>
					{className}
				</Text>
				{isCompleted ? (
					<View style={styles.completedBadge}>
						<Text style={styles.completedBadgeText}>Completed</Text>
					</View>
				) : (
					<Pressable style={styles.closeButton}>
						<Ionicons name='close' size={22} color={color.secondaryText} />
					</Pressable>
				)}
			</View>

			<View style={styles.metaRow}>
				<Ionicons name='person-outline' size={15} color={secondaryTextColor} />
				<Text
					style={[styles.metaText, isCompleted && styles.completedMetaText]}
				>
					{instructorName}
				</Text>
			</View>

			<View style={styles.dateTimeRow}>
				<View style={styles.metaRow}>
					<Ionicons
						name='calendar-outline'
						size={15}
						color={secondaryTextColor}
					/>
					<Text
						style={[styles.metaText, isCompleted && styles.completedMetaText]}
					>
						{resolvedDateLabel}
					</Text>
				</View>
				{timeLabel ? (
					<View style={[styles.metaRow, styles.timeMetaRow]}>
						<Ionicons
							name='time-outline'
							size={15}
							color={secondaryTextColor}
						/>
						<Text
							style={[styles.metaText, isCompleted && styles.completedMetaText]}
						>
							{timeLabel}
						</Text>
					</View>
				) : null}
			</View>

			<View style={styles.divider} />

			<View style={styles.statsRow}>
				<Text style={styles.statLabel}>Duration: </Text>
				<Text
					style={[styles.statValue, isCompleted && styles.completedMetaText]}
				>
					{durationLabel}
				</Text>
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
	detailsCard: {
		backgroundColor: color.secondaryBackground,
		borderColor: color.borderColor,
		borderWidth: 1,
		borderRadius: 16,
		padding: spacing.padding.card,
	},
	completedCard: {
		opacity: 0.68,
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	detailsTitle: {
		flex: 1,
		color: color.primaryText,
		fontSize: typography.fontSize['text-xxl'],
		fontWeight: typography.fontWeight['font-semibold'],
	},
	completedTitle: {
		color: '#96a0b2',
	},
	completedBadge: {
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 999,
		backgroundColor: color.primaryBackground,
	},
	completedBadgeText: {
		color: '#9ca3af',
		fontSize: typography.fontSize['text-sm'],
	},
	closeButton: {
		width: 28,
		height: 28,
		alignItems: 'center',
		justifyContent: 'center',
	},
	metaRow: {
		marginTop: 8,
		flexDirection: 'row',
		alignItems: 'center',
	},
	metaText: {
		marginLeft: 6,
		color: color.secondaryText,
		fontSize: typography.fontSize['text-lg'],
	},
	completedMetaText: {
		color: '#8490a5',
	},
	dateTimeRow: {
		marginTop: 2,
		flexDirection: 'row',
		alignItems: 'center',
	},
	timeMetaRow: {
		marginLeft: 16,
	},
	divider: {
		marginTop: 14,
		height: 1,
		backgroundColor: color.borderColor,
	},
	statsRow: {
		marginTop: 14,
		flexDirection: 'row',
		alignItems: 'center',
	},
	statLabel: {
		color: color.secondaryText,
		fontSize: typography.fontSize['text-xl'],
	},
	statValue: {
		color: color.primaryText,
		fontSize: typography.fontSize['text-xl'],
		fontWeight: typography.fontWeight['font-semibold'],
	},
});
