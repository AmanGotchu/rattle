import React from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    TextInput
} from 'react-native';
import { Button, ListItem, Text, Input } from 'react-native-elements';
import NewScanButtonNav from './_NewScanButtonNav'

var list = [
    {
        name: "John Doe",
        email: "JohnDoe@Email.com"
    },
    {
        name: "John Doe",
        email: "JohnDoe@Email.com"
    },
    {
        name: "John Doe",
        email: "JohnDoe@Email.com"
    }
]

class SearchUsers extends React.Component {
    componentDidMount() {
        this.setState({
            username: "John Doe",
        })
    }
    state = { username: "John Doe" };

    render() {
        return (
            <View style={styles.container}>
                <NewScanButtonNav />
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

                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            rightIcon={{name: 'add'}}
                            title={l.name}
                            subtitle={l.email}
                            Component={Text}
                            titleStyle={{width: '78vw'}}
                            onPress={() => console.log('Icon Pressed')}
                        />
                    ))
                }

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

export default SearchUsers;