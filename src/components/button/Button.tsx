import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './button.styles';

type ButtonProps = {
  text: string;
  button: () => void;
  buttonColor: string;
  textColor: string;
};

const Button = ({text, button, buttonColor, textColor}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={button}
      style={[styles.button, {backgroundColor: buttonColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
