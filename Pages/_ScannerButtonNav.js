import React from 'react';
import {
    View,
} from 'react-native';
import { Button } from 'react-native-elements';


class ScannerButtonNav extends React.Component {
    render() {
        return (
            <View>
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
                <View style={
                    {
                        borderBottomColor: 'black', 
                        borderBottomWidth: 1, 
                        paddingTop: '30px', 
                        marginBottom: '15px'
                    }
                } />
            </View>
        );
    }
}

export default ScannerButtonNav;
