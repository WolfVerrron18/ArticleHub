<template>
  <div class="button__wrapper">
    <IconInstaller
      v-if="sideIcon === 'left' && sideIcon"
      :name="nameIcon"
      :width="widthIcon"
      :height="heightIcon"
    />

    <slot />

    <IconInstaller
      v-if="sideIcon === 'right' && sideIcon"
      :name="nameIcon"
      :width="widthIcon"
      :height="heightIcon"
    />
  </div>
</template>

<script setup>
/** @module Icons - Иконки */
import IconInstaller from '@/components/icons/IconInstaller.vue'

/** @name props - Пропсы компонента */
const props = defineProps({
  /** @param NameIcon - Имя иконки */
  nameIcon: {
    type: String,
    default: ''
  },

  /** @param WidthIcon - Ширина иконки */
  widthIcon: {
    type: Number,
    default: 24
  },

  /** @param HeightIcon - Высота иконки */
  heightIcon: {
    type: Number,
    default: 24
  },

  /** @param sideIcon - Сторона, с которой будет расположена иконка */
  sideIcon: {
    type: String,
    default: ''
  },

  /** @param showIcon - Показывать ли иконку */
  showIcon: {
    type: Boolean,
    default: false
  },

  /** @param Label - Текст кнопки */
  label: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>

.button {
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: var(--borderRadius);
    background: var(--color-alice-blue);
    border: 1px solid #181818;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #181818;
  }
}
</style>
