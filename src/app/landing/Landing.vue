<template>
  <div>
    <div id="nav">
      <router-link to="/words">words</router-link>
      <router-link to="/login">sign in</router-link>
      <router-link to="/signup">sign up</router-link>
    </div>
    <img src="../../assets/logo.png">
    <h2>Title</h2>
  </div>
</template>

<script>
export default {
  name: 'landing'
}
</script>
