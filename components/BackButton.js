import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {colors} from '../theme';

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="h-8 w-8 bg-white rounded-full">
      <ChevronLeftIcon size="30" color={colors.button} />
    </TouchableOpacity>
  );
};

export default BackButton;
