import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class HomeScreen extends React.Component {
 

  constructor(props){
    super(props)

    this.state = {
      
      events : [{
        "name":"",
        "created":"",
        "ended":"",
        "id_user":"",
        "id_cat":"",
      }],
    }
  }


    componentDidMount = async() => {
      await fetch('https://jonathan-prevedan.students-laplateforme.io/API/public/events', {
        method: 'GET',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        },
       
      }).then(res =>res.json())
      .then(resData =>{
       this.setState({events: resData.data});
 
      }).catch(err => alert("api error:", err))
      
  }




  render() {
    const {navigate} = this.props.navigation
    return (
      <ScrollView>
      <View>
        {this.state.events.map((test)=>
        (
          <View>
          <Card.Title>{test.name}</Card.Title>
          <Card style={{
            height : hp('20%'),
            width: wp('10%'),
          }}>
  
  
  <Card.Image style={{
    height:50,
    width:50,
    alignItems: 'center'
  }} source={require('../assets/favicon.png')}>
    
  </Card.Image>

  <Card.Divider/>
  <Text style={{marginBottom: 10}}>
      Description
    </Text>
    <Button
      icon={<Icon name='search' color='#ffffff' />}
      
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW'
      onPress={()=> navigate('CreateAccount')} />
</Card>

      
          </View>
        ))}
       
       <Button
      icon={<Icon name='search' color='#ffffff' />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: hp('2%'),}}
      title='Ajouter un evenement' />
      </View>
      </ScrollView>
    );
  }

}