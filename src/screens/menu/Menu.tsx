import React from 'react';
import {Image, Text, View} from 'react-native';
import Button from '../../components/button/Button';
import Florero from '../../assets/florero.png';
import styles from './menu.styles';

const Menu = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Florero} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Login"
          button={() => console.log('Login')}
          buttonColor="#000000"
          textColor="#ffffff"
        />
        <Button
          text="Register"
          button={() => console.log('Register')}
          buttonColor="#ffffff"
          textColor="#000000"
        />
        <Text style={styles.guest}>Continuar como invitado</Text>
      </View>
    </View>
  );
};
export default Menu;
