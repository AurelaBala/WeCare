import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import DatePicker from "react-native-datepicker";
import React from "react";
import { LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SelectList from "react-native-dropdown-select-list";

const EditPatientRecordScreen = () => {
  const navigation = useNavigation();
  const [val, onChangeValueText] = React.useState("");
  const [selectedDate, setDate] = React.useState(new Date());
  const [selectedValue, setSelectedValue] = React.useState("Blood Pressure");
  const [isVisible, setModalVisible] = React.useState(false);
  const settingVisibility = () => {
    setModalVisible(true);
  };
  var dataTypeList = [
    { key: "1", value: "Blood Pressure" },
    { key: "2", value: "Blood Oxygen" },
    { key: "3", value: "Hearbeat Rate" },
    { key: "4", value: "Respiratory Rate" },
  ];
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
                onPress={() => navigation.navigate("Patient's All Records")}
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
              placeholderTextColor="black"
            />
            <Text style={styles.commonTextChild}>mmHg</Text>
          </View>
        </View>
      </View>
      <View style={styles.addDiscardDeleteButtons}>
        <Pressable
          style={styles.addPressable}
          onPress={() => navigation.navigate("Patient's All Records")}
        >
          <Text style={styles.addText}>Add</Text>
        </Pressable>
        <Pressable
          style={styles.discardPressable}
          onPress={() => navigation.navigate("Patient's All Records")}
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
});
export default EditPatientRecordScreen;
