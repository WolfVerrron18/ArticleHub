<template>
  <div class='modal__background'>
    <div class='modal'       :style='{ width: `${sizesModal.width}px`, height: `${sizesModal.height}px` }'
    >
    <ResizeWrapper v-model='sizesModal'>
      <template #element>
        <div
      ref='modal'
      class='modal__wrapper'
      :class="{
        'modal__full-screen': states.fullScreen,
        modal__transition: !states.moving
      }"
      @mouseup='mouseCapture'
      v-click-away='closeWindow'
    >
      <!-- Шапка модального окна -->
      <ModalHeader
        :title='title'
        @on-mouse-capture='mouseCapture'
        @on-full-screen='fullScreen'
        @on-hide-modal='closeWindow'
      />

      <!-- Контент модального окна -->
      <div class='modal__content'>
        <slot name='content' />
      </div>
    </div>
      </template>
    </ResizeWrapper>
    </div>
  </div>
</template>

<script>
import { computed, inject, reactive, ref } from 'vue'

import { useDraggableHandler } from '@/components/modal/usages/useDraggableHandler'

/** @module Icons - Иконки */
import ModalHeader from '@/components/modal/components/ModalHeader.vue'
import ResizeWrapper from '@/components/resize/ResizeWrapper.vue'

export default {
  name: 'Modal',

  components: {
    ResizeWrapper,
    ModalHeader
  },

  props: {
    /** @property Title - Заголовок модального окна */
    title: {
      type: String,
      default: ''
    },

    /** @property Width - Ширина модального окна */
    width: {
      type: Number,
      default: 500
    },

    /** @property Height - Ширина модального окна */
    height: {
      type: Number,
      default: 500
    }
  },

  emits: ['closeWindow'],

  setup (props, { emit }) {
    const windowSizes = inject('sizes')

    const { modal, mouseCapture } = useDraggableHandler()

    const states = reactive({
      moving: false,
      resize: false,
      fullScreen: false
    })

    const sizesModal = ref({
      width: 500,
      height: 500
    })

    /** @computed
     * @name getStylesModals - Стили модального окна */
    const getStylesModals = computed(() => {
      return {
        width: sizesModal.value.width + 'px',
        height: sizesModal.value.height + 'px'
      }
    })

    /** @function
     * @name fullScreen - Полноэкранный режим работы с модальным окном */
    const fullScreen = () => (states.fullScreen = !states.fullScreen)

    /** @function
     * @name closeWindow - Закрытие модального окна */
    const closeWindow = () => emit('closeWindow')

    // onMounted(() => {
    //   sizesModal.width = modal.value.clientWidth
    //   sizesModal.height = modal.value.clientHeight
    //
    //   coords.elementX = (windowSizes.width - modal.value.clientWidth) / 2
    //   coords.elementY = (windowSizes.height - modal.value.clientHeight) / 2
    // })

    return {
      modal,
      states,
      sizesModal,
      getStylesModals,
      fullScreen,
      closeWindow,
      mouseCapture
    }
  }
}
</script>

<style lang='scss' scoped>
.modal {
  &__background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
  }

  &__wrapper {
    border-radius: 6px;
    background: white;
    overflow: hidden;
    box-shadow: 0 0 50px #dcdfe6;
    border: 1px solid #dcdfe6;
    position: absolute;
    z-index: 11;
    width: 500px;
    height: 500px;
  }

  &__full-screen {
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
