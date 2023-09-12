import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  type?: 'default' | 'transparent';
  text: string;
}

export const Button = ({ onPress, text, type = 'default' }: ButtonProps) => {
  const color = type === 'default' ? 'white' : 'black';
  return (
    <TouchableOpacity
      style={styles[type]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={{ color }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  transparent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'purple',
  },
});
