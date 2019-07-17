import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

class LoginForm extends React.Component {
    componentDidMount() {
        this.setState({
            hasErrors: false,
            username: "",
            password: ""
        })
    }
    state = { hasErrors: true, username: "", password: "" };


    /*
      Todo. Add error handling. If when submit button is invalid the username / password is wrong
      make hasErrors true to show error form.
    */

    handleLoginSubmit = () => {
        var {
            username,
            password
        } = this.state;
        console.log('Login has been pressed with username', username)

        // TODO --> Actually implement authentication checks
        if (username == "" || password == "") {
            console.log('Invalid entry')
            this.setState({
                hasErrors: true,
                password: ""
            })
        } else {
            // Update the isLoggedIn state of parent.
            this.props.updateAuthenticationStatus(true, username)
        }
    }

    render() {
        var {
            hasErrors
        } = this.state;
        let formErrorMessage;

        if (hasErrors) {
            formErrorMessage = <Text style={formStyles.errorText}> Invalid credentials. Please try again. </Text>
        }

        return (
            <View style={formStyles.viewSpacer}>
                <Text style={formStyles.textHeader}>Scanner Login</Text>
                <TextInput
                    style={formStyles.textInput}
                    placeholder="Username"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    secureTextEntry={true}
                    style={formStyles.textInput}
                    placeholder="Password"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />

                <TouchableOpacity
                    style={formStyles.button}
                    onPress={this.handleLoginSubmit}
                >
                    <Text style={formStyles.buttonText}> Login </Text>
                </TouchableOpacity>

                {formErrorMessage}

            </View>
        );
    }
}

const formStyles = StyleSheet.create({
    viewSpacer: {
        paddingTop: '20vh;'
    },
    textHeader: {
        fontSize: '21px',
        letterSpacing: '.05em',
        fontWeight: 'bold',
        paddingBottom: '30px'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        padding: 10
    },
    buttonText: {
        fontSize: '16px',
        fontWeight: 'bold'
    },
    textInput: {
        borderWidth: '2px',
        borderColor: 'black',
        paddingLeft: "10px",
        marginBottom: '10px',
        height: 40
    },
    errorText: {
        color: 'red',
        paddingTop: '10px',
        fontSize: '16px'
    }
});

export default LoginForm;