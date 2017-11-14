// don't need all this but it's ok for now!
const config = {
  apiKey: 'AIzaSyDHbWoKwc33ZFUGeahq2jUvHqXquLNtJuw',
  authDomain: 'flashcard-471ef.firebaseapp.com',
  databaseURL: 'https://flashcard-471ef.firebaseio.com',
  projectId: 'flashcard-471ef',
  storageBucket: 'flashcard-471ef.appspot.com',
  messagingSenderId: '601136872695'
}

export const addWord = async ({ commit }, payload) => {
  const wordsDBLocation = `${config.databaseURL}/words.json`
  await fetch(wordsDBLocation, {
    method: 'post',
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    commit('ADD_WORD', { text: payload, id: data.name })
  })
}

export const removeWord = async ({ commit }, payload) => {
  const wordsDBLocation = `${config.databaseURL}/words/${payload}.json`
  await fetch(wordsDBLocation, { method: 'delete' })
  .then(response => response.json())
  .then(data => {
    commit('REMOVE_WORD', payload)
  })
}

// so now we don't get the opportunistic updates without
// the event listeners, but less bloat overall
export const initWords = async ({ commit, state }, payload) => {
  if (state.words.length === 0) {
    const wordsDBLocation = `${config.databaseURL}/words.json`
    await fetch(wordsDBLocation)
    .then(data => data.json())
    .then(data => commit('INIT_WORDS', {...state.words, ...data}))
  }
}
