import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, categoryBG} from '../theme';
import {deleteDoc, doc} from 'firebase/firestore';
import {expenseRef} from '../config/firebase';
import {TrashIcon} from 'react-native-heroicons/outline';

const ExpenseCard = ({item, onDelete}) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(expenseRef, item.id));
      onDelete(item.id); // Notify parent component of deletion
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <View
      style={{backgroundColor: categoryBG[item.category]}}
      className="flex-row justify-between items-center p-3 px-5 mb-3 rounded-2xl">
      <View>
        <Text className={`${colors.heading} font-bold`}>{item.title}</Text>
        <Text className={`${colors.heading} text-xs`}>{item.category}</Text>
      </View>
      <View className="flex-row items-center">
        <Text>${item.amount}</Text>
        <TouchableOpacity onPress={handleDelete} className="ml-4">
          <TrashIcon size="30" color={'red'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExpenseCard;
