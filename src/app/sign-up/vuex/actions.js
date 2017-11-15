import firebase from '../../../firebase'

export const addAccount = ({ commit }, data) => {
  firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    .then(u => {
      console.log('u', u)
    })
    .catch(error => {
      console.log(error)
    })
}
