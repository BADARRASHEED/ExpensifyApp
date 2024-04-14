import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../theme';
import EmptyList from '../components/EmptyList';
import BackButton from '../components/BackButton';
import ExpenseCard from '../components/ExpenseCard';
import {getDocs, query, where} from 'firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import {expenseRef} from '../config/firebase';

const TripExpenseScreen = ({navigation, route}) => {
  const {id, place, country} = route.params;
  const [expenses, setExpenses] = useState([]);

  const renderItem = ({item}) => {
    return <ExpenseCard item={item} />;
  };

  const isFocused = useIsFocused();

  const fetchExpenses = async () => {
    const q = query(expenseRef, where('tripId', '==', id));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      console.log('document: ', doc.data());
      data.push({...doc.data(), id: doc.id});
    });
    setExpenses(data);
  };

  useEffect(() => {
    if (isFocused) {
      fetchExpenses();
    }
  }, [isFocused]);

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
              onPress={() =>
                navigation.navigate('AddExpense', {id, place, country})
              }
              className="p-2 px-3 bg-white border border-gray-200 rounded-full">
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 400}}>
            <FlatList
              data={expenses}
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
