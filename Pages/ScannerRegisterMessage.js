import React from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Button, ListItem, Text, Input, Badge, Icon } from 'react-native-elements';


class ScannerRegisterMessage extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Button
                        buttonStyle={{backgroundColor: '#C8C8C8', borderColor: '#C8C8C8'}}
                        titleStyle={{color: 'black', fontSize:'18px'}}
                        title="Return to Scanning Home"
                        type="outline"
                    />
                    <Button
                        style={{marginTop: '10px'}}
                        buttonStyle={{borderColor: '#C8C8C8', borderWidth: '4px'}}
                        titleStyle={{color: 'black', fontSize:'18px'}}
                        title="Search Manually"
                        type="outline"
                    />
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
                                buttonStyle={{borderColor: '#ffd9d9', borderWidth: '8px'}}
                                titleStyle={{color: 'black', fontSize:'18px'}}
                                title="Not Checked In"
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
                                buttonStyle={{backgroundColor: '#C8C8C8', borderColor: '#C8C8C8'}}
                                titleStyle={{color: 'black', fontSize:'18px'}}
                                title="Register User"
                                type="outline"
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