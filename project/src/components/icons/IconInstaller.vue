<template>
  <!-- Загрузчик иконки -->
  <Component :is="fullIconName" :height="height" :width="width" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

/** @module Icons - Иконка */
import IconLoading from '@/components/icons/IconLoading.vue'

/** @name props - Пропсы компонента */
const props = defineProps({
  /** @property Name - Имя иконки */
  name: {
    type: String,
    default: ''
  },

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

/** @computed
 * @name fullIconName - Построение полного названия компонента иконки */
const fullIconName = defineAsyncComponent({
  loader: () => import(`@/components/icons/Icon${props.name}.vue`)
})
</script>
