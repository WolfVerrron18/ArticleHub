<template>
  <div class="header" @mousedown="$emit('onMouseCapture', $event)">
    <!-- Заголовок шапки -->
    <div class="header__title">{{ title }}</div>

    <!-- Контролы модального окна -->
    <div class="header__controls">
      <!-- Иконка копирования ссылки на объект -->
      <IconLink :height="20" :width="20" />

      <!-- Иконка режима полноэкранного окна -->
      <IconScreen @click="$emit('onFullScreen')" />

      <!-- Иконка закрытия -->
      <IconCross :height="20" :width="20" @click="$emit('onHideModal')" />
    </div>
  </div>
</template>

<script>
/** @module Icons - Иконки */
import IconLink from '@/components/icons/IconLink.vue'
import IconScreen from '@/components/icons/IconScreen.vue'
import IconCross from '@/components/icons/IconCross.vue'

export default {
  name: 'ModalHeader',

  components: { IconCross, IconScreen, IconLink },

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  emits: ['onMouseCapture', 'onFullScreen', 'onHideModal'],

  setup () {

  }
}
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #dcdfe6;
  background: var(--color-alice-blue);
  z-index: 1;
  height: 30px;

  &:hover {
    cursor: grab;
  }

  &__title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    color: #ffffff;
    pointer-events: none;
  }

  &__controls {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 10px;
  }
}
</style>
