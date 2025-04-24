import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './login.styles';
import TextCamp from '../../components/campText/TextCamp';
import Button from '../../components/button/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const App = (): React.JSX.Element => {
  //const [showPassword, setShowPassword] = useState(false);
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>
      <TextCamp placeholder="Enter your email" />
      <TextCamp  placeholder="Enter your password" />
      {/*<View style={styles.passwordContainer}>
        <TextCamp  placeholder="Enter your password" />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>*/}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
      <Button
          text="Login"
          button={() => console.log('Login')}
          buttonColor="#000000"
          textColor="#ffffff"
        />
      </TouchableOpacity>

      <Text style={styles.orText}>Or Login with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-apple" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.registerText}>
        Don’t have an account?{' '}
        <Text style={styles.registerNow}>Register Now</Text>
      </Text>
    </SafeAreaView>
  );
};
export default App;
