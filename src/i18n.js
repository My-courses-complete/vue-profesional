import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    search: 'Search',
    about: 'About'
  },

  es: {
    search: 'Buscar',
    about: 'Nosotros'
  }
}

const i18n = createI18n({
  messages,
  locale: 'en'
})

export default i18n
