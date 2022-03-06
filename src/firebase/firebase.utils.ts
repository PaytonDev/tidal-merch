import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAe71dsD1f8LZn0FTJTOTRpm3_rbBTUp-Y',
  authDomain: 'tidal-merch.firebaseapp.com',
  projectId: 'tidal-merch',
  storageBucket: 'tidal-merch.appspot.com',
  messagingSenderId: '9785159085',
  appId: '1:9785159085:web:1ce9a8a6d124af799c8524',
}

// export const createUserProfileDocument = async (userAuth: any, data: any) => {
//   if (!userAuth) return

//   const userRef = firestore.doc(`users/${userAuth.uid}`)

//   const snapShot = await userRef.get()

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth
//     const createdAt = new Date()

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...data,
//       })
//     } catch (err: any) {
//       return console.error('Error Creating User', err.message)
//     }
//   }

//   return userRef
// }

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
