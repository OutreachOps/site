<template>
  <div id="app">
  <nav class="navbar" role="navigation" aria-label="main navigation">
      <a class="navbar-item" href="/">
          <b-icon pack="fas"
            icon="home"
            size="is-small"
            type="is-black"
            custom-class="fal">
            </b-icon>
      </a>
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
  padding-left: 32px;
  padding-right: 32px;
}
</style>
