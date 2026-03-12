import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CalendarDatePicker from '../components/CalendarDatePicker';
import ClassSessionCard from '../components/ClassSessionCard';
import color from '../constants/color';
import spacing from '../constants/spacing';
import typography from '../constants/typography';

const BOOKED_DOT_COLOR = color.bottomTabActive;
const AVAILABLE_DOT_COLOR = '#10b981';
const INITIAL_SELECTED_DATE = new Date(2026, 2, 17);
const EMPTY_DAY_SCHEDULE = { totalSessions: 0, sessions: [] };
const CALENDAR_DAY_VARIANTS = {
	'2026-03-12': { variant: 'outline' },
	'2026-03-13': { variant: 'filled' },
	'2026-03-14': { variant: 'filled' },
	'2026-03-15': { variant: 'filled' },
	'2026-03-16': { variant: 'filled' },
	'2026-03-17': { variant: 'filled' },
};
const SPOTS_LEFT_BY_DATE = {
	'2026-03-12': [0, 0],
	'2026-03-13': [0, 0],
	'2026-03-14': [0, 0],
	'2026-03-15': [0, 0],
	'2026-03-16': [1, 0],
	'2026-03-17': [1, 10],
};
const CLASSES_BY_DATE = {
	'2026-03-17': {
		totalSessions: 15,
		sessions: [
			{
				id: '0700-functional-group',
				time: '07:00',
				duration: '60min',
				title: 'Functional Group',
				instructorName: 'Sarah Johnson',
				spotsLeft: 1,
				spotsLabel: '1 spots',
				spotsVariant: 'low',
				capacityLabel: '15/16',
			},
			{
				id: '0800-functional-group',
				time: '08:00',
				duration: '60min',
				title: 'Functional Group',
				instructorName: 'Sarah Johnson',
				spotsLeft: 10,
				spotsLabel: '10 spots',
				spotsVariant: 'open',
				capacityLabel: '6/16',
			},
		],
	},
};
const CALENDAR_DAY_META = buildCalendarDayMeta(
	CALENDAR_DAY_VARIANTS,
	SPOTS_LEFT_BY_DATE,
);

export default function ClassesScreen() {
	const [selectedDate, setSelectedDate] = useState(INITIAL_SELECTED_DATE);
	const selectedDateKey = toDateKey(selectedDate);
	const selectedDaySchedule =
		CLASSES_BY_DATE[selectedDateKey] ?? EMPTY_DAY_SCHEDULE;
	const { sessions, totalSessions } = selectedDaySchedule;
	const selectedDateLabel = selectedDate.toLocaleDateString('en-US', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
	});
	const sessionsCountLabel = `${totalSessions} ${
		totalSessions === 1 ? 'session' : 'sessions'
	}`;

	return (
		<View style={styles.container}>
			<CalendarDatePicker
				selectedDate={selectedDate}
				onSelectDate={setSelectedDate}
				dayMetaByDate={CALENDAR_DAY_META}
			/>
			<View style={styles.legendRow}>
				<LegendItem colorValue={BOOKED_DOT_COLOR} label='Booked' />
				<LegendItem colorValue={AVAILABLE_DOT_COLOR} label='Available' />
			</View>
			<View style={styles.summaryRow}>
				<Text style={styles.selectedDateText}>{selectedDateLabel}</Text>
				<Text style={styles.sessionsCountText}>{sessionsCountLabel}</Text>
			</View>
			<ScrollView
				style={styles.sessionsContainer}
				contentContainerStyle={styles.sessionsContentContainer}
				showsVerticalScrollIndicator={false}
			>
				{sessions.length === 0 ? (
					<View style={styles.emptyStateCard}>
						<Text style={styles.emptyStateText}>
							No classes scheduled for this day
						</Text>
					</View>
				) : (
					sessions.map((session) => (
						<View key={session.id} style={styles.sessionCardWrapper}>
							<ClassSessionCard
								time={session.time}
								duration={session.duration}
								title={session.title}
								instructorName={session.instructorName}
								spotsLabel={session.spotsLabel}
								spotsVariant={session.spotsVariant}
								capacityLabel={session.capacityLabel}
							/>
						</View>
					))
				)}
			</ScrollView>
		</View>
	);
}

function LegendItem({ colorValue, label }) {
	return (
		<View style={styles.legendItem}>
			<View style={[styles.legendDot, { backgroundColor: colorValue }]} />
			<Text style={styles.legendLabel}>{label}</Text>
		</View>
	);
}

function toDateKey(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

function buildCalendarDayMeta(dayVariantsByDate, spotsLeftByDate) {
	const calendarDayMeta = { ...dayVariantsByDate };

	Object.entries(spotsLeftByDate).forEach(([dateKey, spotsLeft]) => {
		const status = resolveCalendarDotStatus(spotsLeft);

		if (!status) {
			return;
		}

		calendarDayMeta[dateKey] = {
			...(calendarDayMeta[dateKey] ?? {}),
			status,
		};
	});

	return calendarDayMeta;
}

function resolveCalendarDotStatus(spotsLeftByClass) {
	if (!Array.isArray(spotsLeftByClass) || spotsLeftByClass.length === 0) {
		return undefined;
	}

	return spotsLeftByClass.every((spotsLeft) => spotsLeft === 0)
		? 'booked'
		: 'available';
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.primaryBackground,
		padding: spacing.padding.screen,
	},
	legendRow: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		columnGap: 20,
	},
	legendItem: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	legendDot: {
		width: 9,
		height: 9,
		borderRadius: 99,
		marginRight: 6,
	},
	legendLabel: {
		color: color.secondaryText,
		fontSize: typography.fontSize['text-sm'],
	},
	summaryRow: {
		marginTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	selectedDateText: {
		color: color.primaryText,
		fontSize: typography.fontSize['text-xxl'],
		fontWeight: typography.fontWeight['font-semibold'],
	},
	sessionsCountText: {
		color: color.secondaryText,
		fontSize: typography.fontSize['text-lg'],
	},
	sessionsContainer: {
		marginTop: 18,
		flex: 1,
	},
	sessionsContentContainer: {
		paddingBottom: 12,
	},
	emptyStateCard: {
		backgroundColor: color.secondaryBackground,
		borderColor: color.borderColor,
		borderWidth: 1,
		borderRadius: 16,
		minHeight: 170,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: spacing.padding.card,
	},
	emptyStateText: {
		color: color.secondaryText,
		fontSize: typography.fontSize['text-xl'],
		textAlign: 'center',
	},
	sessionCardWrapper: {
		marginBottom: 14,
	},
});
