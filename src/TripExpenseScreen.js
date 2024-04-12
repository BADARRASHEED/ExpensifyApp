import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import BackButton from '../components/BackButton';
import ExpenseCard from '../components/ExpenseCard';

const Data = [
  {
    id: 1,
    title: 'ate sandwich',
    amount: 4,
    category: 'food',
  },
  {
    id: 2,
    title: 'bought a jacket',
    amount: 50,
    category: 'shopping',
  },
  {
    id: 3,
    title: 'watch a movie',
    amount: 15,
    category: 'entertainment',
  },
  {
    id: 4,
    title: 'buy laptop',
    amount: 1500,
    category: 'investment',
  },
];

const TripExpenseScreen = ({navigation, route}) => {
  const {id, place, country} = route.params;

  const renderItem = ({item}) => {
    return <ExpenseCard item={item} />;
  };

  return (
    <View className="flex-1">
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-2 left-0 z-10">
            <BackButton navigation={navigation} />
          </View>
          <View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              {place}
            </Text>
            <Text className={`${colors.heading} text-xs text-center`}>
              {country}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image
            className="w-80 h-80"
            source={require('../assets/images/7.png')}
          />
        </View>

        <View className="space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddExpense')}
              className="p-2 px-3 bg-white border border-gray-200 rounded-full">
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 400}}>
            <FlatList
              data={Data}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <EmptyList message={'No expenses till now'} />
              }
              className="mx-1"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TripExpenseScreen;
