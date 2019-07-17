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
  componentDidMount() {
    this.setState({
      isLoggedIn: false,
      username: "",
    })
  }

  state = { 
    isLoggedIn: false,
    username: ""
  };

  updateAuthenticationStatus = (isLoggedIn, username = "") => {
    this.setState({
      isLoggedIn,
      username
    })
  }


  render() {
    var {
      isLoggedIn,
      username
    } = this.state; 
    let showLoginForm;
    let showLogoutOption;

    if(!isLoggedIn) {
      showLoginForm = <LoginForm updateAuthenticationStatus={this.updateAuthenticationStatus}/>
    } else {
      showLogoutOption = (
        <Text style={styles.logoutNavText}
          onPress={(e) => this.updateAuthenticationStatus(false)}
        >
          Logged in as {username}. Press to logout 
        </Text>
      )
    }

    return (
      <View>
        <View style={styles.container}>
          {showLogoutOption}
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
  logoutNavText: {
    textAlign: 'center',
    top: 0,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: "100vw",
    position: "absolute",
    padding: "10px"
  }
});
