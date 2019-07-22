import React from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Button, ListItem, Text, Input } from 'react-native-elements';


class LoginForm extends React.Component {
    componentDidMount() {
        this.setState({
            username: "",
            password: ""
        })
    }
    state = { username: "", password: "" };

    render() {
        return (
            <View style={styles.container}>
                <Text h3>Scanner Login</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    placeholder="Password"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <Button
                    style={{marginTop: '15px'}}
                    buttonStyle={{backgroundColor: '#C8C8C8', borderColor: '#C8C8C8'}}
                    titleStyle={{color: 'black', fontSize:'18px'}}
                    title="Login"
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
    textInput: {
        borderWidth: '2px',
        borderColor: 'black',
        paddingLeft: "10px",
        marginTop: '15px',
        height: 40
    }
});

export default LoginForm;