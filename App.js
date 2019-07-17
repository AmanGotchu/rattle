import React from 'react';
import { StyleSheet, Text, View, Button  } from 'react-native';


class LoginForm extends React.Component {
  componentDidMount(){
    this.setState(previousState => (
      { 
        hasErrors: false
      }
    ))
  }
  state = { hasErrors: true };


  render() {
    return (
      <Text>{this.props.text}</Text>
    );
  }
}


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
        {showLoginForm}
      </View>
    );
  }
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.container}>Scanner Login</Text>
//       <Button
//         onPress={() => console.log('Button has been pressed')}
//         title="Login"
//         color="#C4C4C4"
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    padding: '15px'
  },
});

    // alignItems: 'center',
    // justifyContent: 'center',
