import React from 'react';
import {
    StyleSheet,
    View,
    Picker,
} from 'react-native';
import { Button, ListItem, Text, Input } from 'react-native-elements';

class ScannerHome extends React.Component {
    componentDidMount() {
        this.setState({
            event: "",
            attribute: ""
        })
    }
    state = {
        event: "",
        attribute: ""
    };

    render() {
        var {
            event,
            attribute
        } = this.state

        return (
            <View style={styles.container}>
                <Text style={styles.floatTextTop}> LOG OUT </Text>
                <Text h3>Scanner Home</Text>
                
                <Picker
                    selectedValue={event}
                    style={styles.selectInput}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({event: itemValue})
                    }>
                    <Picker.Item label="Select an Event" value="" key=""/>
                    <Picker.Item label="Breakfast" value={0} key={0}/>
                    <Picker.Item label="Lunch" value={1} key={1}/>
                    <Picker.Item label="Dinner" value={2} key={2}/>
                </Picker>

                <Picker
                    mode="dropdown"
                    selectedValue={attribute}
                    style={styles.selectInput}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({attribute: itemValue})
                    }>
                    <Picker.Item label="No Attribute" value="" key=""/>
                    <Picker.Item label="Chicken" value={0} key={0}/>
                    <Picker.Item label="Beef" value={1} key={1}/>
                    <Picker.Item label="Vegan" value={2} key={2}/>
                </Picker>

                <Button
                    style={{marginTop: '15px'}}
                    buttonStyle={{backgroundColor: '#C8C8C8', borderColor: '#C8C8C8'}}
                    titleStyle={{color: 'black', fontSize:'18px'}}
                    title="New Scan"
                    type="outline"
                />

                <Button
                    style={styles.floatButtonBottom}
                    buttonStyle={{borderColor: '#C8C8C8', borderWidth: '4px'}}
                    titleStyle={{color: 'black', fontSize:'18px'}}
                    title="Instructions"
                    type="outline"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '20vh',
        marginLeft: "15px",
        marginRight: "15px"
    },
    selectInput: {
        borderWidth: '2px',
        borderColor: 'black',
        paddingLeft: "10px",
        paddingRight: "10px",
        marginTop: '15px',
        height: 50, 
        width: "100%"
    },
    floatButtonBottom: {
        position: 'fixed',
        bottom: '0', 
        margin: '10px', 
        marginBottom: '20px', 
        right: '0', 
        left: '0'
    },
    floatTextTop: {
        position: 'fixed',
        top: '0', 
        margin: '10px', 
        right: '0', 
        left: '0',
        textAlign: 'center',
        fontSize: "16px"
    }
});

export default ScannerHome;