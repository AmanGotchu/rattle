import React from 'react';
import {
    View,
} from 'react-native';
import { Button } from 'react-native-elements';


class NewScanButtonNav extends React.Component {
    render() {
        return (
            <View>
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
            </View>
        );
    }
}

export default NewScanButtonNav;
