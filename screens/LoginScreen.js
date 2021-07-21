
import React, { useState,  } from 'react';
import { Text,View,Image,  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 
import { white } from 'ansi-colors';


import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { FONTS } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Login () {
    const navigation = useNavigation();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [token, setToken] = useState("");



    const login = async() =>{
        
        const payload ={email: email, password: password}
        
   fetch('https://jonathan-prevedan.students-laplateforme.io/API/public/user/login', {
       method:'POST',
       headers:{
           'Accept':'application/json',
           'Content-type':'application/json'
       },
       body: JSON.stringify(payload)
   })
    .then(res=>res.json())
    .then((resData)=>{

        
       
       setToken(resData.data.token) 
      console.log(token)
     navigation.navigate('realhome');
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
            
                <Input style={styles.TextInputPH} 
                placeholder='Email'
                leftIcon={
                    <Entypo name="email" size={24} color="#336699" />
                }
                 onChangeText={text => setEmail(text)}
                />
            </View>

            <View style={{paddingTop: '1%'}}>
           
                <Input style={styles.TextInputPH} 
                placeholder='Password'
                leftIcon={
                    <Entypo name="lock" size={24} color="#336699" />
                }
                 onChangeText={text => setPassword(text)}
                />
            </View>
            <View style={{alignContent: 'center'}}>
            <Button
            onPress={() => {login()}}
            title="Already a member"
            style={{paddingLeft:'30%', width: wp('70%'), height: hp('10%')}}/>
       
            </View>
            <Button
            onPress={() => {navigation.navigate('Register')}}
            title="Register"
            style={{paddingLeft:'30%', width: wp('70%'), height: hp('10%')}}/>
            
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