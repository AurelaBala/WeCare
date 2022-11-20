import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";
import DatePicker from "react-native-datepicker";

import { LogBox } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import SelectList from "react-native-dropdown-select-list";
import React, { useEffect, useState } from "react";

var recordDataType = ""
var recordValue = ""
const CreatePatientRecordScreen = () => {


  
  const navigation = useNavigation();
  const [val, onChangeValueText] = React.useState("");
  const [selectedDate, setDate] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('');

  const route = useRoute();
  var token = route.params.token
  var password = route.params.password
  var patient_id = route.params.patient_id
  var patient_name = route.params.patient_name

  const [textRecordDate, setRecordDate] = useState('');
  const [textDataType, setDataType] = useState('');
  const [textRecordValue, setRecordValue] = useState('');
  var recordDate = selectedDate
  var dataTypeList = [
    { key: "Blood Pressure", value: "Blood Pressure" },
    { key: "Blood Oxygen", value: "Blood Oxygen" },
    { key: "Hearbeat Rate", value: "Hearbeat Rate" },
    { key: "Respiratory Rate", value: "Respiratory Rate" },
  ];

  

  const createRecord = () => {

    fetch('http://localhost:3000/wecare/add-record?token='+token+'&password='+password+'&patient_id='+patient_id+'&date='+recordDate+'&type='+recordDataType+'&value='+recordValue, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });  
      //checkTextInput
  }

  const checkTextInput = () => {
    
    
    
    if (!selectedDate.trim()) {
      alert('Please select a date');
      return;
    }

    if (!selectedValue.trim()) {
      alert('Please select a data type');
      return;
    }

    if (!textRecordValue.trim()) {
      alert('Please Enter a Value');
      return;
    }
    
    //if all text inputs are not empty, get their values
    
    //recordDataType = textDataType
    recordValue = textRecordValue
    recordDataType = selectedValue
    recordDate = selectedDate
    //call create patient method
    createRecord()
    //navigate to list of all patients after creating the user
    navigation.navigate("Patient's All Records" , {
      token: token,
      password: password,
      patient_id: patient_id,
      patient_name: patient_name
      
    })
    alert('Record was added Successfuly');
  };


  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Record</Text>
      <View style={styles.twoColumnView}>
        <Text style={styles.commonTextChild}>Date: </Text>
        <View style={styles.datePickerView}>
          <DatePicker
          format="YYYY-MM-D"
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

      <View style={styles.twoColumnView}>
        <Text style={styles.commonTextChild}>Data Type: </Text>
        <SelectList
          setSelected={setSelectedValue}
          data={dataTypeList}
          boxstyles={{ borderRadius: 0, backgroundColor: "white" }}
          dropDownStyles={{ position: "absolute", backgroundColor: "white" }}
          onChangeText={(value) => setDataType(value)}
        />
      </View>


      <View style={styles.valueTwoColumnView}>
        <Text style={styles.commonTextChild}>Value: </Text>
        <View>
          <View style={styles.twoColumnView}>
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => setRecordValue(value)}
              placeholder="120/80"
              placeholderTextColor="#B3B3B3"
            />
          
          </View>
        </View>
      </View>
      <View style={styles.addDiscardButtons}>
        <Pressable
          style={styles.addPressable}
          onPress={checkTextInput}
        >
          <Text style={styles.addText}>Add</Text>
        </Pressable>
        <Pressable
          style={styles.discardPressable}
          onPress={() => navigation.navigate("Patient's Information",  {
          patient_id: patient_id,
          token: token,
          password: password
        })}
        >
          <Text style={styles.discardText}>Discard</Text>
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
  addDiscardButtons: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignContent: "center",
    paddingTop: 130,
  },
  addPressable: {
    margin: 20,
    alignItems: "center",
    padding: 10,
    width: "30%",
    backgroundColor: "#008b8b",
  },
  discardPressable: {
    margin: 20,
    alignItems: "center",
    padding: 10,
    width: "30%",
    backgroundColor: "#EEBE00",
  },
  addText: {
    color: "white",
  },
  discardText: {
    color: "white",
  },
});
export default CreatePatientRecordScreen;
