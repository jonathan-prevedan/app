import React, { useState } from 'react';
import { Text,View,Image,  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 
import { white } from 'ansi-colors';



import { Platform } from 'react-native';
import { FONTS } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Login () {

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
    //     console.log(resData);
    //    this.setState({token:resData.data.token})
    //    console.log(this.state.token)
        console.log(token)
    if(token ==='')
    {
        setToken(resData.data.token)
        console.log(token)
    }
      
    },
    (error) =>{
        console.log(error);
    })
    }


    const navigation = useNavigation();
    return(
        <ScrollView>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{backgroundColor: "#FFF", height:"100%"}}>
                <Image source={{uri: 'https://i0.wp.com/laplateforme.io/wp-content/uploads/2019/06/logo-la-plateforme-resized.png?w=1080&ssl=1'}}
                    style={{width:"50%",height:"50%"}}
                />
            <Text
                style={styles.Title}>
                    Salutations
            </Text>
            <Text style={styles.A}>
                La plateforme BDE app
            </Text>
            <View style={styles.B}>
            <Entypo name="lock" size={24} color="black" />
                <TextInput style={styles.TextInputPH} 
                 onChangeText={(text) => setEmail({email:text})}
                />
            </View>

            <View style={styles.C}>
            <Entypo name="lock" size={24} color="black" />
                <TextInput style={styles.TextInputPH} 
                 onChangeText={(text) => setPassword({password:text})}
                />
            </View>
            <View style={styles.D}>
            <Button
            onPress={() => {login()}}
            title="Already a member"
            style={styles.TextLog}/>
       
            </View>
           
            <Button
             title="New User"
             onPress={()=>navigation.navigate('CreateAccount')} style={styles.TextNewU}/>
            
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