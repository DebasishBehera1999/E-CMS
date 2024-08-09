import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    cont:{
        paddingVertical: wp('2%'),
        paddingHorizontal: wp('2%'),       
      },
      header: {
        textAlign: "center",
       fontWeight:'bold',
        fontSize: 16,
        borderBottomWidth: 2,
        padding:'2%',
        marginBottom: hp('3%'),
      },
     input: {
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: wp('3%'),
        marginBottom: hp('1%'),
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: '#000000', 
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.25, // 
        shadowRadius: 10, // 
        elevation: 5, // 
    },
    input2: {
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: wp('3%'),
        marginBottom: hp('1%'),
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: '#000000', 
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.25, // 
        shadowRadius: 10, // 
        elevation: 5, // 
    },
    fileButton: {
        backgroundColor: '#2c3e50',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    fileButtonText: {
      color: '#fff',
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
    text:{
      fontWeight:'bold',
      fontSize:16,
      paddingVertical:'2%'
    },
    upload:{
      backgroundColor:'gray',
      width:'40%',
      fontSize:16,
      color:'white',
      paddingVertical:'5%',
      textAlign:'center',
      marginBottom:'3%',
      fontWeight:'700',
    },
    dropdown: {
      marginBottom: '5%',
      
      borderColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor:'whitesmoke',      
    },
    label: {
      fontSize: 18,
      marginBottom: 10,     
    },
    dropDownContainer: {
     
      backgroundColor:'whitesmoke',
     
      position:'relative',
      
    },
    file: {
      marginTop: hp('1%'),
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: hp('2%'),
      backgroundColor: '#2c3e50',
      padding: wp('3%'),
    },
    
    brand:{
      textAlign:'center',
      paddingBottom:'8%',
      paddingTop:'5%'
    },
    centeredView: {
      flex: 1,
    
    },
    modalView: {
      margin: 0,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
        fontSize:16,
        fontWeight:'bold',
        backgroundColor: '#2c3e50',
        padding:'4%',
        textAlign:'center',
        color:'white',
        borderRadius:10,       
    },
    buttonOpen: {
        backgroundColor: '#2c3e50',
      
    },
    buttonClose: {
    
      backgroundColor: '#2c3e50',
  
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign:"center",
      fontSize:16,  
    },
    modalText: {
      marginBottom: 15,
      
    },
    but:{
      fontSize:16,
      fontWeight:'bold',
      backgroundColor: '#2c3e50',
      padding:'4%',
      textAlign:'center',
      color:'white',
      borderRadius:10,
    },
    buttonview:{
      paddingBottom:'3%'
    },
});