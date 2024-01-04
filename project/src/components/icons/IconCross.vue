<template>
  <svg
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</template>

<script setup>
/** @name props - Пропсы компонента */
defineProps({
  /** @property Width - Ширина иконки */
  width: {
    type: Number,
    default: 24
  },

  /** @property Height - Высота иконки */
  height: {
    type: Number,
    default: 24
  }
})
</script>

<style scoped></style>
