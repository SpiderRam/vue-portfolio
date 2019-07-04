<template>
  <div id="app">
     <nav>
        <ul>
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'About'}">About</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Projects'}">Projects</router-link>
            </li>
        </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue';
import MyProjects from './components/MyProjects';

export default {
  name: 'app',
  components: {
    AboutMe,
    MyProjects
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
  margin-top: 60px;
}
</style>
