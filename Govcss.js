import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
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
        overflow: 'hidden',
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
    link: {
        fontSize: 14,
        color: 'blue',
        marginBottom: 1,
        textDecorationLine: 'underline',
        marginTop:20
    },
    button: {
        // backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 25,
        borderWidth:2,
        margin:10,
        borderColor:'white',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        

      },
});

