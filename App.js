import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements';
import LoginForm from './Pages/LoginForm'
import ScannerHome from './Pages/ScannerHome'
import ScannerView from './Pages/ScannerView'
import ScannerRegisterMessage from './Pages/ScannerRegisterMessage'
import ScannerSuccessMessage from './Pages/ScannerSuccessMessage'
import NewScanPage from './Pages/NewScanPage'
import SearchUsers from './Pages/SearchUsers'
import Overlay from './Pages/Overlay'

export default class AppLayout extends React.Component {
  render() {
    return (
      // Comment / Uncomment Pages
      <View>
        {/* <LoginForm /> */}
        {/* <ScannerHome /> */}
        {/* <ScannerView /> */}
        <ScannerRegisterMessage />
        {/* <ScannerSuccessMessage /> */}
        {/* <NewScanPage /> */}
        {/* <SearchUsers /> */}
        {/* <Overlay /> */}
      </View>
    )
  }
}