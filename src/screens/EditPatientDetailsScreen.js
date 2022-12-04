import {
  TextInput,
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {useEffect, useState} from "react";
import DatePicker from "react-native-datepicker";
import SelectList from "react-native-dropdown-select-list";
import { render } from "react-dom";

const EditPatientDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  var patient_name = route.params.patient_name
  var city = route.params.city
  var postalCode = route.params.postalCode
  var allergies = route.params.allergies
      var emergencyContactName= route.params.emergencyContactName
      var emergencyContactNumber= route.params.emergencyContactNumber
      var medicalCondition= route.params.medicalCondition
      var age = route.params.age
      var address = route.params.address
      var patientStatus= route.params.patientStatus
      var dateOfBirthday= route.params.dateOfBirthday
      var patientStatus = route.params.patientStatus
      var record_link = route.params.record_link
  

  const [nameText, onChangeNameText] = React.useState(patient_name);
  const [ageText, onChangeAgeText] = React.useState(age);
  const [selectedDate, setDate] = React.useState(dateOfBirthday);
  const [statusText, onChangeStatusText] = React.useState(patientStatus);
  const [addressText, onChangeAddressText] = React.useState(address);
  const [allergiesText, onChangeAllergiesText] = React.useState(allergies);
  const [name, onChangeContactName] = React.useState(emergencyContactName);
  const [cityText, onChangeCity] = React.useState(city);
  const [phone, onChangePhone] = React.useState(emergencyContactNumber);
  const [medical, onChangeMedicalText] = React.useState(medicalCondition);
  const [postalText, onChangePostalText] = React.useState(postalCode);
  //const [selectedDate, setDate] = React.useState(record_date);
  const [isVisible, setModalVisible] = React.useState(false);
  
  const [textDataType, setDataType] = useState('');
  const [selectedValue, setSelectedValue] = React.useState(patientStatus);
  const settingVisibility = () => {
    setModalVisible(true);
  };

  var dataTypeList = [
    { key: "Critical", value: "Critical" },
    { key: "Stable", value: "Stable" },
    
  ];
  
  var token = route.params.token
  var password = route.params.password
  var patient_id = route.params.patient_id

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetch('https://we-care-centennial.herokuapp.com/wecare/patient?token='+token+'&password='+password+'&patient_id='+patient_id)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const updatePatient = () => {
    fetch('https://we-care-centennial.herokuapp.com/wecare/patient/'+patient_id+'?token='+token+'&password='+password+'&PatientName='+nameText+'&Age='+ageText+'&DOB='+selectedDate+'&Status='+selectedValue+'&Address='+addressText+'&City='+cityText+'&PostalCode='+postalText+'&Allergies='+allergiesText+'&EmergencyContactName='+name+'&EmergencyContactNumber='+phone+'&MedicalCondition='+medical+'&record_link='+record_link, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });  
     
      navigation.navigate("Home" ,{
                    
        token: token,
        password: password,
       
      })
  }

  const checkTextInput = () => {
   
    
    // newdate = selectedDate
    
    // recordValueNew = textRecordValue
    // recordDataType = selectedValue
    //call create patient method
    updatePatient()
    //navigate to list of all patients after creating the user
    navigation.navigate('All Patients' , {
      token: token,
      password: password
    })
    alert('Patientt details were edited Successfuly');
  };

  return (
    <View style={styles.editPatientView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
          setModalVisible(!isVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textModal}>Alert</Text>
            <Text style={styles.subTextAlert}>
              Are you sure you want to Delete this Patient?
            </Text>
            <View style={styles.directionRow}>
              <Pressable
                style={{
                  borderTopWidth: 1,
                  borderRightWidth: 0.5,
                  borderColor: "#000",
                  color: "#000",
                  padding: 10,
                }}
                onPress={() => navigation.navigate("Patient's Information")}
              >
                <Text style={styles.subTextModal}>Keep Patient</Text>
              </Pressable>
              <Pressable
                style={{
                  borderTopWidth: 1,
                  borderLeftWidth: 0.5,
                  borderColor: "#000",
                  color: "#000",
                  padding: 10,
                }}
                onPress={() => navigation.navigate("All Patients")}
              >
                <Text style={styles.subTextModal}>Delete Patient</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
     
   

<TextInput
          style={styles.formStyles}
          placeholder = "Full Name"
          onChangeText={(value) => onChangeNameText(value)}
          value = {nameText}
        />
       
        <TextInput
          style={styles.formStyles}
          placeholder = "Age"
          onChangeText={(value) => onChangeAgeText(value)}
          value = {ageText}
        />
        {/* <TextInput
          style={styles.formStyles}
          placeholder = "Date of birthday"
          onChangeText={(value) => onChangeBirthdayText(value)}
           value = {birthdayText}
        /> */}


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
                width: "100%",
                borderBottomColor: '#dda0dd',
                borderBottomWidth: 2,
                padding: 10,
                marginBottom: 5,
                backgroundColor: 'white',
                width: '100%',
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

        {/* <TextInput
          style={styles.formStyles}
          placeholder = "Status"
          onChangeText={(value) => onChangeStatusText(value)}
          value = {statusText}
        /> */}

<View style={styles.formStyles}>
        <Text style={styles.commonTextChild}>Status now: <Text style={styles.statusText}>{patientStatus}</Text>  </Text>
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
          onChangeText={(value) => onChangeAddressText(value)}
          value = {addressText}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "City"
          onChangeText={(value) => onChangeCity(value)}
          value = {cityText}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Postal Code"
          onChangeText={(value) => onChangePostalText(value)}
          value = {postalText}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Allergies"
          onChangeText={(value) => onChangeAllergiesText(value)}
          value = {allergiesText}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Emergency Contact (Name)"
          onChangeText={(value) => onChangeContactName(value)}
          value = {name}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Emergency Contact (Number)"
          onChangeText={(value) => onChangePhone(value)}
          value = {phone}
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Medical Conditions"
          onChangeText={(value) => onChangeMedicalText(value)}
          value = {medical}
        />
      <View style={styles.addDiscardDeleteButtons}>
        <Pressable
          style={styles.addPressable}
          onPress={checkTextInput}
        >
          <Text style={styles.addText}>Save</Text>
        </Pressable>
        <Pressable
          style={styles.discardPressable}
          onPress={() => navigation.navigate("Patient's Information", {
            patient_id: patient_id,
                token: token,
                password: password,
                record_link: record_link
          }
          
          )}
        >
          <Text style={styles.discardText}>Discard</Text>
        </Pressable>
        {/* <Pressable style={styles.deletePressable} onPress={settingVisibility}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 10,
    width: 320,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textModal: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
  subTextModal: {
    fontSize: 15,
    marginTop: 1,
    textAlign: "center",
  },
  subTextAlert: {
    fontSize: 15,
    marginTop: 1,
    paddingBottom: 30,
    textAlign: "center",
  },
  directionRow: {
    paddingTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  editPatientView: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginLeft: "10%",
    marginTop: '5%',
  },
  avatarImage: {
    width: 120,
    height: 120,
  },
  formStyles: {
    borderBottomColor: "#dda0dd",
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 5,
    backgroundColor: "white",
    width: "100%",
    marginBottom: 10,
  },
  addDiscardDeleteButtons: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignContent: "space-around",
  },
  addPressable: {
    margin: 16,
    alignItems: "center",
    padding: 10,
    width: "25%",
    backgroundColor: "#008b8b",
  },
  discardPressable: {
    margin: 16,
    alignItems: "center",
    padding: 10,
    width: "25%",
    backgroundColor: "#EEBE00",
  },
  deletePressable: {
    margin: 16,
    alignItems: "center",
    padding: 10,
    width: "25%",
    backgroundColor: "#dc143c",
  },
  addText: {
    color: "white",
  },
  discardText: {
    color: "white",
  },
  deleteText: {
    color: "white",
  },
  commonTextChild: {
    fontWeight: "500",
    fontSize: 15,
    padding: 1,
   
  },
  statusText: {
    color: "#dc143c",
    textAlign: 'right',
  }
});
export default EditPatientDetailsScreen;
