import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Link, useNavigation, useRoute} from '@react-navigation/native';
import  {useState} from 'react';

//declare all variables that will be used on endpoint call
var patientName = ""
var age= ""
var dateOfBirthday = ""
var patientStatus = ""
var address = ""
var city = ""
var postalCode = ""
var allergies = ""
var emergencyContactName = ""
var emergencyContactNumber = ""
var medicalCondition = ""



function AddPatientScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  var token = route.params.token
  var password = route.params.password

  const [textPatientName, setPatientName] = useState('');
  const [textPatientAge, setPatientAge] = useState('');
  const [textPatientDateOfBirthday, setPatientDateOfBirthday] = useState('');
  const [textPatientStatus, setPatientStatus] = useState('');
  const [textPatientAddress, setPatientAddress] = useState('');
  const [textPatientCity, setPatientCity] = useState('');
  const [textPatientPostalCode, setPatientPostalCode] = useState('');
  const [textPatientAllergies, setPatientAllergies] = useState('');
  const [textPatientEmergencyContactName, setPatientEmergencyContantName] = useState('');
  const [textPatientEmergencyContactNumber, setPatientEmergencyContantNumber] = useState('');
  const [textPatientMedicalCondition, setPatientMedicalCondition] = useState('');

  const createPatient = () => {

    fetch('http://localhost:3000/wecare/add-patient?token='+token+'&password='+password+'&PatientName='+patientName+'&Age='+age+'&DOB='+dateOfBirthday+'&Status='+patientStatus+'&Address='+address+'&City='+city+'&PostalCode='+postalCode+'&Allergies='+allergies+'&EmergencyContactName='+emergencyContactName+'&EmergencyContactNumber='+emergencyContactNumber+'&MedicalCondition='+medicalCondition, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });  
      //checkTextInput
  }
  const checkTextInput = () => {
    //Check for the Patient's TextInputs
    if (!textPatientName.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!textPatientAge.trim()) {
      alert('Please Enter Patient Age');
      return;
    }
    if (!textPatientDateOfBirthday.trim()) {
      alert('Please Enter Patient Date of Birthday');
      return;
    }
    if (!textPatientStatus.trim()) {
      alert('Please Enter Patient Status');
      return;
    }
    if (!textPatientAddress.trim()) {
      alert('Please Enter Patient Address');
      return;
    }
    if (!textPatientCity.trim()) {
      alert('Please Enter Patient City');
      return;
    }
    if (!textPatientPostalCode.trim()) {
      alert('Please Enter Patient Postal Code');
      return;
    }
    if (!textPatientAllergies.trim()) {
      alert('Please Enter Patient Allergies');
      return;
    }
    if (!textPatientEmergencyContactName.trim()) {
      alert('Please Enter Patient Emergency Contact Name');
      return;
    }
    if (!textPatientEmergencyContactNumber.trim()) {
      alert('Please Enter Patient Emergency Contant Number');
      return;
    }
    if (!textPatientMedicalCondition.trim()) {
      alert('Please Enter Patient Medical Condition');
      return;
    }
    //if all text inputs are not empty, get their values
    patientName = textPatientName
    age = textPatientAge
    dateOfBirthday = textPatientDateOfBirthday
    patientStatus = textPatientStatus
    address = textPatientAddress
    city = textPatientCity
    postalCode = textPatientPostalCode
    allergies = textPatientAllergies
    emergencyContactName = textPatientEmergencyContactName
    emergencyContactNumber = textPatientEmergencyContactNumber
    medicalCondition = textPatientMedicalCondition
    //call create patient method
    createPatient()
    //navigate to list of all patients after creating the user
    navigation.navigate('All Patients' , {
      token: token,
      password: password
    })
    alert('Patient was added Successfuly');
  };

 

    return (
      <View style={styles.addPatientView}>
       
        <Image style={styles.avatarImage} source={require('../../images/avatar.png')} />
        <TextInput
          style={styles.formStyles}
          placeholder = "Full Name"
          onChangeText={(value) => setPatientName(value)}
        />
       
        <TextInput
          style={styles.formStyles}
          placeholder = "Age"
          onChangeText={(value) => setPatientAge(value)}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Date of birthday"
          onChangeText={(value) => setPatientDateOfBirthday(value)}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Status"
          onChangeText={(value) => setPatientStatus(value)}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Street"
          onChangeText={(value) => setPatientAddress(value)}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "City"
          onChangeText={(value) => setPatientCity(value)}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Postal Code"
          onChangeText={(value) => setPatientPostalCode(value)}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Allergies"
          onChangeText={(value) => setPatientAllergies(value)}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Emergency Contact (Name)"
          onChangeText={(value) => setPatientEmergencyContantName(value)}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Emergency Contact (Number)"
          onChangeText={(value) => setPatientEmergencyContantNumber(value)}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Medical Conditions"
          onChangeText={(value) => setPatientMedicalCondition(value)}
        />
        <View style={styles.addDeleteButtons}>
        <TouchableOpacity style = {styles.addPressable}
              onPress={checkTextInput}>
                <Text style={styles.addText}>Add</Text> 
        </TouchableOpacity>
                 <Pressable style={styles.deletePressable}><Text style={styles.deleteText}>Delete</Text></Pressable>
        </View>
      </View>
    );
    
}




export default AddPatientScreen;

const styles = StyleSheet.create({
  addPatientView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginLeft: '10%',
  },
  avatarImage: {
    width:120,
    height: 120,
  },
  formStyles: {
    borderBottomColor: '#dda0dd',
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
  },
  textStyles: {
    
  },
  addDeleteButtons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  
  addPressable: {
    margin: 20,
    alignItems: 'center',
    padding: 10,
    width: '35%',
    backgroundColor: '#008b8b',
  },
  deletePressable: {
    margin: 20,
    alignItems: 'center',
    padding: 10,
    width: '35%',
    backgroundColor: '#dc143c',
  },
  addText: {
    color: 'white',
  },
  deleteText: {
    color: 'white',
  },
})