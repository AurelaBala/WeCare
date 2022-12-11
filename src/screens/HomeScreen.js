import * as React from 'react';
import { Button, View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import  {useState} from 'react';

var patientName = ""

function HomeScreen ({ navigation })  {
  const [textPatientName, setPatientName] = useState('');
    const route = useRoute();
    var token = route.params.token
    var password = route.params.password

if(token == "") 
{
  navigation.navigate('Sign in')
}

    const userLogout = () => {
      fetch('http://localhost:3000/wecare/logout-user?token='+token, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        });  
       
    }

    const checkTextInput = () => {
      //Check for the Patient's TextInputs
      if (!textPatientName.trim()) {
        alert('Please Enter Patient Name');
        return;
      }
      //if all text inputs are not empty, get their values
      patientName = textPatientName
      //navigate to list of all patients after creating the user
      navigation.navigate('Search Patient' , {
        token: token,
        password: password,
        patient_name: textPatientName
      })
      console.log (textPatientName)
      
    };
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '80%', marginLeft: '10%' }}>
        <Text style={styles.welcomeLabel}>Welcome Label</Text>
        <View style={styles.searchBox}>
          <Text style={styles.findPatientText}>Find One Patient</Text>
        
          <TextInput 
          style={styles.searchInput} 
          placeholder="Write your patients name" 
          onChangeText={(value) => setPatientName(value)}
          />
          <Pressable style = {styles.findButton} title="See All Patients" onPress={checkTextInput} ><Text style={styles.searchButtonText} >Find</Text></Pressable>
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