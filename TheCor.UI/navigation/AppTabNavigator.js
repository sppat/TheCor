import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ClassesScreen from '../screens/ClassesScreen';
import HomeScreen from '../screens/HomeScreen';
import MyBookingsScreen from '../screens/MyBookingsScreen';
import { getTabIconName, TAB_BAR_OPTIONS } from './tabConfig';

const Tab = createBottomTabNavigator();

function buildTabScreenOptions({ route }) {
	return {
		...TAB_BAR_OPTIONS,
		tabBarIcon: ({ color, size }) => (
			<Ionicons name={getTabIconName(route.name)} size={size} color={color} />
		),
	};
}

export default function AppTabNavigator() {
	return (
		<Tab.Navigator screenOptions={buildTabScreenOptions}>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Classes' component={ClassesScreen} />
			<Tab.Screen name='My Bookings' component={MyBookingsScreen} />
		</Tab.Navigator>
	);
}
