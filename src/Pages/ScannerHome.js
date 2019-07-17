import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Modal,
    Picker,
    TouchableHighlight 
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
            attribute: "",
            instructionsVisible: false
        })
    }
    state = {
        event: "",
        attribute: "",
        instructionsVisible: false
    };

    showInstructions(visible) {
        this.setState({instructionsVisible: !this.state.instructionsVisible});
      }
    

    render() {
        var {
            event,
            attribute,
            instructionsVisible
        } = this.state
        let remainderOfForm;
        let instructionText;
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
                </View>
            )
        }

        if(instructionsVisible) {
            instructionText = (
                <View>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita esse atque ullam suscipit explicabo et dolorem veniam sit magni vitae rerum aliquam impedit placeat repellendus recusandae facere quas rem doloremque eos possimus enim, soluta eveniet? Sint ullam tempore facilis voluptas sit. Corrupti sed est numquam doloribus reiciendis distinctio odio eveniet.
                    </Text>
                </View>
            )
        }
        

        return (
            <View style={styles.viewSpacer}>
                
                <Text style={styles.textHeader}>Scanning Home</Text>

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

                <TouchableOpacity
                disabled = {event == ""}
                style={styles.button}
                onPress={this.handleLoginSubmit}
                >
                    <Text style={styles.buttonText}>
                        {(event == "") ? 'No Event Selected': 'New Scan'}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.helpText}
                onPress={() => {
                    this.showInstructions(true);
                }}
                >
                    Need Help? Click for Instructions.
                </Text>
                {instructionText}
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
        paddingBottom: '60px'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        padding: 10,
        marginTop: 15
    },
    buttonTwo: {
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        position: "absolute",
        bottom: 0,
        padding: 15
    },
    helpText: {
        paddingBottom: '20px',
        bottom: 0,
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#17a2b8',
        textDecorationLine: 'underline',
        paddingTop: '10px'
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