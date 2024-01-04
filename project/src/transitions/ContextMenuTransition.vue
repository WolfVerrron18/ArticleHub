<template>
  <Transition @enter="active" @leave="leave">
    <slot />
  </Transition>
</template>

<script setup>
import { gsap } from 'gsap'

const active = (el) => {
  gsap.to(el, { height: 'auto', duration: 0.2 })
}

const leave = (el) => {
  gsap.to(el, { height: 0, duration: 2.2 })
}
</script>
