import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  Modal, FlatList
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

function PatientRecordsListingScreen () {
  const [isVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  const route = useRoute();
  var token = route.params.token
  var password = route.params.password
  var patient_id = route.params.patient_id
  var patient_name = route.params.patient_name
  var record_link = route.params.record_link

  //console.log(to)
  useEffect(() => {
    //var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkF1cmVsYSIsImlhdCI6MTY2ODYxNDE4MX0.JldNNuROQ_fhskcNI-aIKmOoiUxOkmQOGYtz9OgLBEY"
    fetch('https://we-care-centennial.herokuapp.com/wecare/records?token='+token+'&password='+password+'&record_link='+record_link)
      .then((response) => response.json())
      .then((json) => setData(json))
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


  const settingVisibility = () => {
    setModalVisible(true);
  };

  const deleteAllRecords = () => {
    fetch('https://we-care-centennial.herokuapp.com/wecare/records?token='+token+'&password='+password+'&record_link='+record_link, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });  
      //checkTextInput
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}>{patient_name}'s Records</Text>
      <View style={styles.customScrollView}>
      {(records.length == 0) ? <Text style={styles.scrollPatientRecord}><Text style = {styles.patientText}>No records found for {patient_name}</Text></Text> :
      isLoading ? <Text>Loading...</Text> : 
        (
        <FlatList style={styles.scrollViewStyle}
            data={records}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable style={styles.scrollPatientRecord} title="Patient" onPress={() => navigation.navigate("Update Patient's Record", {
                patient_id: patient_id,
                token: token,
                password: password,
                record_id: item.id,
                value: item.value,
                type: item.type,
                date: item.date,
                patient_name: patient_name,
                record_link: item.record_link
              })}>
              <Text style={styles.patientText}>{item.type}</Text>
              </Pressable>
            )}
          />
         
        )
      }
      
       
        
      </View>
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
              Are you sure you want to Delete all Patient Records?
            </Text>
            <View style={styles.directionRow}>
              <Pressable
                style={{
                  borderTopWidth: 1,
                  borderRightWidth: 0.5,
                  borderColor: "#000",
                  color: "#000",
                  padding: 7,
                }}
                onPress={() => {
                  setModalVisible(!isVisible);
                }}
              >
                <Text style={styles.subTextModal}>Keep All Records</Text>
              </Pressable>
              <Pressable
                style={{
                  borderTopWidth: 1,
                  borderLeftWidth: 0.5,
                  borderColor: "#000",
                  color: "#000",
                  padding: 7,
                }}
                onPress = {deleteAllRecords}
                onPressOut={() => navigation.navigate("Patient's Information",{
                  patient_id: patient_id,
                  token: token,
                  password: password,
                  record_link: record_link
                })}
              >
                <Text style={styles.subTextModal}>Delete All Records</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.bottomDeleteButton}>
        <Pressable style={styles.deletePressable} onPress={settingVisibility}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
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
  patientText: {
    color: "white",
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10
  },
  scrollPatientRecord: {
    borderBottomColor: "#dda0dd",
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#008b8b",
  },
  scrollViewContainer: {
    height: 500,
  },

  customScrollView: {
    width: '80%',
    
    marginLeft: '10%',
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    maxHeight: '80%'
  },

  scrollViewStyle: {
    padding: 5,
    borderWidth: 1,
    borderColor: "midnightblue",
  },
  bottomDeleteButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
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
    paddingBottom: 50,
    textAlign: "center",
  },
  directionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  deleteText: {
    color: "white",
  },
  deletePressable: {
    margin: 16,
    alignItems: "center",
    padding: 10,
    width: "30%",
    backgroundColor: "#dc143c",
  },
});
export default PatientRecordsListingScreen;
