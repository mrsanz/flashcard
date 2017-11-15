<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form @submit.prevent="updateMessage">
      <input type="text" name="msg" v-model="newMsg" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'HelloWorld',

  methods: {
    ...mapActions([
      'updateMsg'
    ]),

    updateMessage () {
      this.updateMsg(this.newMsg)
    }
  },
  computed: {
    ...mapState({
      msg: state => state.HelloWorld.msg
    })
  },
  data () {
    return {
      newMsg: ''
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
