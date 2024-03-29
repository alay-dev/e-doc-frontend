import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('screen').height,
    // display: 'flex',
    // justifyContent: 'space-between',
  },
  h1: {
    fontSize: 50,
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'MontserratAlternates-BlackItalic',
  },
  sub: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'MontserratAlternates-Regular',
  },
  txtCont: {
    padding: '10%',
    paddingTop: '25%',
    borderBottomLeftRadius: 100,
    position: 'relative',
    // paddingBottom: '60%',
    // backgroundColor: '#598672',
  },
  uploadImage: {
    width: 350,
    height: 350,
    position: 'absolute',
    bottom: -400,
    right: 0,
  },
  cta: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '15%',
  },
  ctaBtn: {
    width: '80%',
    borderRadius: 50,
    // elevation: 5,
  },
})
