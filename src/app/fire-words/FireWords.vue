<template>
  <div class="hello">
    <v-nav />
    <h1>Words</h1>
    <li v-for="word in words">
      {{word.text}}&nbsp;<button v-on:click=deleteWord(word.id)>X</button>
    </li>
    <h2>Add a Word</h2>
    <form @submit.prevent="submitWord(newWord)">
      <input type="text" name="msg" v-model="newWord" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import * as components from './components'

export default {
  name: 'FireWords',

  mounted () {
    this.initWords()
  },

  components: {
    'v-nav': components.FireNav
  },

  methods: {
    ...mapActions([
      'initWords',
      'addWord',
      'removeWord'
    ]),

    submitWord (param) {
      if (param) {
        this.addWord(param)
        this.clearForm()
      }
    },

    clearForm () {
      this.newWord = ''
    },

    deleteWord (id) {
      this.removeWord(id)
    }
  },

  computed: {
    ...mapState({
      words: state => state.FireWords.words
    })
  },

  data () {
    return {
      newWord: ''
    }
  }
}
</script>

<style scoped>
  li {
    font-weight: normal;
  }
</style>
