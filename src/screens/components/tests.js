import * as React from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';
import { useEffect, useState } from 'react';

// You can import from local files

// or any pure javascript modules available in npm

export default App= () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data.PatientName);
  var patientName = data.PatientName

  useEffect(() => {
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkF1cmVsYSIsImlhdCI6MTY2ODU1MDg3N30.DCTK_4--5KUrFHa9K-MR41bdf6bugSBy7pmzMoMsei8"
    var password = '123'
    var id = "ci9vpf"
    fetch('http://127.0.0.1:3000/wecare/get-patient?token='+token+'&password='+password+'&patient_id='+id)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
       <Text>{patientName}</Text>
      </View> 
     );
 

  //   constructor(props) {
  //   super(props)
  //   this.state = {
  //     patient: undefined,
  //     isLoading: true
  //   }
  // }
  
  // getPatientDetailFromApi(id) {
  //   var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkF1cmVsYSIsImlhdCI6MTY2ODU1MDg3N30.DCTK_4--5KUrFHa9K-MR41bdf6bugSBy7pmzMoMsei8"
  //   var password = '123'
  //   return fetch('http://127.0.0.1:3000/wecare/get-patient?token='+token+'&password='+password+'&patient_id='+id)
  //     .then(response => response.json())
  //     .then(data => {
  //       // set the state here 
  //       this.setState({patient: data.results[0]})
  //       })
  //   .catch((error) => console.log(error));
  // }

  
  // componentDidMount() {
  //   var patient_id = "ci9vpf"
  //   this.getPatientDetailFromApi(patient_id);
  // }
  // renderPatient() {
  //   // if we have an patient display it 
  //   if (this.state.patient) {
  //     return (
  //       <View>
  //       <Text> Patient: {this.state.patient.PatientName}</Text>
       
  //       </View>
  //     );
  //   }
    
  // }
  // render() {
  //   console.log('state', this.state);
  //   return (
  //   <View style={styles.container}>
  //       {this.renderPatient()}
  //   </View>
  // );
  // }


  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
