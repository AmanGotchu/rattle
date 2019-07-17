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
import ScannerHome from './src/Pages/ScannerHome'

export default class AppLayout extends React.Component {
  componentDidMount() {
    this.setState({
      isLoggedIn: false,
      username: "",
      isInitiatingScan: false
    })
  }

  state = { 
    isLoggedIn: false,
    username: "",
    isInitiatingScan: false
  };

  updateAuthenticationStatus = (isLoggedIn, username = "") => {
    this.setState({
      isLoggedIn,
      username,
      isInitiatingScan: true
    })
  }


  render() {
    var {
      isLoggedIn,
      username,
      isInitiatingScan
    } = this.state; 
    let showLoginForm;
    let showLogoutOption;
    let showInitateScanPage;

    if(!isLoggedIn) {
      {this.updateAuthenticationStatus(true, 'adminUser')}
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

    if(isInitiatingScan) {
      // Load the dropdown scanning home page.
      showInitateScanPage = (
        <View>
          {showLogoutOption}
          <ScannerHome />
        </View>
      )
    }

    return (
      <View>
        <View style={styles.container}>
          {showLoginForm}
          {showInitateScanPage}
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
