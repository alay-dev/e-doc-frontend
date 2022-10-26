import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    // marginTop: 40,
  },
  topbar: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingTop: 20,
    paddingHorizontal: 20,
    width: '100%',
    borderColor: '#c1c1c1',
    borderBottomWidth: 2,
    marginBottom: 10,
    // backgroundColor: "#fff"
  },
  title: {
    marginLeft: 40,
    fontSize: 18,
    fontFamily: 'MontserratAlternates-Regular',
  },
  content: {
    paddingHorizontal: 20,
    width: '100%',
    // backgroundColor: "#fff"
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },

  language: {
    fontFamily: 'MontserratAlternates-Regular',
    fontSize: 18,
  },
})