<template>
  <div class='resize'>
    <div class='resize-container' ref='resizeContainer'>
      <slot name='element' />
    </div>

    <div
      class='resize-container__stick'
      v-for='(stick, index) in sticks'
      :class='`resize-container__stick-${stick.location}`'
      :key='index'
      @mousedown='onMouseDown($event, stick)'
    />
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'ResizeWrapper',

  components: {},

  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },

    maxWidth: {
      type: [String, Number],
      default: null
    },

    maxHeight: {
      type: [String, Number],
      default: null
    }
  },

  emits: ['update:modelValue'],

  setup (props, { emit }) {
    const resizeContainer = ref(null)

    const copy = ref({ ...props.modelValue })

    const oldSize = reactive({
      height: 0,
      width: 0
    })

    const sticks = [
      { location: 'left', property: 'width' },
      { location: 'right', property: 'width' },
      { location: 'top', property: 'height' },
      { location: 'bottom', property: 'height' }
    ]

    const resize = ({ clientX, clientY }) => {
      console.log(clientX - oldSize.width)
      emit('update:modelValue', { width: clientX - oldSize.width + oldSize.width, height: 190 })
    }

    const onMouseDown = (event, stick) => {
      const { left, top } = resizeContainer.value.getBoundingClientRect()

      oldSize.width = event.clientX
      oldSize.height = event.clientY
      console.log(oldSize)
      document.addEventListener('mousemove', resize)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', resize)
      })
    }

    return { sticks, resizeContainer, onMouseDown }
  }
}
</script>

<style lang='scss' scoped>
.resize {
  position: relative;
  display: grid;
  width: fit-content;

  &-container {
    &__stick {
      position: absolute;
      background: yellow;

      &-left {
        left: 0;
        top: 0;
        height: 100%;
        width: 8px;
      }

      &-right {
        right: 0;
        top: 0;
        height: 100%;
        width: 8px;
      }

      &-top {
        left: 0;
        top: 0;
        height: 8px;
        width: 100%;
      }

      &-bottom {
        bottom: 0;
        left: 0;
        height: 8px;
        width: 100%;
      }
    }
  }
}
</style>
