import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/HomeScreen';
import LoginScreen from '../src/LoginScreen';
import AddTripScreen from '../src/AddTripScreen';
import AddExpenseScreen from '../src/AddExpenseScreen';
import TripExpenseScreen from '../src/TripExpenseScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddTrip"
          component={AddTripScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddExpense"
          component={AddExpenseScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TripExpense"
          component={TripExpenseScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
