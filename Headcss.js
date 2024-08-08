import { StyleSheet ,Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
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
        padding: 10,
      },
});
