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
import randomImage from '../assets/images/randomImage';

const AddTripScreen = ({navigation}) => {
  const [place, setPlace] = useState();
  const [country, setCountry] = useState();

  const handleAddTrip = () => {
    if (place && country) {
      navigation.navigate('Home');
    } else {
      // navigation.navigate('AddTrip');
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
                Add Trip
              </Text>
            </View>

            <View className="flex-row justify-center my-3 mt-5">
              <Image source={randomImage()} className="w-72 h-72 mb-2" />
            </View>
            <View className="space-y-2 mx-2">
              <Text className={`${colors.heading} text-lg font-bold`}>
                Where On Earth ?
              </Text>
              <TextInput
                value={place}
                onChangeText={value => setPlace(value)}
                className="p-4 bg-white mb-3 rounded-full"
              />
              <Text className={`${colors.heading} text-lg font-bold`}>
                Which Country ?
              </Text>
              <TextInput
                value={country}
                onChangeText={value => setCountry(value)}
                className="p-4 bg-white mb-3 rounded-full"
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => handleAddTrip()}
              style={{backgroundColor: colors.button}}
              className="my-6 rounded-full p-3 shadow-sm mx-2">
              <Text className="text-center text-white text-lg font-bold">
                Add Trip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddTripScreen;
