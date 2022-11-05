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
import { useNavigation } from "@react-navigation/native";

const EditPatientDetailsScreen = () => {
  const navigation = useNavigation();
  const [nameText, onChangeNameText] = React.useState("");
  const [ageText, onChangeAgeText] = React.useState("");
  const [statusText, onChangeStatusText] = React.useState("");
  const [address, onChangeAddText] = React.useState("");
  const [allergies, onChangeAllergiesText] = React.useState("");
  const [name, onChangeContactName] = React.useState("");
  const [phone, onChangePhone] = React.useState("");
  const [medical, onChangeMedicalText] = React.useState("");
  const [isVisible, setModalVisible] = React.useState(false);
  const settingVisibility = () => {
    setModalVisible(true);
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
      <Image
        style={styles.avatarImage}
        source={require("../../images/avatar.png")}
      />
      <TextInput
        style={styles.formStyles}
        onChangeText={onChangeNameText}
        value={nameText}
        placeholder="John Doe"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.formStyles}
        onChangeText={onChangeAgeText}
        value={ageText}
        placeholder="69"
        placeholderTextColor="#000"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.formStyles}
        onChangeText={onChangeStatusText}
        value={statusText}
        placeholder="Non Critical"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.formStyles}
        onChangeText={onChangeAddText}
        value={address}
        multiline={true}
        placeholder="941 Progress Ave"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.formStyles}
        onChangeText={onChangeAddText}
        value={address}
        multiline={true}
        placeholder="Scarborough, ON, M1G 3T8"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.formStyles}
        onChangeText={onChangeAllergiesText}
        value={allergies}
        placeholder="Shellfish & Penicillin"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.formStyles}
        onChangeText={onChangeContactName}
        value={name}
        placeholder="Jane Doe"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.formStyles}
        onChangeText={onChangePhone}
        value={phone}
        placeholder="(746)-737-8571"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.formStyles}
        onChangeText={onChangeMedicalText}
        value={medical}
        placeholder="Diabetes"
        placeholderTextColor="#000"
      />
      <View style={styles.addDiscardDeleteButtons}>
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
});
export default EditPatientDetailsScreen;
