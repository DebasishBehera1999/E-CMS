import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginBottom: 50,
      },
      imageBackground: {
        flex: 1,
        resizeMode: 'cover',
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent overlay
      },
      contentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
      },
      image1: {
        width: 270,
        height: 230,
        marginVertical: 20,
      },
      text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000a0', // Adding a background color with transparency
        marginVertical: 15,
      },
      text1: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        
        
      },
      text2: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'left',
        
        
      },
      infoContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: 20,
        borderRadius: 10,
        marginVertical: 20,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      info: {
        fontSize: 16,
        marginBottom: 5,
      },
      A:{
        flexDirection:"row",
        marginBottom:40,
        
      },
      B:{
        margin:10,
      
      },
    
      text3:{
    backgroundColor:'#2c3e50',
    fontSize: 15,
    color: 'white',
      },
      text4:{
        backgroundColor:'#0E7452',
        fontSize: 15,
        color: 'white',
          },
          text5:{
            backgroundColor:'green',
            fontSize: 15,
            color: 'white',
              }
});