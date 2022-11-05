import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function AddPatientScreen({ Home }) {
    const navigation = useNavigation();
    return (
      <View style={styles.addPatientView}>
        <Image style={styles.avatarImage} source={require('../../images/avatar.png')} />
        <TextInput
          style={styles.formStyles}
          placeholder = "Full Name"
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Age"
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Status"
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Current Address (Number & Street)" 
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Current Address (City, Postal Code)"
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Allergies"
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Emergency Contact (Name)"
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Emergency Contact (Number)"
        />
        <TextInput
          style={styles.formStyles}
          placeholder = "Medical Conditions"
        />
        <View style={styles.addDeleteButtons}>
          <Pressable style={styles.addPressable}><Text style={styles.addText}>Add</Text></Pressable>
          <Pressable style={styles.deletePressable}><Text style={styles.deleteText}>Delete</Text></Pressable>
        </View>
      </View>
    );
}

export default AddPatientScreen;

const styles = StyleSheet.create({
  addPatientView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginLeft: '10%',
  },
  avatarImage: {
    width:120,
    height: 120,
  },
  formStyles: {
    borderBottomColor: '#dda0dd',
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
  },
  textStyles: {
    
  },
  addDeleteButtons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  
  addPressable: {
    margin: 20,
    alignItems: 'center',
    padding: 10,
    width: '35%',
    backgroundColor: '#008b8b',
  },
  deletePressable: {
    margin: 20,
    alignItems: 'center',
    padding: 10,
    width: '35%',
    backgroundColor: '#dc143c',
  },
  addText: {
    color: 'white',
  },
  deleteText: {
    color: 'white',
  },
})