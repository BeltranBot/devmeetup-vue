import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from '@/store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
