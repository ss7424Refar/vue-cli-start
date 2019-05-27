<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <head-vue></head-vue>
    <b-container>
      <p>
        <!--即为router-link-->
        <!--<b-button variant="primary" to="/">Index</b-button>-->
        <!--<b-button variant="danger" to="Home">Home</b-button>-->
      </p>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import HeadVue from './components/Head'

export default {
  name: 'App',
  components: {
    HeadVue
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
