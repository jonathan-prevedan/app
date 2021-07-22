import React, { useState } from 'react';
import { Text,View,Image,  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 
import { white } from 'ansi-colors';


import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { FONTS } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function RegisterScreen () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const[phone, setPhone] =useState("");
const [password, setPassword] = useState("");



const navigation = useNavigation();
    const register = async() =>{
        const payload ={name: name, email: email, phone_no: phone, password: password}
        
   fetch('https://jonathan-prevedan.students-laplateforme.io/API/public/user/register', {
       method:'POST',
       headers:{
           'Accept':'application/json',
           'Content-type':'application/json'
       },
       body: JSON.stringify(payload)
   })
    .then(res=>res.json())
    .then((resData)=>{
        console.log(resData)
        navigation.navigate('Login')
    },
    (error) =>{
        console.log(error);
    })
    }
  
    return(
      <ScrollView>
         <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding":  "height"}
          style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flexDirection: 'column', height: wp('100%'),}}>
              <Image source={{uri: 'https://i0.wp.com/laplateforme.io/wp-content/uploads/2019/06/logo-la-plateforme-resized.png?w=1080&ssl=1'}}
                  style={{width:hp('48%'),height:wp("100%")}}
              />
          <Text
              style={{...FONTS.h1, }}>
                  Salutations
          </Text>
              
          <View style={{paddingTop: '10%'}}>
          
              <Input style={{...FONTS.body1}}  
              placeholder='Name'
              leftIcon={
                  <Entypo name="user" size={24} color="#336699" />
              }
               onChangeText={text => setName(text)}
              />
          </View>
          <View style={{paddingTop: '1%'}}>
         
         <Input style={{...FONTS.body1}} 
         placeholder='Email'
         leftIcon={
             <Entypo name="email" size={24} color="#336699" />
         }
          onChangeText={text => setEmail(text)}
         />
     </View>

          <View style={{paddingTop: '1%'}}>
         
              <Input style={{...FONTS.body1}}  
              placeholder='phone'
              leftIcon={
                  <Entypo name="phone" size={24} color="#336699" />
              }
               onChangeText={text => setPhone(text)}
              />
          </View>
          <View style={{paddingTop: '1%'}}>
         
              <Input style={{...FONTS.body1}} 
              placeholder='Password'
              secureTextEntry={true}
              leftIcon={
                  <Entypo name="lock" size={24} color="#336699" />
              }
               onChangeText={text => setPassword(text)}
              />
          </View>
          <View style={{alignContent: 'center'}}>
          <Button
          onPress={() => {register()}}
          title="S'inscrire"
          style={{paddingLeft:'30%', width: wp('70%'), height: hp('10%')}}/>
     
          </View>
         
          </View>
          </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ScrollView>
  )
}
const styles = StyleSheet.create( {
  container: {
      flex: 1
    },
  });