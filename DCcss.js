import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor:'#e8eded',
       
      },
      inputContainer: {
        marginBottom: 20,
        marginBottom:150,
      },
      header: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: '2%',
        borderBottomWidth: 2,
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
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: '2%',
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
        padding: '4%',
        textAlign: 'center',
        color: 'white',
        borderRadius: 10,
      },
      buttonview: {
        paddingBottom: '3%',
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        textAlign: "center",
      },
      textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: "center",
      },
      placeholderStyle: {
        color: '#999',
      },
      selectedTextStyle: {
        color: '#000',
      },
      inputSearchStyle: {
        color: '#000',
      },
});