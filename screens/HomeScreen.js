import React from 'react';
import { View, Text, Button } from 'react-native';


export default class HomeScreen extends React.Component {
 

  render() {

    return (
      <View>
        <Text>GROSSE VUE</Text>
      

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
        
        <Button title="Log out" onPress={this.logOut} />
      </View>
      </View>
    );
  }

}