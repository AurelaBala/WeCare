import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Linking} from 'react-native';
import { Link, useNavigation, navigate} from '@react-navigation/native';
import  {useState} from 'react';

function SignInScreen({}) {
    const navigation = useNavigation();
   

    const [textUserName, setUserName] = useState('');
    const [textUserEmail, setUserEmail] = useState('');
    const [textUserPassword, setUserPassword] = useState('');
    
   
    const checkTextInput = () => {
      //Check for the Patient's TextInputs
      if (!textUserName.trim()) {
        alert('Please Enter Your Name');
        return;
      }
      if (!textUserEmail.trim()) {
        alert('Please Enter Your email');
        return;
      }
      if (textUserPassword.length < 8){
        alert('Your password must be at least 8 characters');
        return;
      }
  
      //if all text inputs are not empty, get their values
      userName = textUserName
      this.userEmail = textUserEmail
      this.userPassword = value
      //call create user method
      createUser()
      navigation.navigate('Sign in')
      alert('User was added Successfuly');
    };


    const createUser = () => {
      fetch('https://we-care-centennial.herokuapp.com/wecare/user?username='+textUserName+'&email='+textUserEmail+'&password='+textUserPassword, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        });
  }

  const [value, setValue] = useState(1);
    return(
        <View>
            <View>
               
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Image style = {styles.logo} source={require('../../images/logo-wecare.png')} />
                </View>
              
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter Your Username"
              onChangeText={(value) => setUserName(value)}
            />
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter Your Email"
              onChangeText={(value) => setUserEmail(value)}
              />
              <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter Your Password"
              secureTextEntry={true}
              //onChange={handleChange}
              onChangeText={(value) => setUserPassword(value)}
              />
              <TouchableOpacity style = {styles.submitButton}
              onPress={checkTextInput}
              >
            <Text style = {styles.submitButtonText}>Create account</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity  style = {styles.submitButton}
            onPress={() => navigation.navigate('Sign in')
            }>
            <Text style = {styles.submitButtonText}>Sign In Instead</Text>
            </TouchableOpacity>
            </View>
    </View>

    );
}

export default SignInScreen;

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