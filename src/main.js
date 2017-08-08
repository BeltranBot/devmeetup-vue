import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from '@/store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAVhnSF-80jaUVyZmuT1Ci0bsI1pwLK3Pc',
      authDomain: 'yt-devmeetup-f970c.firebaseapp.com',
      databaseURL: 'https://yt-devmeetup-f970c.firebaseio.com',
      projectId: 'yt-devmeetup-f970c',
      storageBucket: 'yt-devmeetup-f970c.appspot.com',
      messagingSenderId: '58874954964'
    })
  }
})
