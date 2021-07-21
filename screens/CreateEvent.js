import React, {useState} from 'react'
import { Text,View,Image,  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 
import { white } from 'ansi-colors';


import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { FONTS } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function CreateEvent () {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [datefin, setDatefin]= useState("")    
    
    
        const postevent = async() =>{
            const payload ={name: name, description: description, created_at: date, end_at: datefin}
            
       fetch('https://jonathan-prevedan.students-laplateforme.io/API/public/events/create', {
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
            
           
           console.log(resData)
         
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
             
        
             
         <View style={{paddingTop: '10%'}}>
         
             <Input style={styles.TextInputPH} 
             placeholder='Email'
             leftIcon={
                 <Entypo name="email" size={24} color="#336699" />
             }
              onChangeText={text => setName(text)}
             />
         </View>

         <View style={{paddingTop: '1%'}}>
        
             <Input style={styles.TextInputPH} 
             placeholder='Password'
             leftIcon={
                 <Entypo name="lock" size={24} color="#336699" />
             }
              onChangeText={text => setDescription(text)}
             />
         </View>
         <View style={{paddingTop: '1%'}}>
        
             <Input style={styles.TextInputPH} 
             placeholder='Password'
             leftIcon={
                 <Entypo name="lock" size={24} color="#336699" />
             }
              onChangeText={text => setDate(text)}
             />
         </View>
         <View style={{paddingTop: '1%'}}>
        
             <Input style={styles.TextInputPH} 
             placeholder='Password'
             leftIcon={
                 <Entypo name="lock" size={24} color="#336699" />
             }
              onChangeText={text => setDatefin(text)}
             />
         </View>
         <View style={{alignContent: 'center'}}>
         <Button
         onPress={() => {postevent()}}
         title="Create Event"
         style={{paddingLeft:'30%', width: wp('70%'), height: hp('10%')}}/>
    
         </View>
         
         </View>
         </TouchableWithoutFeedback>
         </KeyboardAvoidingView>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})