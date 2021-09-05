<template>
  <header class="container py-8 mx-auto prose">
   
  </header>
  <slot></slot>
  <footer class="container py-6 mx-auto text-center text-gray-700">
    <p>
      trialFE by @niconi &copy; 2021-{{ thisYear }}.
      <template v-if="BUILD_TIME"> Site built at {{ BUILD_TIME.toLocaleDateString() }}. </template>
      <template v-else> Development mode. </template>
    </p>
    <p>
      trialFE {{ APP_VERSION }}
    </p>
  </footer>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'

const props = defineProps<{
  title?: string
}>()

// Note: these are static. If you need these to be reactive, use ref() or reactive()
useHead({
  bodyAttrs: {
    title: props.title,
    class: 'home summer',
  },
  meta: [
    {
      property: 'og:title',
      content: props.title,
    },
    {
      name: 'twitter:title',
      content: props.title,
    },
  ],
})

const BUILD_TIME = new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
const APP_VERSION = import.meta.env.VITE_APP_VERSION
const thisYear = new Date().getFullYear()
</script>
