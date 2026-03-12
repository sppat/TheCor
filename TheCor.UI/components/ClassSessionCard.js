import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/color';
import typography from '../constants/typography';

const SPOT_BADGE_VARIANTS = {
	low: {
		backgroundColor: 'rgba(194, 65, 12, 0.28)',
		borderColor: '#ea580c',
		textColor: '#fb923c',
	},
	open: {
		backgroundColor: 'rgba(5, 150, 105, 0.28)',
		borderColor: '#059669',
		textColor: '#10b981',
	},
};

export default function ClassSessionCard({
	time,
	duration,
	title,
	instructorName,
	spotsLabel,
	spotsVariant = 'open',
	capacityLabel,
	ctaLabel = 'Tap to book',
}) {
	const badgeVariant =
		SPOT_BADGE_VARIANTS[spotsVariant] ?? SPOT_BADGE_VARIANTS.open;

	return (
		<View style={styles.card}>
			<View style={styles.mainRow}>
				<View style={styles.timeColumn}>
					<Text style={styles.timeText}>{time}</Text>
					<View style={styles.durationRow}>
						<Ionicons
							name='time-outline'
							size={14}
							color={color.secondaryText}
						/>
						<Text style={styles.durationText}>{duration}</Text>
					</View>
				</View>

				<View style={styles.detailsColumn}>
					<View style={styles.detailsHeaderRow}>
						<Text style={styles.titleText}>{title}</Text>
						<View
							style={[
								styles.spotsBadge,
								{
									backgroundColor: badgeVariant.backgroundColor,
									borderColor: badgeVariant.borderColor,
								},
							]}
						>
							<Text
								style={[styles.spotsText, { color: badgeVariant.textColor }]}
							>
								{spotsLabel}
							</Text>
						</View>
					</View>
					<Text style={styles.instructorText}>{instructorName}</Text>
				</View>
			</View>

			<View style={styles.divider} />

			<View style={styles.footerRow}>
				<Text style={styles.capacityText}>Capacity: {capacityLabel}</Text>
				<Text style={styles.ctaText}>{ctaLabel}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: color.secondaryBackground,
		borderColor: color.borderColor,
		borderWidth: 1,
		borderRadius: 16,
		padding: 16,
	},
	mainRow: {
		flexDirection: 'row',
	},
	timeColumn: {
		width: 74,
	},
	timeText: {
		color: color.primaryText,
		fontSize: 24,
		fontWeight: typography.fontWeight['font-semibold'],
		letterSpacing: -0.2,
		lineHeight: 28,
	},
	durationRow: {
		marginTop: 4,
		flexDirection: 'row',
		alignItems: 'center',
	},
	durationText: {
		marginLeft: 4,
		color: color.secondaryText,
		fontSize: typography.fontSize['text-sm'],
	},
	detailsColumn: {
		flex: 1,
		marginLeft: 14,
	},
	detailsHeaderRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
	titleText: {
		flex: 1,
		marginRight: 12,
		color: color.primaryText,
		fontSize: typography.fontSize['text-xl'],
		fontWeight: typography.fontWeight['font-semibold'],
		lineHeight: 30,
	},
	spotsBadge: {
		minWidth: 72,
		paddingHorizontal: 12,
		paddingVertical: 5,
		borderRadius: 999,
		borderWidth: 1,
		alignItems: 'center',
	},
	spotsText: {
		fontSize: typography.fontSize['text-sm'],
		fontWeight: typography.fontWeight['font-semibold'],
	},
	instructorText: {
		marginTop: 6,
		color: color.secondaryText,
		fontSize: typography.fontSize['text-base'],
	},
	divider: {
		marginTop: 14,
		marginBottom: 10,
		height: 1,
		backgroundColor: color.borderColor,
	},
	footerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	capacityText: {
		color: color.secondaryText,
		fontSize: typography.fontSize['text-sm'],
	},
	ctaText: {
		color: color.bottomTabActive,
		fontSize: typography.fontSize['text-sm'],
		fontWeight: typography.fontWeight['font-semibold'],
	},
});
