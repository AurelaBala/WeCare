import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Linking} from 'react-native';
import { Link, useNavigation, navigate} from '@react-navigation/native';


function SignInScreen({ Details }){
    const navigation = useNavigation();
    return(
        <View>
            <View>
               
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Image style = {styles.logo} source={require('../../images/logo-wecare.png')} />
                </View>
              
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter Your Username"
              onChangeText={(text) => this.userName = text}
            />
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter Your Email"
              onChangeText={(text) => this.userEmail = text}
              />
             
              <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter Your Password"
              secureTextEntry={true}
              onChangeText={(text) => this.userPassword = text}/>
              <TouchableOpacity style = {styles.submitButton}
              onPress={createUser}
              onPressOut={() => navigation.navigate('Sign in')}>
            
              
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

const createUser = () => {
    fetch('http://localhost:3000/wecare/add-user?username='+userName+'&email='+userEmail+'&password='+userPassword, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //   email: userEmail,
        //   password: userPassword,
        //   username: userName
        // })
      });
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