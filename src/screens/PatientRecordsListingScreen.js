import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PatientRecordsListingScreen = () => {
  const [isVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();
  const settingVisibility = () => {
    setModalVisible(true);
  };
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
                onPress={() => navigation.navigate("Patient's Information")}
              >
                <Text style={styles.subTextModal}>Delete All Records</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Text style={styles.heading}>John's Records</Text>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          showsVerticalScrollIndicator="true"
          style={styles.scrollViewStyle}
        >
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              10/10/2022 : Blood Pressure - 120/80 mmHg
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              10/10/2022 : Heartbeat Rate - 75 / min
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              09/10/2022 : Respiratory Rate - 20 / min
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              09/10/2022 : Blood Oxygen - 97 %
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              08/10/2022 : Blood Pressure - 120/80 mmHg
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              08/10/2022 : Heartbeat Rate - 75 / min
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              08/10/2022 : Respiratory Rate - 20 / min
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              08/10/2022 : Blood Oxygen - 97 %
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              05/10/2022 : Blood Pressure - 120/80 mmHg
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              05/10/2022 : Heartbeat Rate - 75 / min
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              05/10/2022 : Respiratory Rate - 20 / min
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              05/10/2022 : Blood Oxygen - 97 %
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              02/10/2022 : Blood Pressure - 120/80 mmHg
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              02/10/2022 : Heartbeat Rate - 75 / min
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              02/10/2022 : Respiratory Rate - 20 / min
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              02/10/2022 : Blood Oxygen - 97 %
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              29/09/2022 : Blood Pressure - 120/80 mmHg
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              29/09/2022 : Heartbeat Rate - 75 / min
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              29/09/2022 : Respiratory Rate - 20 / min
            </Text>
          </Pressable>
          <Pressable
            style={styles.scrollPatientRecord}
            onPress={() => navigation.navigate(`Update Patient's Record`)}
          >
            <Text style={styles.patientText}>
              29/09/2022 : Blood Oxygen - 97 %
            </Text>
          </Pressable>
        </ScrollView>
      </View>
      <View style={styles.bottomDeleteButton}>
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
    paddingTop: 30,
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
  patientText: {
    color: "white",
  },
  heading: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
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
