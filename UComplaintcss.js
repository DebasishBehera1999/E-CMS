import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        padding: 10,
        // backgroundColor: '#004d40',
        
      },
      linearGradient: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
      },
      inputContainer: {
        marginBottom: 150,
      },
      header: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: '2%',
        borderBottomWidth: 2,
        color:'black'
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
      
      pickerContainer: {
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 15,
        marginBottom: hp('1%'),
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.28,
        shadowRadius: 11,
        elevation: 5,
      },
      picker: {
        width: '100%',
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: '2%',
        color: 'black',
    
      },
      textArea: {
        height: hp('12%'),
       borderColor: '#ffffff',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
        textAlignVertical: 'top',
        borderRadius: 15,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
      },
      brand: {
        textAlign: 'center',
        paddingBottom: '3%',
        color:'black'
      },
      file: {
        marginTop: hp('1%'),
        borderWidth: 1,
        borderColor: '#ffffff',
        
        backgroundColor: '#ffffff',
        padding: wp('4%'),
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 11,
        elevation: 7,
        color: '#fff', // Text color set to white
        fontWeight: 'bold' // Text font set to bold
      },
      
      but: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#2c3e50',
        padding: wp('4%'),
        textAlign: 'center',
        color: 'white',
        borderRadius: 15,
      },
      buttonview: {
        paddingBottom: '3%',
        
      },
      ts:{
        color:'#e8eded'
      }
});
