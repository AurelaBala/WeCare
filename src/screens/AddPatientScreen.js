import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Link, useNavigation, useRoute} from '@react-navigation/native';
import  {useState} from 'react';
import DatePicker from "react-native-datepicker";
import SelectList from "react-native-dropdown-select-list";

//declare all variables that will be used on endpoint call
var patientName = ""
var age= ""
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

//if the user don't have a token then navigate to the Sign In (access control)
  if(token == "") 
{
  navigation.navigate('Sign in')
}

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
  const [textDataType, setDataType] = useState('');
  const [selectedDate, setDate] = useState('');
  const [selectedValue, setSelectedValue] = React.useState('');

  var dataTypeList = [
    { key: "Critical", value: "Critical" },
    { key: "Stable", value: "Stable" },
    
  ];

  //create patient API method
  const createPatient = () => {
    fetch('https://we-care-centennial.herokuapp.com/wecare/patient?token='+token+'&password='+password+'&PatientName='+patientName+'&Age='+age+'&DOB='+selectedDate+'&Status='+selectedValue+'&Address='+address+'&City='+city+'&PostalCode='+postalCode+'&Allergies='+allergies+'&EmergencyContactName='+emergencyContactName+'&EmergencyContactNumber='+emergencyContactNumber+'&MedicalCondition='+medicalCondition, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });  
  }

  //check text input
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
    if (!selectedDate.trim()) {
      alert('Please Enter Patient Date of Birthday');
      return;
    }
    if (!selectedValue.trim()) {
      alert("Please Select patient's Status");
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
        <View style={styles.formStyles}>
          <DatePicker 
          format="YYYY-MM-DD"
            customStyles={{
              dateInput: {
                marginLeft: 0,
                borderBottomColor: "#dda0dd",
                borderTopColor: "white",
                borderLeftColor: "white",
                borderRightColor: "white",
                borderBottomWidth: 2,
                backgroundColor: "white",
                width: "200%",
                borderBottomColor: '#dda0dd',
                borderBottomWidth: 2,
                padding: 10,
                marginBottom: 5,
                backgroundColor: 'white',
               
                marginBottom: 10,
              },
              dateIcon: {
                position: "absolute",
                left: 0,
                marginLeft: 250,
              },
            }}
            modal
            useNativeDriver={true}
            date={selectedDate}
            onDateChange={(selectedDate) => {
              setDate(selectedDate);
            }}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
          />
        </View>
<View style={styles.formStyles}>
        <Text style={styles.commonTextChild}>Status: </Text>
        <SelectList
         style={styles.formStyles}
          setSelected={setSelectedValue}
          data={dataTypeList}
          useNativeDriver={true}
          boxstyles={{ borderRadius: 0, backgroundColor: "white" }}
          dropDownStyles={{ position: "absolute", backgroundColor: "white", width: "100%" }}
          onChangeText={(value) => setDataType(value)}
        />
      </View>
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
    marginTop: '5%',
  },
  avatarImage: {
    width:50,
    height: 50,
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

  valueTwoColumnView: {
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  },

  twoColumnView: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  },

  commonTextChild: {
    fontWeight: "500",
    fontSize: 15,
    padding: 10,
  },
  statusList: {
    width: "100%",
  }
})