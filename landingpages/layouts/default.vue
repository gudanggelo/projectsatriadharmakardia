<template>
  <div id="features">
    <app-header></app-header>
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue/'

export default {
  components: {
    'app-header': Header

  }
}
</script>
