import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/color';
import typography from '../constants/typography';

const WEEKDAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const AVAILABLE_DOT_COLOR = '#10b981';

export default function CalendarDatePicker({
	selectedDate,
	onSelectDate,
	dayMetaByDate = {},
}) {
	const selected = stripTime(selectedDate ?? new Date());
	const [visibleMonth, setVisibleMonth] = useState(
		new Date(selected.getFullYear(), selected.getMonth(), 1),
	);

	const days = useMemo(() => buildCalendarDays(visibleMonth), [visibleMonth]);
	const monthLabel = useMemo(
		() =>
			visibleMonth.toLocaleDateString(undefined, {
				month: 'long',
				year: 'numeric',
			}),
		[visibleMonth],
	);

	function goToPreviousMonth() {
		setVisibleMonth(
			(current) => new Date(current.getFullYear(), current.getMonth() - 1, 1),
		);
	}

	function goToNextMonth() {
		setVisibleMonth(
			(current) => new Date(current.getFullYear(), current.getMonth() + 1, 1),
		);
	}

	function handleDatePress(day) {
		onSelectDate?.(day.date);
		if (!day.isCurrentMonth) {
			setVisibleMonth(new Date(day.date.getFullYear(), day.date.getMonth(), 1));
		}
	}

	return (
		<View>
			<View style={styles.monthNavigationRow}>
				<Pressable style={styles.navButton} onPress={goToPreviousMonth}>
					<Ionicons
						name='chevron-back'
						size={20}
						color={color.primaryText}
						accessibilityLabel='Previous month'
					/>
				</Pressable>
				<Text style={styles.monthTitle}>{monthLabel}</Text>
				<Pressable style={styles.navButton} onPress={goToNextMonth}>
					<Ionicons
						name='chevron-forward'
						size={20}
						color={color.primaryText}
						accessibilityLabel='Next month'
					/>
				</Pressable>
			</View>

			<View style={styles.calendarCard}>
				<View style={styles.weekdaysRow}>
					{WEEKDAY_LABELS.map((label) => (
						<Text key={label} style={styles.weekdayText}>
							{label}
						</Text>
					))}
				</View>

				<View style={styles.daysGrid}>
					{days.map((day) => {
						const isSelected = isSameDay(day.date, selected);
						const dayMeta = dayMetaByDate[toDateKey(day.date)];
						const shouldShowDot =
							day.isCurrentMonth && Boolean(dayMeta?.status);
						const isFilledDay = !isSelected && dayMeta?.variant === 'filled';
						const isOutlinedDay = !isSelected && dayMeta?.variant === 'outline';
						const dotStyle =
							dayMeta?.status === 'booked'
								? styles.bookedDot
								: styles.availableDot;

						return (
							<Pressable
								key={day.key}
								onPress={() => handleDatePress(day)}
								style={styles.dayCell}
							>
								<View
									style={[
										styles.dayContent,
										isFilledDay && styles.filledDayContent,
										isOutlinedDay && styles.outlinedDayContent,
										isSelected && styles.selectedDayContent,
									]}
								>
									<Text
										style={[
											styles.dayText,
											!day.isCurrentMonth && styles.outsideMonthDayText,
											isOutlinedDay && styles.outlinedDayText,
											isSelected && styles.selectedDayText,
										]}
									>
										{day.date.getDate()}
									</Text>
									{shouldShowDot && <View style={[styles.dayDot, dotStyle]} />}
								</View>
							</Pressable>
						);
					})}
				</View>
			</View>
		</View>
	);
}

function buildCalendarDays(monthDate) {
	const year = monthDate.getFullYear();
	const month = monthDate.getMonth();
	const firstDayOfMonth = new Date(year, month, 1);
	const startOffset = firstDayOfMonth.getDay();
	const startDate = new Date(year, month, 1 - startOffset);
	const days = [];

	for (let index = 0; index < 42; index += 1) {
		const date = new Date(
			startDate.getFullYear(),
			startDate.getMonth(),
			startDate.getDate() + index,
		);
		days.push({
			key: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
			date,
			isCurrentMonth: date.getMonth() === month,
		});
	}

	return days;
}

function isSameDay(firstDate, secondDate) {
	return (
		firstDate.getFullYear() === secondDate.getFullYear() &&
		firstDate.getMonth() === secondDate.getMonth() &&
		firstDate.getDate() === secondDate.getDate()
	);
}

function stripTime(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function toDateKey(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

const styles = StyleSheet.create({
	monthNavigationRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	navButton: {
		width: 36,
		height: 36,
		alignItems: 'center',
		justifyContent: 'center',
	},
	monthTitle: {
		fontSize: typography.fontSize['text-xl'],
		fontWeight: typography.fontWeight['font-semibold'],
		color: color.primaryText,
	},
	calendarCard: {
		backgroundColor: color.secondaryBackground,
		borderColor: color.borderColor,
		borderWidth: 1,
		borderRadius: 16,
		paddingVertical: 16,
		paddingHorizontal: 14,
	},
	weekdaysRow: {
		flexDirection: 'row',
		marginBottom: 8,
	},
	weekdayText: {
		flex: 1,
		textAlign: 'center',
		fontSize: typography.fontSize['text-xs'],
		color: color.secondaryText,
	},
	daysGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	dayCell: {
		width: `${100 / 7}%`,
		aspectRatio: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	dayContent: {
		width: 40,
		height: 40,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	},
	filledDayContent: {
		backgroundColor: '#233149',
	},
	outlinedDayContent: {
		borderWidth: 1,
		borderColor: color.cardIconBackground,
	},
	dayText: {
		fontSize: typography.fontSize['text-base'],
		color: color.primaryText,
		includeFontPadding: false,
		textAlignVertical: 'center',
	},
	outsideMonthDayText: {
		color: color.emptyIconBackground,
	},
	outlinedDayText: {
		color: color.bottomTabActive,
	},
	selectedDayContent: {
		backgroundColor: color.bottomTabActive,
	},
	selectedDayText: {
		color: color.primaryBackground,
		fontWeight: typography.fontWeight['font-semibold'],
	},
	dayDot: {
		position: 'absolute',
		bottom: 5,
		width: 4,
		height: 4,
		borderRadius: 99,
	},
	bookedDot: {
		backgroundColor: color.bottomTabActive,
	},
	availableDot: {
		backgroundColor: AVAILABLE_DOT_COLOR,
	},
});
