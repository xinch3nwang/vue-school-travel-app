<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{destination.name}}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{destination.description}}</p>
      </div>
    </section>

    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{ name: 'experience.show', params:{experienceSlug: experience.slug} }"
        >
          <ExperienceCard
            :experience="experience"
          />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import sourceData from "@/data.json"
import ExperienceCard from "@/components/ExperienceCard.vue"
import GoBack from '@/components/GoBack.vue'


const props = defineProps({
  id: {type: Number, required: true}
})

// const route = useRoute()

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === props.id)
})


// const destination = ref(null);

// onMounted(async () => {
//   const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`);
//   destination.value = await response.json();
// });
// // watch(
// //   () => route.params.id,
// //   async () => {
// //     const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`);
// //     destination.value = await response.json();
// // })

</script>