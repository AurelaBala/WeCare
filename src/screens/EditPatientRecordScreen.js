import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import DatePicker from "react-native-datepicker";
import React, {useEffect, useState} from "react";
import { LogBox } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import SelectList from "react-native-dropdown-select-list";

//var recordDataType = ""
//var recordValueNew = ""
const EditPatientRecordScreen = () => {

  var text = ""
  const navigation = useNavigation();
  const route = useRoute();
  
  var token = route.params.token
  var password = route.params.password
  var patient_id = route.params.patient_id
  var record_id = route.params.record_id
  var patient_name = route.params.patient_name
  var record_value = route.params.value
  var record_type = route.params.type
  var record_date = route.params.date
  var record_link = route.params.record_link
  var patient_name = route.params.patient_name

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const setText = () => {
    if(selectedValue == "Blood Pressure") {
      text = "mmHg"
    }
    else if(selectedValue == "Blood Oxygen") {
      text = "%"
    }
    else if(selectedValue == "Heartbeat Rate") {
      text = "beats per minute"
    }
    else if(selectedValue == "Respiratory Rate") {
      text = " breaths per minute"
    }

    else {
        text =  ""
    }
    
  }


  useEffect(() => {
   
    fetch('https://we-care-centennial.herokuapp.com/wecare/record/'+record_id+'?token='+token+'&password='+password)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
   // recordValue = data.value

  }, []);
  //var recordDate = data.date
  //var recordType= data.type
 
  //console.log(data.value)
  //var test = recordValue
  const [val, onChangeValueText] = React.useState("");
  const [selectedDate, setDate] = React.useState(record_date);
  const [textDataType, setDataType] = useState('');
  const [selectedValue, setSelectedValue] = React.useState(record_type);
  const [textRecordValue, setRecordValue] = useState(record_value);
  const [isVisible, setModalVisible] = React.useState(false);
  const settingVisibility = () => {
    setModalVisible(true);
  };

  var dataTypeList = [
    { key: "Blood Pressure", value: "Blood Pressure" },
    { key: "Blood Oxygen", value: "Blood Oxygen" },
    { key: "Hearbeat Rate", value: "Hearbeat Rate" },
    { key: "Respiratory Rate", value: "Respiratory Rate" },
  ];

  


  const updateRecord = () => {
    fetch('https://we-care-centennial.herokuapp.com/wecare/record/'+record_id+'?&token='+token+'&password='+password+'&record_link='+record_link+'&record_id='+record_id+'&date='+newdate+'&type='+record_date+'&value='+record_value, {
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


  const deleteRecord = () => {
    fetch('https://we-care-centennial.herokuapp.com/wecare/record/'+record_id+'?&token='+token+'&password='+password, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });  
    
      navigation.navigate("Patient's All Records" ,{
                    
        patient_id: patient_id,
        token: token,
        password: password,
        patient_name: patient_name,
        record_link: record_link
       
      })
  }

  const checkTextInput = () => {
    //Check for the Patient's TextInputs
    // if (!textRecordDate.trim()) {
    //   alert('Please Select a Date');
    //   return;
    // }
    // if (!textDataType.trim()) {
    //   alert('Please Select Data Type');
    //   return;
    // }
    if (!textRecordValue.trim()) {
      alert('Please Enter a Value');
      return;
    }
    newdate = selectedDate
    
    //if all text inputs are not empty, get their values
    
    //recordDataType = textDataType
    record_value = textRecordValue
    record_date = selectedValue
    //call create patient method
    updateRecord()
    //navigate to list of all patients after creating the user
    navigation.navigate("Patient's All Records" , {
      token: token,
      password: password,
      patient_id: patient_id,
      patient_name: patient_name,
      record_link: record_link
      
    })
    alert('Record was edited Successfuly');
  };

  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
     
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
              Are you sure you want to Delete this Record?
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
                }}
              >
                <Text style={styles.subTextModal}>Keep Record</Text>
              </Pressable>
              <Pressable
                style={{
                  borderTopWidth: 1,
                  borderLeftWidth: 0.5,
                  borderColor: "#000",
                  color: "#000",
                  padding: 10,
                }}
                onPress = {deleteRecord}
              >
                <Text style={styles.subTextModal}>Delete Record</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Text style={styles.heading}>Edit Record</Text>
      <View style={styles.twoColumnView}>
        <Text style={styles.commonTextChild}>Date: </Text>
        <View style={styles.datePickerView}>
          <DatePicker
          format="YYYY-MM-DD"
            customStyles={{
              dateInput: {
                marginLeft: 0,
                marginTop: 6,
                borderBottomColor: "#dda0dd",
                borderTopColor: "white",
                borderLeftColor: "white",
                borderRightColor: "white",
                borderBottomWidth: 2,
                backgroundColor: "white",
              },
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 6,
                marginLeft: 150,
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
      </View>
      <Text style={styles.commonTextChild}>Data type: <Text style = {styles.statusText}>{record_type}</Text></Text>
      
      <View  style={{ width: "90%", marginLeft: "5%"}}>
      <SelectList
          setSelected={setSelectedValue}
          data={dataTypeList}
          boxstyles={{ borderRadius: 0, backgroundColor: "white" }}
          dropDownStyles={{ position: "absolute", backgroundColor: "white" }}
          onChangeText={(value) => setDataType(value)}
          onChangeValueText = {setText()}
        />
      </View>
       
     
      <View style={styles.valueTwoColumnView}>
        <Text style={styles.commonTextChild}>Value: </Text>
        <View>
          <View style={styles.twoColumnView}>
            <TextInput
              style={styles.textInput}
              value= {textRecordValue}
              placeholderTextColor="black"
              onChangeText={(value) => setRecordValue(value)}
            />
            <Text style= {styles.commonTextValue}> {text} </Text>
          </View>
        </View>
      </View>
      <View style={styles.addDiscardDeleteButtons}>
        <Pressable
          style={styles.addPressable}
          onPress={checkTextInput}
        >
          <Text style={styles.addText}>Edit</Text>
        </Pressable>
        <Pressable
          style={styles.discardPressable}
          onPress={() => navigation.navigate("Patient's All Records",  {
            patient_id: patient_id,
            token: token,
            password: password,
            patient_name: patient_name,
            record_link: record_link
          })}
        >
          <Text style={styles.discardText}>Discard</Text>
        </Pressable>
        <Pressable style={styles.deletePressable} onPress={settingVisibility}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 20,
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
  twoColumn: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  commonText: {
    fontSize: 20,
    paddingTop: 20,
    fontWeight: "500",
  },
  datePickerView: {
    paddingLeft: 10,
    paddingBottom: 24,
  },
  commonTextChild: {
    fontWeight: "500",
    fontSize: 18,
    padding: 10,
  },
  heading: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 50,
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
  valueTwoColumnView: {
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  },
  textInput: {
    height: 40,
    marginLeft: 8,
    marginTop: 2,
    borderWidth: 1,
    padding: 10,
    width: 150,
    fontWeight: "400",
    borderBottomColor: "#dda0dd",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderBottomWidth: 2,
    backgroundColor: "white",
  },
  twoColumnView: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  },
  directionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  addDiscardDeleteButtons: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignContent: "space-around",
    paddingTop: 130,
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
  commonTextValue: {
    paddingTop: '4%',
  },

  statusText: {
    color: "#dc143c",
    textAlign: 'right',
  }
});
export default EditPatientRecordScreen;
