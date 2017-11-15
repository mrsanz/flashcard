import fire from '../../../fire'

export const addWord = ({ commit }, payload) => {
  fire.database().ref('words').push(payload)
}

export const removeWord = ({ commit }, payload) => {
  fire.database().ref('words').child(payload).remove()
}

export const loadWords = ({ commit, state }, limit = 100) => {
  if (state.words.length === 0) {
    const wordsRef = fire.database().ref('words').orderByKey().limitToLast(limit)
    wordsRef.on('child_added', snapshot => {
      commit('ADD_WORD', { text: snapshot.val(), id: snapshot.key })
    })
    wordsRef.on('child_removed', snapshot => {
      commit('REMOVE_WORD', snapshot.key)
    })
  }
}
