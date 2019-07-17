import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Picker
} from 'react-native';

// IMPORTANT
// Remember to correctly configure the picker.items

var pickerData = {
    "Lunch":  {
        "Beef": 'beef',
        "Chicken": 'chicken',
        "Vegan": 'vegan'
    },
    "Dinner" : {
        "Chicken w/ sides": '0',
        "Chicken ": '1',
        "Vegan": '2'
    }
} 


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
        let remainderOfForm;
        var count = 0;

        if(event != "") {
            remainderOfForm = (
                <View>
                    <Picker
                    selectedValue={attribute}
                    style={styles.selectInput}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({attribute: itemValue})
                    }>
                    <Picker.Item label="No Attribute" value="" key=""/>
                    {Object.keys(pickerData[event]).map((key) => {
                        return (<Picker.Item label={key} value={pickerData[event][key]} key={pickerData[event][key]}/>)
                    })}
                    {/* {pickerData[event].forEach((attr) => {
                        return (<Picker.Item label={attr} value={attr} key={attr}/>)
                    })} */}
                    </Picker>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleLoginSubmit}
                    >
                        <Text style={styles.buttonText}> New Scan </Text>
                    </TouchableOpacity>

                </View>
            )
        }


        return (
            <View style={styles.viewSpacer}>
                <Text style={styles.textHeader}>Scanning Home</Text>
                <Text style={styles.helpText}>
                    Need Help? Click for Instructions.
                </Text>

                <Picker
                selectedValue={event}
                style={styles.selectInput}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({event: itemValue})
                }>
                <Picker.Item label="Select an Event" value="" key=""/>
                {Object.keys(pickerData).map((key) => {
                    return (<Picker.Item label={key} value={key} key={key}/>)
                })}
                </Picker>

                {remainderOfForm}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewSpacer: {
        paddingTop: '20vh'
    },
    textHeader: {
        fontSize: '21px',
        letterSpacing: '.05em',
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        padding: 10
    },
    buttonTwo: {
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        position: "absolute",
        bottom: 0,
        padding: 10
    },
    helpText: {
        paddingBottom: '60px',
        bottom: 0,
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#17a2b8',
        textDecorationLine: 'underline'
    },
    selectInput: {
        borderWidth: '2px',
        borderColor: 'black',
        paddingLeft: "10px",
        paddingRight: "10px",
        marginBottom: '10px',
        height: 50, 
        width: "100%"
    },
    errorText: {
        color: 'red',
        paddingTop: '10px',
        fontSize: '16px'
    }
});

export default ScannerHome;