import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  stepsContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 50,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    color: '#fff',
  },
  stepLine: {
    width: 6,
    height: 100,
    backgroundColor: '#f2f2f2',
  },
  animatedContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 50,
    position: 'absolute',
    top: 0,
  },
  animatedLine: {
    width: 6,
    marginTop: 30,
    backgroundColor: 'green',
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default styles;
