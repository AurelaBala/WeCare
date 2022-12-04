import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';




const ViewAllPatientsScreen = ({}) => {



  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const route = useRoute();
  var token = route.params.token
  var password = route.params.password
  
//console.log(to)



  useEffect(() => {
    //var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkF1cmVsYSIsImlhdCI6MTY2ODYxNDE4MX0.JldNNuROQ_fhskcNI-aIKmOoiUxOkmQOGYtz9OgLBEY"
    fetch('https://we-care-centennial.herokuapp.com/wecare/patient?token='+token+'&password='+password)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  


React.useEffect(() => {
  const focusHandler = navigation.addListener('focus', () => {
    fetch('https://we-care-centennial.herokuapp.com/wecare/patient?token='+token+'&password='+password)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  });
  return focusHandler;
}, [navigation]);

    return (
   <View>
      <View style={styles.customScrollView}>
      
      {(data.length == 0) ? <Text style={styles.scrollPatient}><Text style = {styles.patientText}>No patients found.</Text></Text> :
      isLoading ? <Text>Loading...</Text> : 
        (
        <FlatList style={styles.scrollViewStyle}
            data={data}
            //renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable style={styles.scrollPatient} title="Patient" onPress={() => navigation.navigate("Patient's Information", {
                patient_id: item.id,
                token: token,
                password: password,
                record_link: item.record_link
              })}>
              <Text style={styles.patientText}>{item.PatientName}</Text>
              </Pressable>
            )}
          />
         
        )}
      </View>
     </View> 
    );
}

export default ViewAllPatientsScreen;

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