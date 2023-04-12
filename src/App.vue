<script setup lang="ts">
  import {RouterView} from 'vue-router'
  import {fetchTest} from '@/api/test'
  fetchTest()
</script>

<template>
  <div>
    <RouterView/>
  </div>

</template>

<style>
  @import 'normalize.css';
  #app{
    /* 字体抗锯齿，让字体看起来更清晰 */
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }
</style>
