import React from 'react';
import {View} from 'react-native';
import {styles} from './styles/appStyles';
//import Menu from './src/screens/menu/Menu';
import Login from './src/screens/login/Login';

const App = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
       {/*<Menu/>*/}
      <Login/>
    </View>
  );
};
export default App;
