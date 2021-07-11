import React from 'react';
import { Text,View,Image, TextInput, Button, Alert} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'
import axios from 'axios'
import { interpolate } from 'react-native-reanimated';

export default class Login extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
          name: '',
          email: '',
          phone_no: '',
          password: '',
          cpassword :''
        }
        
      }

    PostUser = async() => {

      
      
      await fetch('https://jonathan-prevedan.students-laplateforme.io/API/public/user/register', {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        },
        body: JSON.stringify({
          'name': this.state.name,
          'email': this.state.email,
          'phone_no': this.state.phone_no,
          'password': this.state.password,
          'cpassword': this.state.cpassword,
        })
      }).then(res => res.json())
      .then(resData =>{
        if(this.state.name ==="")
      {
        alert(resData.message.name)
      }
      // if(this.state.email === "")
      // {
        
      //   alert(resData.message.email)
      // }
      
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === false ||this.state.email === "" ){
          alert(resData.message.email);
      }

      if(this.state.phone_no === "")
      {
        alert(resData.message.phone_no)
      }
      if(this.state.password ==="" || this.state.cpassword==="")
      {
        alert(resData.message.password)
      }
      if(this.state.password != this.state.cpassword )
      {
        alert("differents passwords")
      }
        alert(resData.messages)
        this.navigate('Login')
      }).catch(err => alert("api error:", err))
    
      
    // axios
    // .post('https://jonathan-prevedan.students-laplateforme.io/API/public/user/register',{
    //     'name': this.state.name,
    //     'email': this.state.email,
    //     'phone_no': this.state.phone_no,
    //     'password': this.state.password,
    //     'cpassword': this.state.cpassword,
    // }).then(response => {
    //     Alert.alert("ok")
    // }).catch(err => Alert.alert("api error:", err.message))
    
    }    
    render(){
        const styles = {
            A: {
                fontFamily:"Inter_900Black",
                            fontSize:"24",
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
            TextInputstyle :
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
          
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="#00716F"
                style={styles.TextInputPH}
                onChangeText={(text) => this.setState({name:text})} />
            </View>
            <View style={styles.C}>
          
          <TextInput 
          placeholder="Email"
          placeholderTextColor="#00716F"
          style={styles.TextInputPH}
          onChangeText={(text) => this.setState({email:text})} />
      </View>
            <View style={styles.C}>
              
                <TextInput 
                placeholder="phone_no"
                placeholderTextColor="#00716F"
                style={styles.TextInputPH} 
                onChangeText={(text) => this.setState({phone_no:text})}/>
            </View>
            <View style={styles.C}>
              
              <TextInput 
              placeholder="password"
              placeholderTextColor="#00716F"
              style={styles.TextInputPH}
              onChangeText={(text) => this.setState({password:text})} />
          </View>
          <View style={styles.C}>
              
              <TextInput 
              placeholder="confirm_password"
              placeholderTextColor="#00716F"
              style={styles.TextInputPH} 
              onChangeText={(text) => this.setState({cpassword:text})}/>
          </View>
            <View style={styles.D}>
            <Text 
            onPress={() => {this.PostUser();}}
            style={styles.TextLog}>Register</Text>
       
            </View>
           

            
            </View>
        )
        
    }
    
    
}
// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { createAccount } from '../api/mock';

// const CreateAccount = ({ navigation }) => {
//     const [errorMessage, setErrorMessage] = useState('');
//   const createUser = () => {
//     setErrorMessage('');
//     createAccount('test@test.ca', 'password')
//     .then(async (res) => {
//         await setToken(res.auth_token);
//         navigation.navigate('Home');
//       })
//       .catch((err) => console.log('error:', err.message));
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>CreateAccount</Text>
//       <Button title="Create user" onPress={createUser} />
//       <Button title="Log in" onPress={() => navigation.navigate('Login')} />
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
//     </View>
//   );
// };

// export default CreateAccount;