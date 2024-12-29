<template>
  <TheNavigation />
  <div class="container">
  <router-view></router-view>
</div>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';
</script>
