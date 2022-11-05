import React, { useEffect } from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PatientDetailsScreen = () => {
  const [isVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();
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
                onPress={() => {
                  setModalVisible(!isVisible);
                }}
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
      <View style={styles.twoColumn}>
        <Image
          style={styles.tinyLogo}
          source={require("../../images/avatar.png")}
        />
        <Text style={styles.titleText}>John Doe</Text>
      </View>
      <View style={styles.twoColumn}>
        <Text style={styles.commonText}>
          <Text style={styles.commonTextChild}>Age:</Text> 69
        </Text>
        <Text style={styles.commonText}>
          <Text style={styles.commonTextChild}>Status:</Text> Non Critical
        </Text>
      </View>
      <Text style={styles.commonText}>
        <Text style={styles.commonTextChild}>Current Address:</Text> 941
        Progress Ave Scarborough, ON, M1G 3T8
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.commonTextChild}>Allergies:</Text> Shellfish &
        Penicillin
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.commonTextChild}>Emergency Contact:</Text> Jane Doe
        (746)-737-8571
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.commonTextChild}>Medical Conditions:</Text> Diabetes
      </Text>
      <View>
        <Text style={styles.heading}>Latest Records</Text>
        <View style={styles.twoColumn}>
          <View style={{ height: 120 }}>
            <ScrollView style={styles.latestRecordContainer}>
              <Text style={styles.recordText}>
                10/10/2022 : Blood Pressure - 120/80 mmHg
              </Text>
              <Text style={styles.recordText}>
                10/10/2022 : Heartbeat Rate - 75 / min
              </Text>
              <Text style={styles.recordText}>
                09/10/2022 : Respiratory Rate - 20 / min
              </Text>
              <Text style={styles.recordText}>
                09/10/2022 : Blood Oxygen - 97 %
              </Text>
            </ScrollView>
          </View>
          <View style={styles.directionColumn}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Patient's All Records")}
            >
              <Image
                style={styles.sideLogo}
                source={require("../../images/list-icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => navigation.navigate("Add Patient's Record")}
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
          onPress={() => navigation.navigate("Update Patient's Informtion")}
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
    fontSize: 50,
    fontWeight: "bold",
    padding: 5,
    justifyContent: "center",
    color: "midnightblue",
  },
  commonText: {
    fontSize: 16,
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
    fontSize: 16,
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
