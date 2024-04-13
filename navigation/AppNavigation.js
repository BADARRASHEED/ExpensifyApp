import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/HomeScreen';
import AddTripScreen from '../src/AddTripScreen';
import AddExpenseScreen from '../src/AddExpenseScreen';
import TripExpenseScreen from '../src/TripExpenseScreen';
import WelcomeScreen from '../src/WelcomeScreen';
import SignInScreen from '../src/SignInScreen';
import SignUpScreen from '../src/SignUpScreen';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const {user} = useSelector(state => state.user);

  if (user) {
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
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            options={{headerShown: false}}
            name="SignIn"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SignUp"
            component={SignUpScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Welcome"
            component={WelcomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default AppNavigation;
