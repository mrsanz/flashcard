import firebase from '../../../firebase'

export const login = ({ commit }, data) => {
  firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then(u => {
      console.log('u', u)
    })
    .catch(error => {
      console.log(error)
    })
}
