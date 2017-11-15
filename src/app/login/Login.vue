<template>
  <div class="login">
    <form id="login-form" @submit.prevent="handleSubmit">
      <div>
        <input type="email" placeholder="Email" v-model="account.email" />
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="account.password"/>
      </div>
    </form>
    <button type="submit" form="login-form">login</button>
    <div>
      <router-link to="/">Return to landing page</router-link>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'login',

    methods: {

      ...mapActions([
        'login'
      ]),

      handleSubmit () {
        this.login(this.account).then(() => {
          this.account = {}
          this.$router.push('/dashboard')
        })
      }
    },

    data () {
      return {
        account: {}
      }
    }
  }
</script>
