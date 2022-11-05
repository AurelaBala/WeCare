import * as React from 'react';
import { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, DatePicker } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function HomeScreen({ Details }){
    const navigation = useNavigation();
    return(
    <View>
        {/* <Text>Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        /> */}
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Image style = {styles.logo} source={require('../../images/logo-wecare.png')} />
                </View>
                {/* <Text style={styles.label}>Email:</Text> */}
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter Your Email"/>
              {/* <Text style={styles.label}>Password:</Text> */}
              <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter Your Password"/>
              <TouchableOpacity style = {styles.submitButton}
            onPress={() => navigation.navigate('Home')}>
                <Text style = {styles.submitButtonText}>Log In</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity  style = {styles.submitButton}
            onPress={() => navigation.navigate('Sign up')}>
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