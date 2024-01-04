<template>
  <div class="menu">
    <div class="menu__wrapper">
      <div class="menu__logo">ArticleHub</div>
      <div class="menu__user" ref="user" @click='show = !show'>dfvdvdvfd</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

/** @name props - Пропсы компонента */
const props = defineProps({
  /** @property categories - Список элементов меню */
  categories: {
    type: Array,
    default: () => []
  }
})
const user = ref(null)
const show = ref(null)
const mappedCategories = computed(() => {
  return props.categories.map((route) => {
    return {
      link: route.path,
      name: route.meta.name
    }
  })
})
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
  background: var(--color-alice-blue);
  border-bottom: 1px solid #dcdfe6;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__user {
    position: relative;
    right: 0;
    width: 20px;
    height: 20px;
    background: #222222;
  }
}
</style>
