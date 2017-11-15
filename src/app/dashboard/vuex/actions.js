import firebase from '../../../firebase'

export const signOut = ({ commit }, data) => {
  firebase.auth().signOut()
}
