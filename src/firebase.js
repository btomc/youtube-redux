import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDW2ckIJ2FzG5GiPr7VIdTmK7qgZG3WSjA',
  authDomain: 'yt-redux-de059.firebaseapp.com',
  projectId: 'yt-redux-de059',
  storageBucket: 'yt-redux-de059.appspot.com',
  messagingSenderId: '557275834639',
  appId: '1:557275834639:web:40182363765be9c2b9367a',
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
