import React from 'react';
import { Text,View,Image, TextInput, Button} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { white } from 'ansi-colors';
import axios from 'axios';
import { MMKV } from 'react-native-mmkv';


export default class Login extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: '',
      password: '',
      token: ''
    }
  }


    Login = async() => {
      await fetch('https://jonathan-prevedan.students-laplateforme.io/API/public/user/login', {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        },
        body: JSON.stringify({
          'email': this.state.email,
          'password': this.state.password,
        })
      }).then(res =>res.json())
      .then(resData =>{
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === false ||this.state.email === "" ){
          alert(resData.message.email);
      }
      if(this.state.password ==="")
      {
        alert(resData.message.password)
      }
      // token_u = resData.data.token,
      // alert(token_u)
     this.state.token = resData.data.token
     alert(this.state.token)
     if(this.state.token != "")
     {
      this.props.navigation.navigate('Home')
     }
      }).catch(err => alert("api error:", err))
      
  }

  GetAuth = () => {
    axios.get('https://jonathan-prevedan.students-laplateforme.io/API/public/user/login', {
      
    })
  }
    render(){
        const styles = {
            A: {
                fontFamily:"Inter_900Black",
                            
                            textAlign:"center",
                            marginTop:5,
                            opacity:0.4,
            },
            B : {
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:50,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2
            },

            C : 
            {
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:15,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2
            },

            D: {
                marginHorizontal:55,
                alignItems:"center",
                justifyContent:"center",
                marginTop:20,
                backgroundColor:"#00716F",
                paddingVertical:10,
                borderRadius:23
            },

            Title : 
            {
                fontSize:24, fontFamily:"Inter_900Black", alignSelf:"center", fontWeight:"bold"
            },
            TextInputPH :
            {
                paddingHorizontal:10
            },
            TextLog :
            {
                color:"white",
                fontFamily:"Inter_900Black"
            },
            TextNewU :
            {
                alignSelf:"center",
                color:"#00716F",
                fontFamily:"Inter_900Black",
                paddingVertical:30
            },
            };
            
            const {navigate} = this.props.navigation
        return(
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
                 onChangeText={(text) => this.setState({email:text})}
                />
            </View>

            <View style={styles.C}>
            <Entypo name="lock" size={24} color="black" />
                <TextInput style={styles.TextInputPH} 
                 onChangeText={(text) => this.setState({password:text})}
                />
            </View>
            <View style={styles.D}>
            <Button
            onPress={() => {this.Login();}}
            title="Already a member"
            style={styles.TextLog}/>
       
            </View>
           
            <Button
             title="New User"
             onPress={()=>navigate('CreateAccount')} style={styles.TextNewU}/>
            
            </View>
        )
        
    }
    
    
}
// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import { login } from '../api/mock';
// import { getToken } from '../api/token';
// const LoginScreen = ({ navigation }) => {
//   const [errorMessage, setErrorMessage] = useState('');
//   const loginUser = () => {
//     setErrorMessage('');
//     login('test@test.ca', 'password', true)
//     .then(async (res) => {
//       await setToken (res.auth_token);
//       navigation.navigate('Home');
//     })
//       .catch((err) => setErrorMessage(err.message));
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>LoginScreen</Text>
//       <Button title="Log in" onPress={loginUser} />
//       <Button
//         title="Create account"
//         onPress={() => navigation.navigate('CreateAccount')}
//       />
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
//     </View>
//   );
// };

// export default LoginScreen;