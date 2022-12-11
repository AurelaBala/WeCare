import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  FlatList

} from "react-native";


import { useNavigation, useRoute } from "@react-navigation/native";
 
function PatientDetailsScreen()  {

  const [isVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  var token = route.params.token
  var password = route.params.password
  var patient_id = route.params.patient_id
  var record_link = route.params.record_link

  if(token == "") 
{
  navigation.navigate('Sign in')
}

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  var patientName = data.PatientName
  var age= data.Age
  var dateOfBirthday = data.DOB
  var patientStatus = data.Status
  var address = data.Address
  var city = data.City
  var postalCode = data.PostalCode
  var allergies = data.Allergies
  var emergencyContactName = data.EmergencyContactName
  var emergencyContactNumber = data.EmergencyContactNumber
  var medicalCondition = data.MedicalCondition

  
  useEffect(() => {
    
    fetch('https://we-care-centennial.herokuapp.com/wecare/patient/'+patient_id+'?token='+token+'&password='+password)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch('https://we-care-centennial.herokuapp.com/wecare/records?token='+token+'&password='+password+'&record_link='+record_link)
      .then((response) => response.json())
      .then((json) => setRecords(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  //refresh
  React.useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      fetch('https://we-care-centennial.herokuapp.com/wecare/records?token='+token+'&password='+password+'&record_link='+record_link)
      .then((response) => response.json())
      .then((json) => setRecords(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    });
    return focusHandler;
  }, [navigation]);
  
  const deletePatient = () => {
    fetch('https://we-care-centennial.herokuapp.com/wecare/patient/'+patient_id+'?token='+token+'&password='+password, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });  
      
     deleteAllRecords()
      navigation.navigate("Home" ,{
                    
        token: token,
        password: password,
       
      })
  }

  const deleteAllRecords = () => {
    fetch('https://we-care-centennial.herokuapp.com/wecare/records?token='+token+'&password='+password+'&record_link='+record_link, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });  
     
  }

  const settingVisibility = () => {
    setModalVisible(true);
  };
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);
  
  return (
    <View style={styles.container}>
    
     
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
        console.log("Modal has been closed.");
        setModalVisible(!isVisible);
          }}>
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
                  onPress={() => {
                    setModalVisible(!isVisible);
                  }}>
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
                 
                  onPress = {deletePatient}

                 
                >
                  <Text style={styles.subTextModal}>Delete Patient</Text>
                </Pressable>
              </View>
          </View>
        </View>
      </Modal>
      <View style={styles.twoColumn}>
        <Image
          style={styles.tinyLogo}
          source={require("../../images/avatar.png")} />
        <Text style={styles.titleText}>{patientName} </Text> 
      </View>
      <View style={styles.twoColumn}>
        <Text style={styles.commonText}>
          <Text style={styles.commonTextChild}>Age:</Text> {age}
        </Text>
        <Text style={styles.commonText}>
          <Text style={styles.commonTextChild}>Birthday:</Text> {dateOfBirthday}
        </Text>
        <Text style={styles.commonText}>
          <Text style={styles.commonTextChild}>Status:</Text> {patientStatus} 
        </Text>
      </View>
      <Text style={styles.commonText}>
        <Text style={styles.commonTextChild}>Date of birthday:</Text> {dateOfBirthday}
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.commonTextChild}>Current Address:</Text> {address}, {city}, {postalCode}
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.commonTextChild}>Allergies:</Text> {allergies}
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.commonTextChild}>Emergency Contact:</Text> {emergencyContactName},
        {emergencyContactNumber}
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.commonTextChild}>Medical Conditions:</Text> {medicalCondition}
      </Text>
      <View>
        <Text style={styles.heading}>Latest Records</Text>
        <View style={styles.twoColumn}>


          <View style={{ height: 120, width: 300 }}>
            <ScrollView style={styles.latestRecordContainer}>
            {(records.length == 0) ? <Text style={styles.scrollPatientRecord}><Text style = {styles.patientText}>No records found</Text></Text> :
      isLoading ? <Text>Loading...</Text> : 
        (
        <FlatList
            data={records}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            
              <Text style={styles.recordText}>{item.date}: {item.type} - {item.value}</Text>
              
            )}
          />
         
        )
      }
            </ScrollView>
          </View>
          <View style={styles.directionColumn}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Patient's All Records", {
                patient_id: patient_id,
                token: token,
                password: password,
                patient_name: patientName,
                record_link: record_link
              })}>
              <Image
                style={styles.sideLogo}
                source={require("../../images/list-icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => navigation.navigate("Add Patient's Record",{
                patient_id: patient_id,
                token: token,
                password: password,
                patient_name: patientName,
                record_link: record_link
              })}
            >
              <Image
                style={styles.sideLogo}
                source={require("../../images/plus-icon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.deleteEditButtons}>
        <Pressable style={styles.deletePressable} onPress={settingVisibility}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
        <Pressable
          style={styles.editPressable}
          onPress={() => navigation.navigate("Update Patient's Information", {
            patient_id: patient_id,
            token: token,
            password: password,
            patient_name: patientName,
            city: city,
            postalCode: postalCode,
            allergies: allergies,
            emergencyContactName: emergencyContactName,
            emergencyContactNumber: emergencyContactNumber,
            medicalCondition: medicalCondition,
            age:age,
            address: address,
            patientStatus: patientStatus,
            dateOfBirthday: dateOfBirthday,
            patientStatus: patientStatus,
            record_link: record_link
          })}
        >
          <Text style={styles.editText}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 35,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  sideLogo: {
    width: 40,
    height: 40,
  },
  twoColumn: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 25,
    justifyContent: "center",
    color: "midnightblue",
  },
  commonText: {
    fontSize: 13,
    paddingTop: 28,
    fontWeight: "500",
  },
  latestRecordContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: "midnightblue",
  },
  directionColumn: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  recordText: {
    fontSize: 14,
    padding: 5,
  },
  directionRow: {
    paddingTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  bottomLogo: {
    width: 40,
    height: 40,
    margin: 15,
  },
  commonTextChild: {
    fontWeight: "700",
    fontSize: 14,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    paddingTop: 50,
    marginBottom: 10,
    color: "midnightblue",
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
  deleteEditButtons: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-around",
    paddingTop: 30,
  },
  deletePressable: {
    margin: 16,
    alignItems: "center",
    padding: 10,
    width: "35%",
    backgroundColor: "#dc143c",
  },
  editPressable: {
    margin: 16,
    alignItems: "center",
    padding: 10,
    width: "35%",
    backgroundColor: "#EEBE00",
  },
  deleteText: {
    color: "white",
  },
  editText: {
    color: "white",
  },
});

export default PatientDetailsScreen;
