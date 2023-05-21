/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    welcometitle: 'Welcome',
    subtitle: 'where are you today?'
  },
  es: {
    welcometitle: 'Bienvenido',
    subtitle: 'En donde te encuentras hoy?'
  },
  de: {
    welcometitle: 'Willkommen',
    subtitle: 'Wo bist du heute?'
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'de', // set fallback locale
  messages // set locale messages
})
