import React from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Button, ListItem, Text, Input, Badge, Icon } from 'react-native-elements';
import EmailComponent from './_EmailComponent';


class ScannerRegisterMessage extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.overlay}>

                </View>
                <View style={styles.floatViewBottom}>
                    <Text style={{textAlign: 'right', paddingTop: '10px', paddingRight: '10px'}}>
                        <Icon
                            name='times'
                            type='font-awesome'
                            color='black'
                            onPress={() => console.log('Icon Pressed')}
                        />  
                    </Text>
                    <View style={{paddingLeft: "20px", paddingRight: "20px"}}>
                        <Text>
                            <Text style={{padding: '8px', backgroundColor:"#ffd9d9", marginRight: "15px"}}>
                                EVENT
                            </Text>
                            <Text style={{padding: '8px', backgroundColor:"#d9efff"}}>
                                ATTRIBUTE
                            </Text>
                        </Text>
                        <Text h4 style={{marginTop: '12px'}}>
                            John Smith
                        </Text>
                        <Button
                            style={{marginTop: '10px'}}
                            buttonStyle={{borderColor: '#ffd9d9', borderWidth: '8px'}}
                            titleStyle={{color: 'black', fontSize:'18px'}}
                            title="Not Checked In"
                            type="outline"
                        />
                        
                        <EmailComponent />
                    
                        <Button
                            style={{marginTop: '15px'}}
                            buttonStyle={{backgroundColor: '#C8C8C8', borderColor: '#C8C8C8'}}
                            titleStyle={{color: 'black', fontSize:'18px'}}
                            title="Register User"
                            type="outline"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    floatViewBottom: {
        position: 'fixed',
        bottom: '0', 
        right: '0', 
        left: '0',
        backgroundColor: 'white',
        height: '300px'
    },
    overlay: {
        position: 'fixed',
        top: '0', 
        bottom: '300px', 
        right: '0', 
        left: '0',
        opacity: .75,
        backgroundColor: 'black',
    }
});

export default ScannerRegisterMessage;