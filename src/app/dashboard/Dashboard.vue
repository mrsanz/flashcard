<template>
  <div class="dashboard" >
    <button v-on:click="handleSignOut">sign out</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'dashboard',

  methods: {
    ...mapActions([
      'signOut'
    ]),

    handleSignOut () {
      this.signOut()
      this.$router.push('/')
    }
  }
}
</script>
