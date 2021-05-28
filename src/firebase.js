import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBcmtCC_Y2HVOWe9a9RCmjNqnff7vSMWPU',
  authDomain: 'yt-redux-34834.firebaseapp.com',
  projectId: 'yt-redux-34834',
  storageBucket: 'yt-redux-34834.appspot.com',
  messagingSenderId: '788127754542',
  appId: '1:788127754542:web:9f1d32433dab945b0db2bf',
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
