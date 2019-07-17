import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button, 
  TouchableOpacity,
  TextInput
} from 'react-native';
import LoginForm from './src/Pages/LoginForm'

export default class AppLayout extends React.Component {
  state = { isLoggedIn: false };

  render() {
    var {
      isLoggedIn
    } = this.state; 
    let showLoginForm;


    if(!isLoggedIn) {
      showLoginForm = <LoginForm />
    }

    return (
      <View>
        <View style={styles.container}>
          {showLoginForm}
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: '15px'
  },
});
