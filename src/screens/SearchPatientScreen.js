import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';




const SearchPatientScreen = ({}) => {

  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const route = useRoute();
  var token = route.params.token
  var password = route.params.password
  var patient_name = route.params.patient_name

  if(token == "") 
{
  navigation.navigate('Sign in')
}

  useEffect(() => {
   
    fetch('https://we-care-centennial.herokuapp.com/wecare/byname/'+patient_name+'?token='+token+'&password='+password)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
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

export default SearchPatientScreen;

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