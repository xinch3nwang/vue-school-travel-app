<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue School Travel App</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name: 'destinationshow', params:{id: destination.id, slug: destination.slug}}"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script setup>
import sourceData from "@/data.json"
const destinations = sourceData.destinations
</script>