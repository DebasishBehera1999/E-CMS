




// complaint id
import React, { useState ,useEffect} from 'react';
import { View, TextInput, Alert, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as DocumentPicker from 'expo-document-picker';
import styles from './UComplaintcss'; 
 import { LinearGradient } from 'expo-linear-gradient';
import Head from './Head';

  

// Validation schema
const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  aadhar: yup.string().length(12, 'Aadhar must be exactly 12 digits').required('Aadhar is required'),
  phone: yup.string().length(10, 'Phone number must be exactly 10 digits').required('Phone number is required'),
  complaintDetails: yup.string().required('Complaint details are required'),
  district: yup.string().required('District is required'),
  mandal: yup.string().required('Mandal is required'),
  village: yup.string().required('Village is required'),
  source: yup.string().required('Source is required'),
  
});

const data = {
  districts: {
    "Anantapur": ["Gooty", "Guntakal"],
    "Chittoor": ["Punganur", "Madanapalle"],
    "Srikakulam": ["Punganur", "Madanapalle"],
    "Vizianagaram": ["Punganur", "Madanapalle"],
    "Visakhapatnam": ["Punganur", "Madanapalle"],
    "East Godavari": ["Punganur", "Madanapalle"],
    "West Godavari": ["Punganur", "Madanapalle"],
  },
  mandals: {
    "Gooty": ["Gooty Village 1", "Gooty Village 2"],
    "Guntakal": ["Guntakal Village 1", "Guntakal Village 2"],
    "Punganur": ["Punganur Village 1", "Punganur Village 2"],
    "Madanapalle": ["Madanapalle Village 1", "Madanapalle Village 2"],
  },
  sources: [
    "Email",
    "Phone",
    "EC",
    "Press/e-Media",
    "In-writing",
    "SMS",
  ],
};

const districtCodes = {
  "Anantapur": "ANA",
  "Chittoor": "CHI",
  "Srikakulam": "SKL",
  "Vizianagaram": "VZM",
  "Visakhapatnam": "VSP",
  "East Godavari": "EGD",
  "West Godavari": "WGD",
};


let sequenceNumbers = {};

const generateComplaintId = (district, currentDate) => {
  
  const districtCode = districtCodes[district] || "UNK";

  
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = String(currentDate.getFullYear()).slice(-2); // Last two digits of the year

  // Format date as DDMMYY
  const dateStr = `${day}${month}${year}`;
  
  // Retrieve or initialize sequence number
  const sequenceNumber = sequenceNumbers[district] || 0;
  const newSequenceNumber = sequenceNumber + 1;
  sequenceNumbers[district] = newSequenceNumber;

  // Generate and return the complaint ID
  return `${districtCode}${dateStr}${newSequenceNumber.toString().padStart(4, '0')}`;
};

const ComplaintForm = () => {
  const [mandals, setMandals] = useState([]);
  const [villages, setVillages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDistrictChange = (district, setFieldValue) => {
   

    setFieldValue('district', district);
    setFieldValue('mandal', '');
    setFieldValue('village', '');
    setMandals(data.districts[district] || []);
    setVillages([]);
  };

  const handleMandalChange = (mandal, setFieldValue) => {
    setFieldValue('mandal', mandal);
    setFieldValue('village', '');
    setVillages(data.mandals[mandal] || []);
  };

  const handleFilePick = async (setFieldValue) => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'application/pdf'],
        copyToCacheDirectory: true,
      });
      if (result.type !== 'cancel') {
        const name = result.name;
        setFieldValue('selectedFile', name);
        setSelectedFile(result);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while picking the file');
      console.error('File pick error:', error);
    }
  };

  
  const [timeStamp, setTimeStamp] = useState('');
  useEffect(() => {
    const currentDateTime = new Date().toLocaleString();
    setTimeStamp(currentDateTime);
  }, []);


  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  const handleSubmit = async (values) => {
    try {
      const currentDate = new Date();
      const complaintId = generateComplaintId(values.district, currentDate);
      const requestData = { ...values, complaintId,timeStamp };
      const response = await fetch('http://192.168.1.179:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      Alert.alert('Data sent successfully!', JSON.stringify(data));
    } catch (error) {
      Alert.alert('Error', error.message);
      console.error('Error submitting data:', error);
    }
  };
//  backgroundColor: '#2c3e50',
  return (
    <LinearGradient
      // colors={['#4c669f', '#3b5998', '#192f6a']}
      colors={['#e8eded', '#e8eded', '#e8eded']}
      style={styles.linearGradient}
    >
    <Head/>
    <Formik
      initialValues={{ name: '', aadhar: '', phone: '', complaintDetails: '', district: '', mandal: '', village: '', source: '', selectedFile: null, }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >


      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
        
        <ScrollView contentContainerStyle={styles.container}>
          
          <Text style={styles.header}>COMPLAINT REGISTRATION FORM FOR ‘Agent’</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Name</Text>
            <TextInput
              style={[styles.input, { textTransform: 'uppercase' }]}
              placeholder="Enter your name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <Text style={styles.text}>Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              keyboardType="phone-pad"
            />
            {touched.phone && errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

            <Text style={styles.text}>Aadhar</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Aadhar number"
              value={values.aadhar}
              onChangeText={handleChange('aadhar')}
              onBlur={handleBlur('aadhar')}
              keyboardType="numeric"
            />
            {touched.aadhar && errors.aadhar && <Text style={styles.errorText}>{errors.aadhar}</Text>}

            <Text style={styles.text}>District</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={values.district}
                onValueChange={(itemValue) => handleDistrictChange(itemValue, setFieldValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select District" value="" />
                {Object.keys(data.districts).map((district) => (
                  <Picker.Item key={district} label={district} value={district} />
                ))}
              </Picker>
            </View>
            {touched.district && errors.district && <Text style={styles.errorText}>{errors.district}</Text>}

            <Text style={styles.text}>Mandal</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={values.mandal}
                onValueChange={(itemValue) => handleMandalChange(itemValue, setFieldValue)}
                enabled={mandals.length > 0}
                style={styles.picker}
              >
                <Picker.Item label="Select Mandal" value="" />
                {mandals.map((mandal) => (
                  <Picker.Item key={mandal} label={mandal} value={mandal} />
                ))}
              </Picker>
            </View>
            {touched.mandal && errors.mandal && <Text style={styles.errorText}>{errors.mandal}</Text>}

            <Text style={styles.text}>Village</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={values.village}
                onValueChange={(itemValue) => setFieldValue('village', itemValue)}
                enabled={villages.length > 0}
                style={styles.picker}
              >
                <Picker.Item label="Select Village" value="" />
                {villages.map((village) => (
                  <Picker.Item key={village} label={village} value={village} />
                ))}
              </Picker>
            </View>
            {touched.village && errors.village && <Text style={styles.errorText}>{errors.village}</Text>}

            <Text style={styles.text}>Source</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={values.source}
                onValueChange={(itemValue) => setFieldValue('source', itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select Source" value="" />
                {data.sources.map((source) => (
                  <Picker.Item key={source} label={source} value={source} />
                ))}
              </Picker>
            </View>
            {touched.source && errors.source && <Text style={styles.errorText}>{errors.source}</Text>}

            <Text style={styles.text} >Attachment:</Text>
            <TouchableOpacity onPress={() => handleFilePick(setFieldValue)} style={styles.file}>
              <Text>Attachment File</Text>
            </TouchableOpacity>
            <Text>{values.selectedFile}</Text>

            <Text style={styles.text}>Complaint Details:</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Enter complaint details"
              value={values.complaintDetails}
              onChangeText={handleChange('complaintDetails')}
              onBlur={handleBlur('complaintDetails')}
              multiline
            />
            {touched.complaintDetails && errors.complaintDetails && <Text style={styles.errorText}>{errors.complaintDetails}</Text>}

          
            <TextInput
            style={styles.ts}
              value={timeStamp}
            />
            <View style={styles.buttonview}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.but}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.brand}>@Powered By <Text style={{ color: 'green' }} onPress={() => openLink('https://www.ridhitek.com')}>Ridhitek</Text></Text>
            </View>
          
          </View>
        </ScrollView>
      )}
      
    </Formik>
    </LinearGradient>
  );
};



export default ComplaintForm;