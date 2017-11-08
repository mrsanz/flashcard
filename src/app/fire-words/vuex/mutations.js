export default {
  ADD_WORD (state, payload) {
    state.words.push(payload)
  },
  REMOVE_WORD (state, payload) {
    const index = state.words.findIndex(word => {
      return word.id === payload
    })
    state.words.splice(index, 1)
  }
}
