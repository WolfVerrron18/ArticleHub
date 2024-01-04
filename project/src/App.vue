<template>
  <RouterView />
</template>

<script setup>
import { reactive, provide } from 'vue'

import { RouterLink, RouterView } from 'vue-router'
import ResizeModal from '@/components/modal/Modal.vue'

const windowSizes = reactive({
  width: window.innerWidth,
  height: window.innerHeight
})

window.addEventListener('resize', ({ target: { innerWidth, innerHeight } }) => {
  windowSizes.height = innerHeight
  windowSizes.width = innerWidth
})

provide('sizes', windowSizes)
</script>

<style scoped></style>
