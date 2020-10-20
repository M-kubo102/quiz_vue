<template>
  <div id="app">
    <qHeader></qHeader>

    <router-view/>
  </div>
</template>

<script>
import qHeader from './components/quizHeader'

export default {
  name: 'App',
  components: {
    qHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
