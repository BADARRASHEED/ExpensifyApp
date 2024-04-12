import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';

const Data = [
  {
    id: 1,
    place: 'Gujranwala',
    country: 'Pakistan',
  },
  {
    id: 2,
    place: 'Lahore',
    country: 'Pakistan',
  },
  {
    id: 3,
    place: 'Islamabad',
    country: 'Pakistan',
  },
  {
    id: 4,
    place: 'California',
    country: 'USA',
  },
  {
    id: 5,
    place: 'Texas',
    country: 'USA',
  },
  {
    id: 6,
    place: 'Paris',
    country: 'France',
  },
];

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('TripExpense', {...item})}
        className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
        <View>
          <Image source={randomImage()} className="w-36 h-36 mb-2" />
          <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
          <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1">
      {/* Header Start */}
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* Header end */}

      {/* Banner start */}
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          className="w-60 h-60"
          source={require('../assets/images/banner.png')}
        />
      </View>
      {/* Banner end */}

      {/* Recent Trips start */}
      <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTrip')}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 400}}>
          <FlatList
            data={Data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyList message={'No trips till now'} />}
            className="mx-1"
          />
        </View>
      </View>
      {/* Recent Trips end */}
    </View>
  );
};

export default HomeScreen;
