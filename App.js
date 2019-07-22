import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements';
import LoginForm from './Pages/LoginForm'
import ScannerHome from './Pages/ScannerHome'
import ScannerView from './Pages/ScannerView'

// Hard Coded State Variables
const list = [
  {
    text: 'Scanner Login',
    val: 'login',
    completed: true
  },
  {
    text: 'Scanner Home',
    val: 'home',
    completed: true
  },
  {
    text: 'Actual Scanner',
    val: 'scanner',
    completed: true
  },
  {
    text: 'Scanner Register Message',
    val: 'registerMessage',
    completed: false
  },
  {
    text: 'Scanner Normal Message',
    val: 'scannerMessage',
    completed: false
  },
  {
    text: 'New Scan Page',
    val: 'newScan',
    completed: false
  },
  {
    text: 'Search Users',
    val: 'search',
    completed: false
  }
]

export default class AppLayout extends React.Component {
  componentDidMount() {
    this.setState({
      pageView: "selector"
    })
  }

  state = {
    pageView: "selector",
  };

  render() {
    var {
      pageView,
    } = this.state;

    return (
      // <LoginForm />
      // <ScannerHome />
      <ScannerView />
    )
    
    // return (
    //   <View style={styles.container}>
    //     <Text h3> Click for page view</Text>
    //     {
    //       list.map((item, i) => (
    //         <Text key={i} style={styles.TextItem} h4
            
    //         >
    //           {item.text} {'(Completed - ' + item.completed + ')'}
    //         </Text>
    //       ))
    //     }
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: '15px'
  },
  TextItem: {
    color: 'blue',
    padding: 10,
  }
});