<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <RouterLink to="/aboutus" >About Us</RouterLink>
  <RouterLink to="/contact" > Contact Us</RouterLink>
  <RouterLink to="/login" >About Us</RouterLink>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
