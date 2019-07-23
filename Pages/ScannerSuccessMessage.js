import React from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Button, ListItem, Text, Input, Badge, Icon } from 'react-native-elements';
import ScannerButtonNav from './_ScannerButtonNav'


class ScannerRegisterMessage extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <ScannerButtonNav />
                </View>
                <View style={styles.camera}>
                    <Text style={{marginTop:'50px', textAlign: 'center'}}>Insert Camera Here</Text>
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
                                buttonStyle={{borderColor: '#5cd059', borderWidth: '8px'}}
                                titleStyle={{color: 'black', fontSize:'18px'}}
                                title="Checked In"
                                type="outline"
                            />
                            <Text style={{marginTop: '10px', borderBottomColor: '#C8C8C8', borderBottomWidth:'2px', paddingBottom: '8px', paddingTop: '8px'}}>
                                <Text style={{fontWeight: 'bold'}}>
                                    Email
                                </Text>
                                <Text style={{float: 'right'}}>
                                    JohnDoeAtDoeJohn@tamu.edu
                                </Text>
                            </Text>
                        
                            <Button
                                style={{marginTop: '15px'}}
                                buttonStyle={{backgroundColor: '#eee', borderWidth: '0px'}}
                                titleStyle={{color: 'white', fontSize:'18px'}}
                                title="User Registered"
                                type="outline"
                                disabled
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: '15px'
    },
    textInput: {
        borderWidth: '2px',
        borderColor: 'black',
        paddingLeft: "10px",
        marginTop: '15px',
        height: 40
    },
    camera: {
        // This would of been so easy if calc() was a thing
        position: 'fixed',
        top: '140px', 
        right: '0', 
        left: '0',
        bottom: '0',
        backgroundColor: "#ddd"
    },
    floatViewBottom: {
        position: 'fixed',
        bottom: '0', 
        right: '0', 
        left: '0',
        backgroundColor: 'white',
        height: '300px'
    },
});

export default ScannerRegisterMessage;