
import { StyleSheet ,Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 13,
        backgroundColor: '#f8f8f8',
      },
      logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        padding: 20,
      },
      iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: "#dddddd",
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
      },
      socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative',
      },
      img: {
        width: width - 40,
        height: height * 0.25,
        resizeMode: 'cover',
        borderRadius: 10,
      },
      scrollContainer: {
        paddingBottom: 20,
      },
      texthead: {
        color: 'green',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
      subhead: {
        color: 'darkgreen',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
      },
      description: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 10,
        lineHeight: 24,
        color: '#444',
      },
      borderContainer: {
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
      },
      footer: {
        padding: 20,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        marginTop: 40,
        borderRadius: 10,
      },
      footerText: {
        fontSize: 16,
        color: '#ecf0f1',
        textAlign: 'center',
        marginBottom: 5,
      },
      brand: {
        textAlign: 'center',
        paddingBottom: '1%',
        paddingTop: '8%',
      },
      container1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: height * 0.02,
        justifyContent: 'space-evenly',
        width: width,
        height: width * 0.27,
      },
      image: {
        width: width * 0.23,
        height: height * 0.24,
        resizeMode: 'contain',
      },
     
      titleContainer: {
        flex: 1,
        marginLeft: width * 0.00,
      },
      title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#2c3e50',
      },
      title1: {
        fontSize: 14,
        color: '#2c3e50',
      },
      image1: {
        width: 65,
        height: 50,
        marginBottom: 10,
        marginLeft:5
      },
      icon:{
        flexDirection:'row'
      },
      email:{
        color:'white'
      },
      
      mailpto: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      mailText: {
        color: 'white',
        paddingLeft: width * 0.02,
        fontSize: width * 0.03,
      },
      contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      contactText: {
        color: 'black',
        paddingLeft: width * 0.02,
        fontSize: width * 0.04,
      },
      
      b: {
        flexDirection:"row",
        justifyContent: 'space-around',
        backgroundColor: '#0E7452',
      padding:10,
      
      },
});
