import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../theme';

const WelcomeScreen = ({navigation}) => {
  return (
    <View className="h-full flex justify-around">
      <View className="flex-row justify-center mt-10">
        <Image
          className="w-96 h-96 shadow"
          source={require('../assets/images/welcome.png')}
        />
      </View>
      <View className="mx-5 mb-20">
        <Text
          className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>
          Badar's Expensify
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          className="shadow p-3 rounded-full mb-5"
          style={{backgroundColor: colors.button}}>
          <Text className="text-center text-lg text-white font-bold">
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          className="shadow p-3 rounded-full"
          style={{backgroundColor: colors.button}}>
          <Text className="text-center text-lg text-white font-bold">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
