
import { StyleSheet ,Dimensions} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
      container1: {
        flex: 1,
        backgroundColor: '#fff',
        padding:15,
      },
      head: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
      },
      tableBorder: {
        borderWidth: 2,
        borderColor: '#c8e1ff'
      },
      header: {
        height: 50,
        backgroundColor: '#f1f8ff'
      },
      headerText: {
        textAlign: 'center',
        fontWeight: 'bold'
      },
      dataWrapper: {
        marginTop: -1
      },
      row: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',        
      },
      text: {
        textAlign: 'center',
        fontWeight: '100'
      },
      actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      actionText: {
        fontSize: 15,
        color: "white",
        paddingHorizontal: 5,
        borderRadius:10,
        margin:10,
        padding:5,
      },
      assignText: {
        backgroundColor: "#2c3e50"
      },
      deleteText: {
        backgroundColor: "red"
      },
      viewText: {
        backgroundColor: "#2c3e50"  
      },
      updateText: {
        backgroundColor: "#0E7452"
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        width: '100%'
      },
      noDataText: {
        textAlign: "center",
        marginTop: 20
      },
    
});