import React, { useState } from 'react';
import { Text,View,Image,  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 
import { white } from 'ansi-colors';



import { Platform } from 'react-native';
import { FONTS } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
export default function ProfileScreen ({route, navigation}) {

const[data,setData] = useState([]);


let {token} = route.params;
console.log(token)
    const getProfile = async () => {
        await fetch('https://jonathan-prevedan.students-laplateforme.io/API/public/user/update/2', {
              method: 'GET',
              headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
                'Authorization': token
              }, 
            }).then(res => res.json())
            .then(resData =>{
                
                console.log(resData)
            }).catch(err => alert("api error:", err))
            return(
                console.log('sheees')
            )
      }

    return(
        <SafeAreaView style={styles.container}>
  
        {getProfile()}
    </SafeAreaView>
    )
}



   
const styles = StyleSheet.create( {
    container: {
        flex: 1
      },
    });