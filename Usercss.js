import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
  
    },
    svg: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#ffffff',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
        borderRadius: 10,
        padding: 10,
        marginTop: 190,
        marginBottom:40,
        margin:30
    },
    form: {
        justifyContent: 'center',
        width: '80%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    touch: {
        backgroundColor: '#2c3e50',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    t1: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    err: {
        color: 'red',
        marginBottom: 10,
    },
    icon: {
        position: 'absolute',
        right: 40,
        top: 160,
    },
    box:{
      borderRadius:15,
  borderColor:'#ffffff',
  borderWidth:4,
  
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
});
