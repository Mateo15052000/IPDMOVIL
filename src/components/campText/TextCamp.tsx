import React from 'react';
import {TextInput} from 'react-native';
import styles from './textCamp.styles';

type ButtonProps = {
  placeholder: string;
};

const TextCamp = ({placeholder}: ButtonProps) => {
  return (
    <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor= "#B3B3B3"
    //secureTextEntry={true}
    //value={password}
    //onChangeText={setPassword}
  />
  );
};

export default TextCamp;
