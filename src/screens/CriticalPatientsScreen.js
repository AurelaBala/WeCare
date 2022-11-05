import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CriticalPatientsScreen({ Home }) {
    const navigation = useNavigation();
    return (
      <View style={styles.customScrollView}>
        {/* <Pressable style = {styles.defaultButton} title="Go back" onPress={() => navigation.goBack()} ><Text style={styles.textButton} >Go Back</Text></Pressable> */}
        <ScrollView style={styles.scrollViewStyle}>
        <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 1</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 2</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 3</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 4</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 5</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 6</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 7</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 8</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 9</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 10</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 11</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 12</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 13</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 14</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 15</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 16</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 17</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 18</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 19</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 20</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 21</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 22</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 23</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 24</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 25</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 26</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 27</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 28</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 29</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 30</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 31</Text>
          </Pressable>
          <Pressable style={styles.scrollPatient} title="Patient 1" onPress={() => navigation.navigate("Patient's Information")}>
            <Text style={styles.patientText}>Patient 32</Text>
          </Pressable>
        </ScrollView>
      </View>
    );
}

export default CriticalPatientsScreen;

const styles = StyleSheet.create({
  customScrollView: {
    width: '80%',
    marginLeft: '10%',
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
  },
  scrollViewStyle: {
    padding: 5,
  },
  scrollPatient: {
    borderBottomColor: '#dda0dd',
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#008b8b'
  },
  patientText: {
    color: 'white',
  },
})