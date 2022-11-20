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
  const [data, setData] = useState({});
  
  const [textUserUsername, setUserUsername] = useState('');
  const [textUserPassword, setUserPassword] = useState('');

  
  const getToken = () => {
    fetch('http://127.0.0.1:3000/wecare/login-user?username='+textUserUsername+'&password='+textUserPassword)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      
    
    //console.log(user)
   
  };

    const checkTextInput = () => {
     
      //Check for the Patient's TextInputs
      if (!textUserUsername.trim()) {
        alert('Please Enter Name');
        return;
      }
      if (!textUserPassword.trim()) {
        alert('Please Password');
        return;
      }

      getToken()
      if((data.token != undefined)) {
        console.log(data.token)
        navigation.navigate('Home', {
          token: data.token,
          password: textUserPassword
        })
      }
      else {
       
        alert('Please check your credencial');
      }  
      console.log(data.token)
    
    }


    return(
    <View>
     {/* <Text onChangeText={(value) => setToken(value)}>Hey</Text> */}
    
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