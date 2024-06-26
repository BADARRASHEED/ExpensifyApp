import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme';
import BackButton from '../components/BackButton';
import Snackbar from 'react-native-snackbar';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLoading} from '../redux/slices/user';
import LoadingComponent from '../components/LoadingComponent';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {userLoading} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (email && password) {
      // navigation.navigate('Home');
      try {
        dispatch(setUserLoading(true));
        await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
      } catch (e) {
        dispatch(setUserLoading(false));
        Snackbar.show({
          text: e.message,
          backgroundColor: 'red',
        });
      }
    } else {
      Snackbar.show({
        text: 'Email and Password are required!',
        backgroundColor: 'red',
      });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
        <View className="flex justify-between h-full mx-4">
          <View>
            <View className="relative mt-5">
              <View className="absolute top-0 left-0 z-10">
                <BackButton navigation={navigation} />
              </View>
              <Text
                className={`${colors.heading} text-xl font-bold text-center`}>
                Sign Up
              </Text>
            </View>

            <View className="flex-row justify-center my-3 mt-5">
              <Image
                source={require('../assets/images/signup.png')}
                className="w-80 h-80 mb-2"
              />
            </View>
            <View className="space-y-2 mx-2">
              <Text className={`${colors.heading} text-lg font-bold`}>
                Email
              </Text>
              <TextInput
                value={email}
                onChangeText={value => setEmail(value)}
                className="p-4 bg-white mb-3 rounded-full"
              />
              <Text className={`${colors.heading} text-lg font-bold`}>
                Password
              </Text>
              <TextInput
                value={password}
                onChangeText={value => setPassword(value)}
                secureTextEntry
                className="p-4 bg-white mb-3 rounded-full"
              />
              <TouchableOpacity
                className={`${colors.button} flex-row justify-end`}>
                <Text>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {userLoading ? (
              <LoadingComponent />
            ) : (
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={{backgroundColor: colors.button}}
                className="my-6 rounded-full p-3 shadow-sm mx-2">
                <Text className="text-center text-white text-lg font-bold">
                  Sign Up
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
