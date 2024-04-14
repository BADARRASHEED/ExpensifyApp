import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import {signOut} from 'firebase/auth';
import {auth, tripRef} from '../config/firebase';
import {useSelector} from 'react-redux';
import {getDocs, query, where} from 'firebase/firestore';
import {useIsFocused} from '@react-navigation/native';

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

  const {user} = useSelector(state => state.user);

  const [trips, setTrips] = useState([]);
  const isFocused = useIsFocused();

  const fetchTrips = async () => {
    const q = query(tripRef, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      console.log('document: ', doc.data());
      data.push({...doc.data(), id: doc.id});
    });
    setTrips(data);
  };

  useEffect(() => {
    if (isFocused) {
      fetchTrips();
    }
  }, [isFocused]);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View className="flex-1">
      {/* Header Start */}
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity
          onPress={handleLogout}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full">
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
        <View style={{height: 430}}>
          <FlatList
            data={trips}
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
