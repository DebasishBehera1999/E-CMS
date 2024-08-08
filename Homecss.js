import { StyleSheet,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
       
      },
      scrollContainer: {
        padding: 16,
        alignItems: 'center',
      },
      card: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
      },
      cardTitleContainer: {
        alignItems: 'center',
        marginBottom: 10,
      },
      cardTitle: {
        fontSize: 15,
            fontWeight: 'bold',
            paddingVertical: 5,
            paddingHorizontal: 15,
            backgroundColor: '#2c3e50',
            borderRadius: 50,
            textAlign: 'center',
            color:'white'
      },
      cardContent: {
        fontSize: 14,
        color: '#333',
        marginTop:20
      },
      description: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 10,
        lineHeight: 20,
        color: '#444',
      },
      link: {
        fontSize: 14,
        color: '#1e90ff',
        marginBottom: 10,
        textDecorationLine: 'underline',
      },
      footer: {
        padding: 20,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        marginTop: 40,
        borderRadius: 10,
      },
      footerText: {
        fontSize: 14,
        color: '#ecf0f1',
        textAlign: 'center',
        marginBottom: 5,
      },
      brand: {
        textAlign: 'center',
        paddingBottom: '1%',
        paddingTop: '8%',
        color: 'black',
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
      image1: {
        width:390,
        height:300,
      resizeMode:'contain'
      },
      titleContainer: {
        flex: 1,
        marginLeft: width * 0.01,
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
      scroll: {
        backgroundColor: '#f0f0f0',
        padding: 5,
        borderRadius: 1,
        marginBottom:15
      },
      button: {
        backgroundColor: '#0E7452',
        paddingVertical: 10,
        paddingHorizontal: 90,
        borderRadius: 25,
        borderWidth:2,
        margin:10,
        borderColor:'white',
      },
      buttonText: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
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
      
      b: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#0E7452',
      padding:10,
      
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
      
      iconsview:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-evenly'
      },
      blogContent: {
        width:'100%',
        paddingHorizontal:'3%',
      },
      
      icon:{
        paddingVertical:'3%',
        paddingRight:'5%',
        color:'green'
    
      },
    
      text1:{
        fontSize:12,
        paddingVertical:'4%',
        fontWeight:'500',
      
      },
    
      text:{
        paddingVertical:'4%',
        fontSize:20,
        fontWeight:'700',
        textAlign:'center',
        backgroundColor:'white',
        borderRadius:10
      },
    
      blogScrollView: {
        height: 200,
        marginTop:10,
      },
      buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        
        width: '100%',
      },
      button1: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 15,
      },
      buttonImage: {
        width: 50,
        height: 50,
        marginBottom: 10,
      },
      buttonText1: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
      },
      container2: {
        width: '100%',
        alignItems: 'center',
        
      },
});
