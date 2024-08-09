import { StatusBar,  TextInput, View,Button,Text, ScrollView, TouchableOpacity,StyleSheet,Image,Linking,Alert,Modal,Pressable} from 'react-native'

import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState ,useEffect} from 'react';
import * as DocumentPicker from 'expo-document-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './ATRcss';
const ATR = () => {
    const [valueo, setValueo] = useState(null);
    const seizureType= [
        { label: 'vehicles', value: 'option1' },
        { label: 'Contraband', value: 'option2' },
        { label: 'Others', value: 'option3' },
      ];
      const crimeDetection= [
        { label: 'Detected', value: 'option1' },
        { label: 'Not Detected', value: 'option2' },
      ];
      const propertyType= [
        { label: '', value: 'option1' },
        { label: '', value: 'option2' },
      ];
      const illicitLiquor= [
        { label: ' Adulterated Toddy', value: 'option1' },
        { label: 'NDPL', value: 'option2' },
        { label: ' Duty Paid Liquor (IML) ', value: 'option3' },
        { label: ' Spurious Liquor', value: 'option4' },
        { label: ' RS/ENA', value: 'option5' }, 
        { label: ' ID Liquor ', value: 'option6' },
        { label: ' Wash', value: 'option7' },
        { label: ' Others(IL)', value: 'option8' }, 
       
      ];
    
      const [hover, setHover] = useState(false);

      const validationSchema = Yup.object().shape({
        
        CasesBooked: Yup.string().required('Fill the  details'),
        PersonArrested: Yup.string().required(' Fill the  details'),
        
        atrAttachment: Yup.mixed().required('field is required'),
        seizureType: Yup.string().required('DropDown field is required'),
        propertyType:Yup.string().required("DropDown field is required"),
        illicitLiquor:Yup.string().required("DropDown field is required"),
        crimeDetection:Yup.string().required("DropDown field is required"),
        Atr:Yup.string().required(" field is required"),
        vehiclesSeized : Yup.string().required(' Fill the details'),
        quantitySeized:Yup.string().required(" field is required"),
        US:Yup.string().required(" field is required"), 
      });
      const [atrAttachment, setAtrAttachment] = useState(null);
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
            setFieldValue('atrAttachment', name)
          }
       
        } catch (error) {
          Alert.alert('Error', 'An error occurred while picking the file');
          console.error('File pick error:', error);
        }
      };


      const openLink = (url) => {
        Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
      };
      const [modalVisible, setModalVisible] = useState(false);
    
  return (
    <ScrollView style={styles.cont} showsVerticalScrollIndicator={false} >
    <View>
        <StatusBar></StatusBar>
      
     
       

               <Formik
              initialValues={{  CasesBooked: '' , PersonArrested :'' ,vehiclesSeized :'',
             seizureType:'',propertyType:'',illicitLiquor:'',crimeDetection:'', 
                Atr:'',quantitySeized:'' ,US:'',atrAttachment:'', 
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                 Alert.alert("Success", "Form submitted successfully!");
                setModalVisible(true);
              }}
            >
            
               {({ handleChange, handleBlur, handleSubmit, setFieldTouched,setFieldValue, values, errors, touched }) => ( 
                 
            
                
                <View>
                  <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('');
          setModalVisible(!modalVisible);
        }}>
          <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
          <Text style={styles.header}>ATR PRELIMINARY</Text>
              

          <Text style={styles.text}>Crime Dection</Text>
                  <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={crimeDetection}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!hover ? 'Select crime Dection' : '...'}
                    value={values.crimeDetection}
                    onFocus={() => setHover(true)}
                    onBlur={() => setHover(false)}
                    onChange={item => {
                      setFieldValue('crimeDetection', item.value);
                    }}
                  />
                  {touched.crimeDetection && errors.crimeDetection && <Text style={styles.errorText}>{errors.crimeDetection}</Text>}
            
               <Text style={styles.text}>Atr</Text>
               <TextInput
                 style={styles.input}
                 placeholder="Atr"
                 onChangeText={handleChange('Atr')}
                 onBlur={handleBlur('Atr')}
                 value={values.Atr}
                
               />
               {touched.Atr && errors.Atr && <Text style={styles.errorText}>{errors.Atr}</Text>}

               
         <View style={styles.fieldContainer}>
        <Text style={styles.label}> Attachment</Text>
        <TouchableOpacity onPress={() => handleFilePick(setFieldValue)} style={styles.fileButton}>
        <Text style={styles.fileButtonText} >Download Attachment</Text>
      </TouchableOpacity>
       <Text>{values.atrAttachment}</Text> 
       </View>
  {errors.atrAttachment && touched.atrAttachment && <Text style={styles.errorText}>{errors.atrAttachment}</Text>}

                  <Text style={styles.text}>Cases Booked</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Cases Booked"
                      keyboardType="numeric"
                    onChangeText={handleChange('CasesBooked')}
                    onBlur={handleBlur('CasesBooked')}
                    value={values.CasesBooked}
                   
                  />
                  {touched.CasesBooked && errors.CasesBooked && <Text style={styles.errorText}>{errors.CasesBooked}</Text>}
                  

                  <Text style={styles.text}>Person Arrested</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Person Arrested"
                      keyboardType="numeric"
                    onChangeText={handleChange('PersonArrested')}
                    onBlur={handleBlur('PersonArrested')}
                    value={values.PersonArrested}
                   
                  />
                  {touched.PersonArrested && errors.PersonArrested && <Text style={styles.errorText}>{errors.PersonArrested}</Text>}

                   <Text style={styles.text}> Quantity Seized (Litres) </Text>
                  <TextInput 
                  style={styles.input}
                  placeholder='Enter The Value'
                   keyboardType="numeric"
                  onChangeText={handleChange(' quantity')}
                  onBlur={handleBlur(' quantity')}
                  value={values. quantity}/>
                  {touched. quantity && errors. quantity && <Text style={styles.errorText}>{errors. quantity}</Text>} 

               
                  <Text style={styles.text}>Seizure Type</Text>
                  <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={seizureType}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!hover ? 'Select seizure Type' : '...'}
                    value={values.seizureType}
                    onFocus={() => setHover(true)}
                    onBlur={() => setHover(false)}
                    onChange={item => {
                      setFieldValue('seizureType', item.value);
                    }}
                  />
                  {touched.seizureType && errors.seizureType && <Text style={styles.errorText}>{errors.seizureType}</Text>}
            
                  <Text style={styles.text}> VehiclesSeized (Litres) </Text>
                  <TextInput 
                  style={styles.input}
                  placeholder='Enter The Value'
                   keyboardType="numeric"
                  onChangeText={handleChange('  vehicles')}
                  onBlur={handleBlur('  vehicles')}
                  value={values.  vehicles}/>
                  {touched.  vehicles && errors.  vehicles && <Text style={styles.errorText}>{errors.  vehicles}</Text>}

                  <Text style={styles.text}>Property type</Text>
                  <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={propertyType}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!hover ? 'Select property Type' : '...'}
                    value={values.propertyType}
                    onFocus={() => setHover(true)}
                    onBlur={() => setHover(false)}
                    onChange={item => {
                      setFieldValue('propertyType', item.value);
                    }}
                  />
                  {touched.propertyType && errors.propertyType && <Text style={styles.errorText}>{errors.propertyType}</Text>}
            
                   
                  <Text style={styles.text}>IllicitLiquor</Text>
                  <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={illicitLiquor}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!hover ? 'Select illicit Liquor' : '...'}
                    value={values.illicitLiquor}
                    onFocus={() => setHover(true)}
                    onBlur={() => setHover(false)}
                    onChange={item => {
                      setFieldValue('illicitLiquor', item.value);
                    }}
                  />
                  {touched.illicitLiquor && errors.illicitLiquor && <Text style={styles.errorText}>{errors.illicitLiquor}</Text>}
            
               
              
              
               

               
               <Text style={styles.text}>U/S</Text>
                  <TextInput 
                  style={styles.input}
                  placeholder='U/S'
                  onChangeText={handleChange('US')}
                  onBlur={handleBlur('US')}
                  value={values.US}/>
                  {touched.US && errors.US && <Text style={styles.errorText}>{errors.US}</Text>} 

                 
                  <View style={styles.buttonview}>
              <TouchableOpacity  onPress={handleSubmit}>
              <Text title="Submit" style={styles.but}>SUBMIT</Text>
              </TouchableOpacity>
              </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>

            
   
          </View>
        </View>
        </ScrollView>
      </Modal>
    
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
          
        <Text style={styles.textStyle}>ATR Preliminary</Text>
      </Pressable>

    </View>
                </View>

 )}
             </Formik> 
            
              
             
              
    </View>
    </ScrollView>
  )
}

export default ATR;

