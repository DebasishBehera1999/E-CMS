
import { StyleSheet ,Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      imageContainer: {
        width: width - 60,
        marginHorizontal: 20,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: width - 180,
        height: width - 180,
        resizeMode: 'contain',
      },
      leftArrow: {
        position: 'absolute',
        left: 10,
        top: '50%',
        marginTop: -15,
        borderRadius: 20,
        padding: 10,
      },
      rightArrow: {
        position: 'absolute',
        right: 10,
        top: '50%',
        marginTop: -15,
        borderRadius: 20,
        padding: 10,
      },
});
