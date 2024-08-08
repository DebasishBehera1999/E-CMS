import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  button: {
    backgroundColor: '#2c3e50',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    borderWidth: 2,
    marginTop: 30,
    borderColor: '#ffffff',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageview: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 7.6,
    resizeMode: 'contain',
  },
  c: {
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 30,
    marginBottom: 50,
    margin: 30,
  },
});

