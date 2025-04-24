import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 32,
    color: '#000',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  inputPassword: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 14,
  },
  forgotText: {
    textAlign: 'right',
    marginBottom: 24,
    paddingRight: 15,
    color: '#888',
  },
  /*loginButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },*/
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  socialButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    elevation: 2,
  },
  registerText: {
    textAlign: 'center',
    color: '#888',
  },
  registerNow: {
    color: '#00A8E8',
    fontWeight: '600',
  },
});
