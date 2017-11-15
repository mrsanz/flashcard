import firebase from '../../../firebase'

export const addWord = ({ commit }, payload) => {
  firebase.database().ref('words').push(payload)
}

export const removeWord = ({ commit }, payload) => {
  firebase.database().ref('words').child(payload).remove()
}

export const loadWords = ({ commit, state }, limit = 100) => {
  if (state.words.length === 0) {
    const wordsRef = firebase.database().ref('words').orderByKey().limitToLast(limit)
    wordsRef.on('child_added', snapshot => {
      commit('ADD_WORD', { text: snapshot.val(), id: snapshot.key })
    })
    wordsRef.on('child_removed', snapshot => {
      commit('REMOVE_WORD', snapshot.key)
    })
  }
}
