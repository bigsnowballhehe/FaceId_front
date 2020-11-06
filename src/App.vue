<template>
  <div id="app">
    ·
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="下次一定好好，这是一个，传值，有prop，我就传给你喽？" />
    <LearningTest>
      <template v-slot:default="slotProps">
        {{ slotProps.user.age }}
      </template>
    </LearningTest>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LearningTest from "./components/LearningTest";

export default {
  name: "App",
  components: {
    HelloWorld,
    LearningTest,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
