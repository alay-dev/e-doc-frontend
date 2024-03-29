import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import english from './english.json'
import hindi from './hindi.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en: english,
    hi: hindi,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
