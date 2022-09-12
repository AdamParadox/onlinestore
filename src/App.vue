<template>
  <div class="app-wrapper">
    <TheNavigation></TheNavigation>
    <div class="general-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
  export default{
    components: {
      TheNavigation
    }
  }
</script>
<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.general-view{
  max-width: 1600px;
  margin: 0 auto;
}
body{
  background-color: #eff3f8;
  margin: 0px;
  color:#495057;
}

nav a {
  font-weight: bold;
  color:#495057;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #2196F3;
}

a{
  color:#2196F3;
}
#app i{
  color:#2196F3;
}
</style>
