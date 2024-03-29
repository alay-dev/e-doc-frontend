import {
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Image,
  Keyboard,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import { styles } from './Search.styles'
import Svg, { Path } from 'react-native-svg'
import { Button, Input, Modal, Card } from '@ui-kitten/components'
import { useNavigation, useRoute } from '@react-navigation/native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchIllus from '../../assets/search.png'
import { useEffect } from 'react'

const Search = ({
  login,
  document,
  get_user_documents,
  set_current_document,
}) => {
  const [uid, setUid] = useState('')
  const navigation = useNavigation()
  const [isModal, setIsModal] = useState(false)
  const route = useRoute()

  const { t, i18n } = useTranslation()

  const handle_get_documents = () => {
    // let upperCaseUid = uid
    // upperCaseUid = upperCaseUid.toUpperCase()
    if (uid === '') {
      setIsModal(true)
    } else {
      get_user_documents(uid.toUpperCase(), login, true)
      navigation.navigate('SearchResult')
    }
  }

  useEffect(() => {
    i18n.changeLanguage(login.language)
  }, [login.language])

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // >
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.top}>
          <Svg
            id="visual"
            viewBox={`0 0 100% 60%`}
            width="100%"
            height="60%"
            version="1.1"
          >
            <Path
              d="M0 260L18 263.8C36 267.7 72 275.3 108 276C144 276.7 180 270.3 216 258.8C252 247.3 288 230.7 324 211C360 191.3 396 168.7 432 187.2C468 205.7 504 265.3 522 295.2L540 325L540 0L522 0C504 0 468 0 432 0C396 0 360 0 324 0C288 0 252 0 216 0C180 0 144 0 108 0C72 0 36 0 18 0L0 0Z"
              fill="#598672"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></Path>
          </Svg>
          <Image style={styles.searchImg} source={SearchIllus} />
        </View>
        <View style={styles.searchBox}>
          <Text style={styles.h1}>{t('search')}</Text>
          <Text style={styles.h2}>users by UID...</Text>
          <Input
            style={styles.searchInput}
            size="large"
            placeholder="eg : UXXXXX"
            value={uid}
            onChangeText={(text) => setUid(text)}
          />
          <Button
            onPress={() => handle_get_documents()}
            style={styles.searchBtn}
          >
            Search
          </Button>
        </View>

        <Modal
          visible={isModal}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setIsModal(false)}
        >
          <Card disabled={true}>
            <Text style={styles.modalText}>Please enter a valid UID</Text>
            <Button onPress={() => setIsModal(false)}>OK</Button>
          </Card>
        </Modal>
      </ScrollView>
    </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  )
}

export default Search
