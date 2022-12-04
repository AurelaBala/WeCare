import * as React from 'react';
import { Component, useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, DatePicker } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


 //var userUsername = ""
//var inputPassword = ""
//var data = ""
var user = ""
//var pass = ""


function HomeScreen ({})  {
  const navigation = useNavigation();
 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = React.useState({});
  
  const [textUserUsername, setUserUsername] = useState('');
  const [textUserPassword, setUserPassword] = useState('');

  
  // const getToken = async() => {
   
  //   fetch('http://127.0.0.1:3000/wecare/login-user?username='+textUserUsername+'&password='+textUserPassword)
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
      
    
  //   //console.log(user)
   
  // };


  
  // useEffect(()=> {
  //   //var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkF1cmVsYSIsImlhdCI6MTY2ODYxNDE4MX0.JldNNuROQ_fhskcNI-aIKmOoiUxOkmQOGYtz9OgLBEY"
  //     fetch('http://127.0.0.1:3000/wecare/login-user?username='+textUserUsername+'&password='+textUserPassword)
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));

  // }, []);

  // React.useEffect(() => {
  //   const focusHandler = navigation.addListener('focus', () => {
  //     fetch('http://127.0.0.1:3000/wecare/login-user?username='+textUserUsername+'&password='+textUserPassword)
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  //   });
  //   return focusHandler;
  // }, [navigation]);



 
  const getToken = async () => {
    try{
      const response = await fetch('https://we-care-centennial.herokuapp.com/wecare/login-user?username='+textUserUsername+'&password='+textUserPassword);
      const json = await response.json();
      setData(json);
     
    }catch(err){
      console.error(err);
    }finally{
      setLoading(false);
    }
  }
  
   React.useEffect(()=>{getToken()}, []);

    const checkTextInput =  () => {
      //getToken()
      //Check for the Patient's TextInputs
      if (!textUserUsername.trim()) {
        alert('Please enter your username');
        return;
      }
      if (!textUserPassword.trim()) {
        alert('Please enter your password');
        return;
      }

     
    fetch('https://we-care-centennial.herokuapp.com/wecare/login?username='+textUserUsername+'&password='+textUserPassword).
     then((response)=>{
      console.log(response);
      response.json().
     then((json)=>{setData(json);
     console.log(json)
     console.log(json.token)
      if((json.token != undefined)) {
        console.log(json.token)
        navigation.navigate('Home', {
          token: json.token,
          password: textUserPassword
        })
      }
      else {
       
        alert('Please check your credencial');
      }  
      console.log(json.token)
     }
    ).catch((err)=>{console.error(err);})
    .finally(()=>{setLoading(false);});
    
    })}

  


    return(
    <View>
      
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Image style = {styles.logo} source={require('../../images/logo-wecare.png')} />
                </View>
                {/* <Text style={styles.label}>Email:</Text> */}
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter Your Username"
              onChangeText={(value) => setUserUsername(value)}
             //onChange={(getToken)}
              //onChangeText={(text) => userUsername({text}) }
              />
            
              {/* <Text style={styles.label}>Password:</Text> */}
              <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter Your Password"
              secureTextEntry={true}
              //onChange={(getToken)}
              onChangeText={(value) => setUserPassword(value)}
              />
              <TouchableOpacity style = {styles.submitButton}
              onPress={checkTextInput}>
            <Text style = {styles.submitButtonText}>Log In</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity  style = {styles.submitButton}
            onPress={() => navigation.navigate('Sign up')
            
            }>
                <Text style = {styles.submitButtonText}>Sign Up Instead</Text>
            </TouchableOpacity>
            </View>


    </View>

    );
}




export default HomeScreen;


const styles = StyleSheet.create({
    input: {
       marginLeft: 15,
       marginRight: 15,
       marginTop:10,
       borderWidth: 2,
       borderColor: 'mediumpurple',
       padding: 10,
    },
    submitButtonText:{
        textAlign: "center",
        color: '#fff',
        fontSize: 18,
     },
     submitButton: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        backgroundColor: 'midnightblue',
        padding: 10,
     },
    
    label:{
       marginLeft: 15,
    },
    logo:{
            width: 100,
            height: 100,       
    }
 })