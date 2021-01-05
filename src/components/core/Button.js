import React from 'react';
import { ActivityIndicator, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colours from '../../assets/colours';
import buttonStyles from '../../assets/styles/buttonStyles';

export default function Button({
  text,
  onPress,
  type,
  customClass,
  loading,
  disabled,
  style
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
        buttonStyles.button,
        type === 'light'
          ? buttonStyles.lightButton
          : type === 'submit'
          ? buttonStyles.submitButton
          : buttonStyles.darkButton,
        buttonStyles[customClass],
      ]}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator color={colours.white} />
      ) : (
        <Text
          style={[
            type === 'light'
              ? buttonStyles.lightButtonText
              : buttonStyles.darkButtonText,
            buttonStyles[`${customClass}Text`],
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
