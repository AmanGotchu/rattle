import React from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Button, ListItem, Text, Input } from 'react-native-elements';


class NewScanPage extends React.Component {
    componentDidMount() {
        this.setState({
            username: "John Doe",
        })
    }
    state = { username: "John Doe" };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    style={{marginTop: '10px'}}
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

                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: '30px', marginBottom: '15px'}} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Search User by Name"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <Button
                    style={{marginTop: '15px'}}
                    buttonStyle={{backgroundColor: '#C8C8C8', borderColor: '#C8C8C8'}}
                    titleStyle={{color: 'black', fontSize:'18px'}}
                    title="Search User"
                    type="outline"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: "15px",
        marginRight: "15px"
    },
    textInput: {
        borderWidth: '2px',
        borderColor: 'black',
        paddingLeft: "10px",
        marginTop: '15px',
        height: 40
    }
});

export default NewScanPage;