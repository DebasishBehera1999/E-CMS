
import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, Text, ScrollView,  Linking, TouchableOpacity, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as DocumentPicker from 'expo-document-picker';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './DCcss';
import ATR from './ATR';
import Head from './Head';

const validationSchema = yup.object().shape({

  finalRemarks: yup.string().required('Final remarks are required'),

  statusData: yup.string().required('DropDown field is required'),
  
});

const DC = () => {
  const [valueo, setValueo] = useState(null);
  const assignedtodata = [
    { label: 'SHO', value: 'SHO' },
    { label: 'ESTF', value: 'ESTF' },
    { label: 'ENF', value: 'ENF' },
    { label: 'BMPP', value: 'BMPP' },
    { label: 'CP', value: 'CP' },
    { label: 'SELF', value: 'SELF' },
  ];

  const [hover, setHover] = useState(false);
  const statusData = [
    { label: 'New(C)', value: 'New(C)' },
    { label: 'Assigned To Enquiry Officer', value: 'Assigned To Enquiry Officer' },
    { label: 'ATR Preliminary Submitted', value: 'ATR Preliminary Submitted' },
    { label: 'Review', value: 'Review' },
    { label: 'Enquiry Completed', value: 'Enquire Completed' },
  ];
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFilePick = async (setFieldValue) => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'application/pdf'],
        copyToCacheDirectory: true,
      });
      console.log('result',result);
      if(!result.success){
        const assets = result.assets;
        const name = assets[0].name
        setFieldValue('selectedFile', name)
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

//  const selectDoc =async () =>{
//   try{
// //     const doc = await DocumentPicker.pick({
// //       type:[DocumentPicker.types.pdf],
// // allowMultiSelection:true
// //     });

//     const doc = await DocumentPicker.pickMultiple({
//       type:[DocumentPicker.types.pdf,
//       DocumentPicker.types.images]
//     });
//     console.log(doc)
//   }catch(err){
//     if(DocumentPicker.isCancel(err))
//       console.log("user cancelled ",err);
//     else
//     console.log(err)
//   }
// }


  const handleSubmit = async (values) => {
    
    try {
      const response = await fetch('http://192.168.1.250:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      Alert.alert('Data sent successfully!', JSON.stringify(data));
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
        <Head/>
    <Formik
      initialValues={{ complaintId: 'skl0107240001', complaintType: 'ID Liquor', 
         complaintDetails: 'Complaint Details are from public which is not editable by the officer', 
        finalRemarks: '', mandal: 'Gooty', village: 'Gooty Village', selectedFile: '', statusData: '', assignedto: '',timeStamp:'' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.header}>DC FORM</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Complaint ID</Text>
           
            <TextInput
              style={styles.input}
              value={values.complaintId}
              editable={false}
              // onChangeText={handleChange('complaintId')}
              // onBlur={handleBlur('complaintId')}
            />
            {/* {touched.complaintId && errors.complaintId && <Text style={styles.errorText}>{errors.complaintId}</Text>} */}

            <Text style={styles.text}>Complaint Details:</Text>
            <TextInput
              style={styles.textArea}
              value={values.complaintDetails}
              editable={false}
              // onChangeText={handleChange('complaintDetails')}
              // onBlur={handleBlur('complaintDetails')}
              multiline
            />
            {touched.complaintDetails && errors.complaintDetails && <Text style={styles.errorText}>{errors.complaintDetails}</Text>}

            <Text style={styles.text}>Complaint Type</Text>
            <TextInput
              style={styles.input}
              value={values.complaintType}
              editable={false}
              // onChangeText={handleChange('complaintType')}
              // onBlur={handleBlur('complaintType')}
            />
            {/* {touched.complaintType && errors.complaintType && <Text style={styles.errorText}>{errors.complaintType}</Text>} */}

                                       <Text>Attachment:</Text>
      <TouchableOpacity onPress={() => handleFilePick(setFieldValue)} style={styles.file}>
         <Text >Attachment File</Text>
       </TouchableOpacity>
       <Text>{values.selectedFile}</Text>

            <Text style={styles.text}>Mandal</Text>
            <TextInput
              style={styles.input}
              value={values.mandal}
              editable={false}
              // onChangeText={handleChange('mandal')}
              // onBlur={handleBlur('mandal')}
            />
            {/* {touched.mandal && errors.mandal && <Text style={styles.errorText}>{errors.mandal}</Text>} */}

            <Text style={styles.text}>Village</Text>
            <TextInput
              style={styles.input}
              value={values.village}
              editable={false}
              // onChangeText={handleChange('village')}
              // onBlur={handleBlur('village')}
            />
            {/* {touched.village && errors.village && <Text style={styles.errorText}>{errors.village}</Text>} */}

            <Text style={styles.text}>Timestamp:</Text>
            <TextInput
              style={styles.input}
              value={timeStamp}
              editable={false}
            />

            <Text style={styles.text}>Status</Text>
            <Dropdown
              style={styles.input}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={statusData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!hover ? 'Select status Data' : '...'}
              value={values.statusData}
              onFocus={() => setHover(true)}
              onBlur={() => setHover(false)}
              onChange={item => {
                setFieldValue('statusData', item.value);
              }}
            />
            {touched.statusData && errors.statusData && <Text style={styles.errorText}>{errors.statusData}</Text>}

            {values.statusData === 'Assigned To Enquiry Officer' && (
              <View>
                <Text style={styles.text}>Assigned To</Text>
                <Dropdown
                  style={styles.input}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  data={assignedtodata}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!hover ? 'Select assigned to' : '...'}
                  value={values.assignedto}
                  onFocus={() => setHover(true)}
                  onBlur={() => setHover(false)}
                  onChange={item => {
                    setFieldValue('assignedto', item.value);
                  }}
                />
                {/* {touched.assignedto && errors.assignedto && <Text style={styles.errorText}>{errors.assignedto}</Text>} */}
              </View>
            )}

            <ATR />

            <Text style={styles.text}>Final Remarks</Text>
            <TextInput
              style={styles.textArea}
              value={values.finalRemarks}
              onChangeText={handleChange('finalRemarks')}
              onBlur={handleBlur('finalRemarks')}
              multiline
            />
            {touched.finalRemarks && errors.finalRemarks && <Text style={styles.errorText}>{errors.finalRemarks}</Text>}


 {/* <Button title='document' onPress={selectDoc}/> */}

            <View style={styles.buttonview}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text title="Submit" style={styles.but}>SUBMIT</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.brand}>@Powered By <Text style={{ color: 'green' }} onPress={() => Linking.openURL('https://www.ridhitek.com')}>Ridhitek</Text></Text>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
    </View>
  );
};



export default DC;
