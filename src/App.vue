<template>
  <div id="app">
  <nav class="navbar" role="navigation" aria-label="main navigation">
      <a class="navbar-item" href="/">
          <b-icon pack="far"
            icon="home"
            type="is-black">
            </b-icon>
      </a>
    <div class="navbar-end">
      <a class="navbar-item" href="/Register">
          <b-icon pack="far"
            icon="sign-in"
            type="is-black">
            </b-icon>
      </a>
    </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-left: 100px;
  padding-right: 100px;
}
</style>
