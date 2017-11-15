import api from '../api'

export const addWord = ({ commit }, payload) => {
  return api.addWord(payload)
  .then(data => commit('ADD_WORD', { text: payload, id: data.name }))
  .catch(e => console.log(e))
}

export const removeWord = ({ commit }, payload) => {
  return api.removeWord(payload)
  .then(() => commit('REMOVE_WORD', payload))
}

export const initWords = ({ commit, state }) => {
  if (state.words.length === 0) {
    return api.fetchAllWords()
    .then(data => Object.keys(data).map(key => ({ id: key, text: data[key] })))
    .then(words => commit('INIT_WORDS', words))
  }
}
