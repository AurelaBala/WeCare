import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";
import DatePicker from "react-native-datepicker";
import React from "react";
import { LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SelectList from "react-native-dropdown-select-list";

const CreatePatientRecordScreen = () => {
  const navigation = useNavigation();
  const [val, onChangeValueText] = React.useState("");
  const [selectedDate, setDate] = React.useState(new Date());
  const [selectedValue, setSelectedValue] = React.useState("Blood Pressure");

  var dataTypeList = [
    { key: "1", value: "Blood Pressure" },
    { key: "2", value: "Blood Oxygen" },
    { key: "3", value: "Hearbeat Rate" },
    { key: "4", value: "Respiratory Rate" },
  ];
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Record</Text>
      <View style={styles.twoColumnView}>
        <Text style={styles.commonTextChild}>Date: </Text>
        <View style={styles.datePickerView}>
          <DatePicker
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
        />
      </View>
      <View style={styles.valueTwoColumnView}>
        <Text style={styles.commonTextChild}>Value: </Text>
        <View>
          <View style={styles.twoColumnView}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeValueText}
              value={val}
              placeholder="120/80"
              placeholderTextColor="#B3B3B3"
            />
            <Text style={styles.commonTextChild}>mmHg</Text>
          </View>
        </View>
      </View>
      <View style={styles.addDiscardButtons}>
        <Pressable
          style={styles.addPressable}
          onPress={() => navigation.navigate("Patient's Information")}
        >
          <Text style={styles.addText}>Add</Text>
        </Pressable>
        <Pressable
          style={styles.discardPressable}
          onPress={() => navigation.navigate("Patient's Information")}
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
