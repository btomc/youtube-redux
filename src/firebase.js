import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCCAXpfwjMMGIvipLZybuchNh2UbqxGY_I",
    authDomain: "redux-ytube.firebaseapp.com",
    projectId: "redux-ytube",
    storageBucket: "redux-ytube.appspot.com",
    messagingSenderId: "101710953311",
    appId: "1:101710953311:web:12d18528e83fd9b0c7d4ea"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()