import React from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Button, ListItem, Text, Input } from 'react-native-elements';


class ScannerView extends React.Component {
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
                    <Button
                        style={styles.floatButtonBottom}
                        buttonStyle={styles.floatingButtonConfirmationMessage}
                        titleStyle={{color: 'white', fontSize:'18px'}}
                        title="Scanning..."
                        type="outline"
                    />
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
    floatButtonBottom: {
        position: 'fixed',
        bottom: '0', 
        margin: '30px',
        right: '0', 
        left: '0'
    },
    floatingButtonConfirmationMessage: {
        padding: '10px', 
        borderColor: 'black', 
        borderWidth: '1px', 
        opacity: '.75', 
        backgroundColor: 'black', 
        borderRadius: '18px'
    }
});

export default ScannerView;