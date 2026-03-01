import color from '../constants/color';

const ROUTE_ICON_BY_NAME = {
	Home: 'home',
	Classes: 'calendar',
	'My Bookings': 'person',
};

export const TAB_BAR_OPTIONS = {
	headerShown: false,
	tabBarActiveTintColor: color.bottomTabActive,
	tabBarInactiveTintColor: color.secondaryText,
	tabBarStyle: {
		backgroundColor: color.primaryBackground,
		borderTopColor: color.borderColor,
		paddingTop: 4,
		paddingBottom: 8,
	},
};

export function getTabIconName(routeName) {
	return ROUTE_ICON_BY_NAME[routeName] ?? 'ellipse';
}
