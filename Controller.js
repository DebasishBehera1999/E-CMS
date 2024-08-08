import { StatusBar, TextInput, View, Image, Text, ScrollView, TouchableOpacity, Alert,Modal, Linking} from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'; 
import * as Yup from 'yup';
import { Dropdown } from 'react-native-element-dropdown'; // external library for dropdown
import styles from './Controllercss'
import Head from './Head';

const Controller = ({ navigation,route }) => {
  const [hover, setHover] = useState(false);
  const {complaintData} = route.params;
  // console.log('complaint data',complaintData);
  // dropdown data for all dropdowns
  const statusData = [
    { label: 'New', value: 'option1' },
    { label: 'Unattended', value: 'option2' },
    { label: 'Assigned', value: 'option3' },
    { label: 'ATR Preliminary Submitted', value: 'option4' },
    { label: 'Enquiry Completed', value: 'option5' },
    { label: 'Invalid', value: 'option6' },
    { label: 'Closed', value: 'option7' },
    { label: 'Review', value: 'option8' },
  ];

  const reasonData = [
    { label: 'Not Pertaining to department', value: 'option1' },
    { label: 'Not Verifiable', value: 'option2' },
    { label: 'Not Legible', value: 'option3' },
    { label: 'Others', value: 'option4' },
  ];

  const complaintTypeData = [
    { label: 'ID Liquor', value: 'option1' },
    { label: 'Unauthorised IML', value: 'option2' },
    { label: 'Toddy Adulteration', value: 'option3' },
    { label: 'A4 Shop Violation', value: 'option4' },
    { label: 'E2B Violation', value: 'option5' },
    { label: 'Defence Liquor', value: 'option6' },
    { label: 'NDPL', value: 'option7' },
    { label: 'Spurious Liquor', value: 'option8' },
    { label: 'RS/ENA', value: 'option9' },
    { label: 'DS', value: 'option10' },
    { label: 'Ganja', value: 'option11' },
    { label: 'Excise Personnel', value: 'option12' },
    { label: 'Others', value: 'option13' },
  ];

  const v4voilationdata = [
    { label: 'MRP', value: 'option1' },
    { label: 'Timings', value: 'option2' },
    { label: 'Loose sale', value: 'option3' },
    { label: 'Unauthorised Storage', value: 'option4' },
    { label: 'Others (A4)', value: 'option5' },
  ];

  const b2bvoilationdata = [
    { label: 'Timing', value: 'option1' },
    { label: 'Parcel Sale', value: 'option2' },
    { label: 'Unauthorised Storage', value: 'option3' },
    { label: 'Others (2B)', value: 'option4' },
  ];

  const assignedtodata = [
    { label: 'DC_SKL', value: 'option1' },
    { label: 'DC_VZM', value: 'option2' },
    { label: 'DC_VSP', value: 'option3' },
    { label: 'DC_EG', value: 'option4' },
    { label: 'DC_WG', value: 'option5' },
    { label: 'DC_KRS', value: 'option6' },
    { label: 'DC_GNT', value: 'option7' },
    { label: 'DC_PRK', value: 'option8' },
    { label: 'DC_NLR', value: 'option9' },
    { label: 'DC_CTR', value: 'option10' },
    { label: 'DC_KDP', value: 'option11' },
    { label: 'DC_ATP', value: 'option12' },
    { label: 'DC_KNL', value: 'option13' },
    { label: 'STF1', value: 'option14' },
    { label: 'STF2', value: 'option15' },
    { label: 'STF3', value: 'option16' },
    { label: 'STF4', value: 'option17' },
    { label: 'STF5', value: 'option18' },
  ];
// validating input fielsds using yup library
      const validationSchema = Yup.object().shape({
        // ComplaintId: Yup.string().required('Complaint ID is required'),
        // ComplaintSource: Yup.string().required('Complaint Source is required'),
        // ComplainantName: Yup.string().required('Complainant Name is required'),
        // District: Yup.string().required('District is required'),
        // Mandal: Yup.string().required('Mandal is required'),
        // Village: Yup.string().required('Village is required'),
        // ComplaintDetails: Yup.string().required("Complaint details are required"),
        // Upload: Yup.string().required('File is required'),
        status: Yup.string().required('Status is required'),
        reason: Yup.string().required('Reason is required'),
        complaintType: Yup.string().required("Complaint Type is required"),
        v4voilation: Yup.string().required("V4 Violation is required"),
        b2voilation: Yup.string().required("B2 Violation is required"),
        assignedto: Yup.string().required("Assigned To is required"),
        Atr: Yup.string().required("ATR is required"),
        Atrupload: Yup.string().required("ATR Upload is required"),
        Feedback: Yup.string().min(10, 'Feedback must be at least 10 characters').required('Feedback is required'),
      });
                //create useState and perform open and close operations on it to visible or not by default it is false we can make it visble by
                 // creating function and changing it to true to visible and viceversa
                  const [modalVisible, setModalVisible] = useState(false);

                  const openModal = () => {
                    setModalVisible(true);
                  };

                  const closeModal = () => {
                    setModalVisible(false);
                  };

                  //create useState and perform open and close operations on it to visible or not by default it is false we can make it visble by
                 // creating function and changing it to true to visible and viceversa
                  const [atrUploadModalVisible, setAtrUploadModalVisible] = useState(false);
                  const openAtrUploadModal = () => {
                    setAtrUploadModalVisible(true);
                  };
                
                  const closeAtrUploadModal = () => {
                    setAtrUploadModalVisible(false);
                  };



            // onsubmit function for form 
              const handleFormSubmit = (values, actions) => {
                Alert.alert(
                  'Form Submitted',
                  'Your form has been successfully submitted!',
                  [{
                    text: 'OK', onPress: () => {
                      actions.resetForm();
                      navigation.navigate('Dashboard');
                    }
                  }],
                  { cancelable: false }
                );
              };
            
  return (
    <View>
      <StatusBar></StatusBar>
      <Head/>
      <View>
        <Text style={styles.head}>CONTROL ROOM FORM</Text>
      </View>
      <View style={styles.cont}>
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Formik
              initialValues={{
                ComplaintId: '', ComplaintSource: '', ComplainantName: '', District: '', Mandal: '', Village: '',
                ComplaintDetails: '', Upload: '', status: null, reason: null, complaintType: null, v4voilation: null, b2voilation: null, assignedto: null, Atr: '', Feedback: '', Atrupload: ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
                <View>
                  <Text style={styles.text}>Complaint Id</Text>
                   <TextInput
                    style={styles.input}
                    placeholder="Enter Complaint Id"
                    // onChangeText={handleChange('ComplaintId')}
                    onBlur={handleBlur('ComplaintId')}
                    value={complaintData?.complaintId}
                    // value={values.ComplaintId}
                    editable={false}
                  />
                  

                  <Text style={styles.text}>Complaint Source</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Complaint Source"
                    value={complaintData?.source}
                    // value={values.ComplaintSource}
                    editable={false}
                  />
                 

                  <Text style={styles.text}>Complainant Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Complainant Name"
                    editable={false}
                    value={complaintData?.name}
                  />
                  

                  <Text style={styles.text}>District</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Enter District'
                    editable={false}
                    value={complaintData?.district}
                  />
                  
                  <Text style={styles.text}>Mandal</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Enter Mandal'
                    editable={false}
                    value={complaintData?.mandal}
                  />
                  

                  <Text style={styles.text}>Village</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Enter Village'
                    editable={false}
                    value={complaintData?.village}
                  />
                  

                  <Text style={styles.text}>Complaint Details</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Complaint Details'
                    editable={false}
                    value={complaintData?.complaintDetails}
                  />
                  
                  <TouchableOpacity onPress={openModal} >
                  <Text style={styles.text1} >Upload</Text>
                  </TouchableOpacity>
                            <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={closeModal}
                                  >
                                    <View style={styles.modalContainer}>
                                      <View style={styles.modalContent}>
                                        <Image
                                          source={require('./assets/apgovlogo.png')}
                                          style={styles.modalimage}
                                        />
                                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                          <Text style={styles.closeButtonText}>Close</Text>
                                        </TouchableOpacity>
                                      </View>
                                    </View>
                                  </Modal>
                  

                        
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
                    placeholder={!hover ? 'Select status' : '...'}
                    value={values.status}
                    onFocus={() => setHover(true)}
                    onBlur={() => setHover(false)}
                    onChange={item => {
                      setFieldValue('status', item.value);
                    }}
                  />
                  {touched.status && errors.status && <Text style={styles.errorText}>{errors.status}</Text>}

                  <Text style={styles.text}>Reason</Text>
                  <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={reasonData}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!hover ? 'Select reason' : '...'}
                    value={values.reason}
                    onFocus={() => setHover(true)}
                    onBlur={() => setHover(false)}
                    onChange={item => {
                      setFieldValue('reason', item.value);
                    }}
                  />
                  {touched.reason && errors.reason && <Text style={styles.errorText}>{errors.reason}</Text>}

                  <Text style={styles.text}>Complaint Type</Text>
                  <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={complaintTypeData}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!hover ? 'Select complaint type' : '...'}
                    value={values.complaintType}
                    onFocus={() => setHover(true)}
                    onBlur={() => setHover(false)}
                    onChange={item => {
                      setFieldValue('complaintType', item.value);
                    }}
                  />
                  {touched.complaintType && errors.complaintType && <Text style={styles.errorText}>{errors.complaintType}</Text>}
                      {values.complaintType === 'option4' && (
                        <View>
                  <Text style={styles.text}>V4 Violation</Text>
                  <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={v4voilationdata}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!hover ? 'Select V4 violation' : '...'}
                    value={values.v4voilation}
                    onFocus={() => setHover(true)}
                    onBlur={() => setHover(false)}
                    onChange={item => {
                      setFieldValue('v4voilation', item.value);
                    }}
                  />
                  {touched.v4voilation && errors.v4voilation && <Text style={styles.errorText}>{errors.v4voilation}</Text>}
                  </View>
                )}
                {values.complaintType === 'option5' && (<View>
                  <Text style={styles.text}>B2 Violation</Text>
                  <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={b2bvoilationdata}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!hover ? 'Select B2 violation' : '...'}
                    value={values.b2voilation}
                    onFocus={() => setHover(true)}
                    onBlur={() => setHover(false)}
                    onChange={item => {
                      setFieldValue('b2voilation', item.value);
                    }}
                  />
                  {touched.b2voilation && errors.b2voilation && <Text style={styles.errorText}>{errors.b2voilation}</Text>}
                  </View>
                )}
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
                  {touched.assignedto && errors.assignedto && <Text style={styles.errorText}>{errors.assignedto}</Text>}

                  <Text style={styles.text}>ATR</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='ATR'
                    onChangeText={handleChange('Atr')}
                    onBlur={handleBlur('Atr')}
                    value={values.Atr}
                  />
                  {touched.Atr && errors.Atr && <Text style={styles.errorText}>{errors.Atr}</Text>}

                  <TouchableOpacity onPress={openAtrUploadModal} >
                    <Text style={styles.text1} >ATR Upload</Text>
                  </TouchableOpacity>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={atrUploadModalVisible}
                    onRequestClose={closeAtrUploadModal}
                  >
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                        <Image
                          source={require('./assets/apgovlogo.png')}
                          style={styles.modalimage}
                        />
                        <TouchableOpacity style={styles.closeButton} onPress={closeAtrUploadModal}>
                          <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                  <Text style={styles.text}>Feedback</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Feedback'
                    onChangeText={handleChange('Feedback')}
                    onBlur={handleBlur('Feedback')}
                    value={values.Feedback}
                  />
                  {touched.Feedback && errors.Feedback && <Text style={styles.errorText}>{errors.Feedback}</Text>}


                  <Text style={styles.text}>Timestamp</Text>
                  {/* <Text style={{paddingBottom:'5%'}}>12-06-2024 13:08:56</Text> */}
                  <TextInput
                    style={styles.input}
                    placeholder='Time Stamp'
                    value={complaintData?.timeStamp}
                    editable={false}
                  />

                  <View style={styles.buttonView}>
                  <TouchableOpacity style={[styles.button, hover && styles.buttonHover]}
                  onPress={handleSubmit}
                  onPressIn={() => setHover(true)}
                  onPressOut={() => setHover(false)}>
                  <Text style={styles.buttontext}>Submit</Text>
                  </TouchableOpacity>
                  </View>
                 
                  <Text style={styles.brand} onPress={()=>{
                    Linking.openURL('https://ridhitek.com');
                  }}>
                    @ Powered by {' '}
                    <Text style={{ color: 'green' }}>Ridhitek</Text>
                </Text>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Controller;