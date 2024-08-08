import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles= StyleSheet.create({
    cont:{
        width:'100%',
        backgroundColor:'#e8eded'
    },
    container:{
        flex:0,
        justifyContent:'center',
        width:'95%',
        paddingLeft:'5%',
        backgroundColor:'#e8eded'
    },
  scrollContainer: {

    height:600
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  text:{
    fontWeight:'bold',
    fontSize:18,
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
  buttontext:{
    fontSize:16,
    fontWeight:'bold',
    
    textAlign:'center',
    color:'white',
    padding:'4%',

  },
  buttonView:{
    paddingBottom:'10%',
  },
  brand:{
    textAlign:'center',
    padding:'3%',
  },
  button: {
    backgroundColor: 'green', 
    
    borderRadius: 10,
  },
  buttonHover: {
    backgroundColor: 'white', 
  },
  imageview:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
    width: '100%',
    aspectRatio: 3.4,
    resizeMode: 'contain', 
    },
  head:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    paddingVertical:'1.5%'
  },
  text1:{
      fontSize:18,
      color:'white',
      fontWeight:'bold',
      backgroundColor:'gray',
      padding:'2%',
      width:'40%',
      textAlign:'center',
      borderRadius:10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalimage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

})
export default styles