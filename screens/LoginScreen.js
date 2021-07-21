// import React from 'react';

// import { Text,View,Image,  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet} from 'react-native';
// import { Input, Button } from 'react-native-elements';
// import { Entypo } from '@expo/vector-icons'; 
// import { white } from 'ansi-colors';



// import { Platform } from 'react-native';
// import { FONTS } from '../constants';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




// export default class Login extends React.Component{
//   constructor(props){
//     super(props)

//     this.state = {
//       email: '',
//       password: '',
//       token: '',
//       login : false,
//     }
//   }
  
//   login= async() =>{
//       const payload ={email: this.state.email, password: this.state.password}
//    fetch('https://jonathan-prevedan.students-laplateforme.io/API/public/user/login', {
//        method:'POST',
//        headers:{
//            'Accept':'application/json',
//            'Content-type':'application/json'
//        },
//        body: JSON.stringify(payload)
//    })
//     .then(res=>res.json())
//     .then((resData)=>{
//     //     console.log(resData);
//     //    this.setState({token:resData.data.token})
//     //    console.log(this.state.token)
        
//     if(this.state.token ==='')
//     {
//         this.setState({token: resData.data.token})
//         console.log(this.state.token)
        
        
//      this.props.navigation.navigate('profile', {token : this.state.token})
//     }
      
//     },
//     (error) =>{
//         console.log(error);
//     })
//   }
   

  
  
//     render(){
           
            
            
//             const {navigate} = this.props.navigation
//         return(
//           <ScrollView>
//             <KeyboardAvoidingView
//             behavior={Platform.OS === "ios" ? "padding":  "height"}
//             style={styles.container}>
//               <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//             <View style={{flexDirection: 'column', height: wp('100%'),}}>
//                 <Image source={{uri: 'https://i0.wp.com/laplateforme.io/wp-content/uploads/2019/06/logo-la-plateforme-resized.png?w=1080&ssl=1'}}
//                     style={{width:hp('48%'),height:wp("100%")}}
//                 />
//             <Text
//                 style={{...FONTS.h1, }}>
//                     Salutations
//             </Text>
                
//             <View style={{paddingTop: '10%'}}>
            
//                 <Input style={styles.TextInputPH} 
//                 placeholder='Email'
//                 leftIcon={
//                     <Entypo name="email" size={24} color="#336699" />
//                 }
//                  onChangeText={(text) => this.setState({email:text})}
//                 />
//             </View>

//             <View style={{paddingTop: '1%'}}>
           
//                 <Input style={styles.TextInputPH} 
//                 placeholder='Password'
//                 leftIcon={
//                     <Entypo name="lock" size={24} color="#336699" />
//                 }
//                  onChangeText={(text) => this.setState({password:text})}
//                 />
//             </View>
//             <View style={{alignContent: 'center'}}>
//             <Button
//             onPress={() => {this.login();}}
//             title="Already a member"
//             style={{paddingLeft:'30%', width: wp('70%'), height: hp('10%')}}/>
       
//             </View>
//             <Button
//             onPress={() => {navigate('Register')}}
//             title="Register"
//             style={{paddingLeft:'30%', width: wp('70%'), height: hp('10%')}}/>
            
//             </View>
//             </TouchableWithoutFeedback>
//             </KeyboardAvoidingView>
//           </ScrollView>
//         )
        
//     }
    
    
// }
// const styles = StyleSheet.create( {
//     container: {
//         flex: 1
//       },
//     });
// // import React, { useState } from 'react';
// // import { View, Text, Button } from 'react-native';
// // import { login } from '../api/mock';
// // import { getToken } from '../api/token';
// // const LoginScreen = ({ navigation }) => {
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const loginUser = () => {
// //     setErrorMessage('');
// //     login('test@test.ca', 'password', true)
// //     .then(async (res) => {
// //       await setToken (res.auth_token);
// //       navigation.navigate('Home');
// //     })
// //       .catch((err) => setErrorMessage(err.message));
// //   };

// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>LoginScreen</Text>
// //       <Button title="Log in" onPress={loginUser} />
// //       <Button
// //         title="Create account"
// //         onPress={() => navigation.navigate('CreateAccount')}
// //       />
// //       {errorMessage ? <Text>{errorMessage}</Text> : null}
// //     </View>
// //   );
// // };

// // export default LoginScreen;



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

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [token, setToken] = useState("");


const navigation = useNavigation();
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
        
       
       setToken(resData.data.token) 
      console.log(token)
     
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