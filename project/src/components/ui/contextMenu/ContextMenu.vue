<template>
  <div class="ctx-menu" :style="position" v-click-away="closeMenu">
    <ul class="ctx-menu__list">
      <li class="ctx-menu__list-item" v-for="(item, idx) in list">
        {{ item }}
      </li>
      <li class="ctx-menu__list-item">Какое-то действие</li>
      <li class="ctx-menu__list-item">Приветствие</li>
      <li class="ctx-menu__list-item">Прощание</li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'

/** @name props - Пропсы компонента */
const props = defineProps({
  /** @property PositionX - Позиция по оси X */
  positionX: {
    type: Number,
    default: 0
  },

  /** @property PositionY - Позиция по оси Y */
  positionY: {
    type: Number,
    default: 0
  },

  /** @property List - Список элементов меню */
  list: {
    type: Array,
    default: () => []
  }
})

/** @name emits - Эмиты компонента */
const emits = defineEmits(['closeMenu'])

const position = computed(() => {
  return {
    left: `${props.positionX}px`,
    top: `${props.positionY}px`
  }
})

/** @function
 * @name closeMenu - Закрытие контекстного меню */
const closeMenu = () => emits('closeMenu')
</script>

<style lang="scss" scoped>
.ctx-menu {
  position: fixed;
  height: 0;
  border-radius: var(--borderRadius);
  background: #0C2340;
  overflow: hidden;
  border: 1px solid #dcdfe6;

  &__list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;

    &-item {
      color: #dcdfe6;
      border-bottom: 1px solid #dcdfe6;
      padding: 5px;

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
