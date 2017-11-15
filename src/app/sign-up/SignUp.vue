<template>
  <div class="sign-up">
    <form id="sign-up-form" @submit.prevent="handleSubmit">
      <div>
        <input type="text" placeholder="Username" v-model="newAccount.username" />
      </div>
      <div>
        <input type="email" placeholder="Email" v-model="newAccount.email" />
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="newAccount.password"/>
      </div>
    </form>
    <button type="submit" form="sign-up-form">sign up</button>
    <div>
      <router-link to="/">Return to landing page</router-link>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'SignUp',

    methods: {

      ...mapActions([
        'addAccount'
      ]),

      handleSubmit () {
        this.addAccount(this.newAccount).then(() => {
          this.newAccount = {}
          this.$router.push('/dashboard')
        })
      }
    },

    data () {
      return {
        newAccount: {}
      }
    }
  }
</script>
