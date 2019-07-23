import React from 'react';
import {
    View,
} from 'react-native';
import { Text } from 'react-native-elements';


class EmailComponent extends React.Component {
    render() {
        return (
            <View>
                <Text style={{position: 'relative', top: '19px', fontWeight: 'bold'}}>
                    EMAIL
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text>JohnDoeAtDoeJohn@tamu.edu</Text>
                </View>
                <View style={
                    {
                        borderBottomColor: '#ddd', 
                        borderBottomWidth: 1, 
                        marginBottom: '10px'
                    }
                } />
            </View>
        );
    }
}

export default EmailComponent;
