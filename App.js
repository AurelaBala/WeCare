// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen'
import HomeScreen from './src/screens/HomeScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import AddPatientScreen from './src/screens/AddPatientScreen'
import CriticalPatientsScreen from './src/screens/CriticalPatientsScreen'
import ViewAllPatientsScreen from './src/screens/ViewAllPatientsScreen'
import PatientDetailsScreen from "./src/screens/PatientDetailsScreen";
import PatientRecordsListingScreen from "./src/screens/PatientRecordsListingScreen";
import EditPatientDetailsScreen from "./src/screens/EditPatientDetailsScreen";
import CreatePatientRecordScreen from "./src/screens/CreatePatientRecordScreen";
import EditPatientRecordScreen from "./src/screens/EditPatientRecordScreen";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Sign in">
        <Stack.Screen name = "Sign in" component = {SignInScreen} />
        <Stack.Screen name = "Sign up" component = {SignUpScreen} />
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Add Patient" component = {AddPatientScreen} />
        <Stack.Screen name = "Critical Patients" component = {CriticalPatientsScreen} />
        <Stack.Screen name = "All Patients" component = {ViewAllPatientsScreen} />
        <Stack.Screen name = "Patient's Information" component={PatientDetailsScreen}/>
        <Stack.Screen name = "Patient's All Records" component={PatientRecordsListingScreen}/>
        <Stack.Screen name = "Update Patient's Information" component={EditPatientDetailsScreen}/>
        <Stack.Screen name = "Add Patient's Record" component={CreatePatientRecordScreen}/>
        <Stack.Screen name = "Update Patient's Record" component={EditPatientRecordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;