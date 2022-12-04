import * as React from 'react';
import { Button, View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';








function HomeScreen ({ navigation })  {

  
  



    //const navigation = useNavigation();
    const route = useRoute();
    var token = route.params.token
    var password = route.params.password

  
    const userLogout = () => {
      
     
      fetch('http://localhost:3000/wecare/logout-user?token='+token, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        });  
       
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '80%', marginLeft: '10%' }}>
        <Text style={styles.welcomeLabel}>Welcome Label</Text>
        <View style={styles.searchBox}>
          <Text style={styles.findPatientText}>Find One Patient</Text>
        
          <TextInput style={styles.searchInput} placeholder="Write your patients name" />
          <Pressable style = {styles.findButton} title="See All Patients" ><Text style={styles.searchButtonText} >Find</Text></Pressable>
        </View>
        <Pressable style = {styles.defaultButton} title="See All Patients" onPress={() => navigation.navigate('All Patients' , {
        token: token,
        password: password
      })} ><Text style={styles.textButton} >See All Patients</Text></Pressable>
        <Pressable style = {styles.defaultButton} title="See all critical patients" onPress={() => navigation.navigate('Critical Patients', {
           token: token,
           password: password
        }
        
        )} ><Text style={styles.textButton} >See All Critical Patients</Text></Pressable>
        <Pressable style = {styles.defaultButton} title="Add new patient" onPress={() => navigation.navigate('Add Patient', {
        token: token,
        password: password
      })} ><Text style={styles.textButton} >Add New Patient</Text></Pressable>
        <Pressable style = {styles.defaultButton} title="Sign out" onPress={userLogout}  onPressOut={() => navigation.navigate('Sign in', {
          
        }
        
        )} ><Text style={styles.textButton} >Sign Out</Text></Pressable>
      </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
  searchBox: {
    borderWidth: 2,
    padding: 30,
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  findPatientText: {
    color: 'black',
    fontSize: 18,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    height:30
  },
  findButton: {
    alignItems: 'center',
    backgroundColor: 'midnightblue',
    padding: 15,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18,
  },
  welcomeLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  defaultButton: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    backgroundColor: 'midnightblue',
    padding: 15,
    width: '100%',
  },
  textButton: {
    textAlign: "center",
    color: '#fff',
    fontSize: 18,
  }
})