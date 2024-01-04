<template>
  <div class="main-page">
    <TheMenu :categories="categories" />

        <ModalTransition>
          <ResizeModal v-if="showModal" @close-window="showModal = false">
            <template #content>

            </template>
          </ResizeModal>
        </ModalTransition>

    <ResizeWrapper v-model='sizes'>
      <template #element>
        <div class='scale-container' @click='clicked' :style='{ width: `${sizes.width}px`, height: `${sizes.height}px` }' />
      </template>
    </ResizeWrapper>

    {{ sizes.width }}

    <ButtonControl ref='button' @click="showModal = true">click me</ButtonControl>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

/** @module Components - Компоненты */
import TheMenu from '@/components/menu/TheMenu.vue'
import ResizeModal from '@/components/modal/Modal.vue'

/** @module UI - UI */
import ButtonControl from '@/components/ui/controls/ButtonControl.vue'

/** @module Transitions - Переходы */
import ModalTransition from '@/transitions/ModalTransition.vue'
import http from '@/http/http'
import ResizeWrapper from '@/components/resize/ResizeWrapper.vue'

/** @name props - Пропсы компонента */
const props = defineProps({
  /** @property categories - Список элементов меню */
  categories: {
    type: Array,
    default: () => []
  }
})

const selectItem = (item) => {
  const { value } = item

  http.get('api/article', { params: { sort: value, fieldName: 'name' } }).then(({ data }) => {
    articles.value = data
  })
}

const articles = ref([])

const button = ref(null)

const showModal = ref(false)

const sizes = ref({ width: 100, height: 190 })

const resize = () => {
  console.log()
}

const clicked = (e) => {
  console.log(e)
}
</script>

<style scoped>
.main-page {
  height: 100%;
  width: 100%;
}

.editor {
  height: 100px;
  width: 100px;
  border: 1px solid black;
  overflow: auto;
}

.scale-container {
  width: 100px;
  height: 100px;
  background: #F08080;
}
</style>
