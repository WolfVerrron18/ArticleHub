<template>
  <div class="input-control">
    <p class="input-control__label">{{ label }}</p>

    <div class="input-control__wrapper">
      <IconInstaller
        v-if="showIcon"
        class="input-control__icon"
        :name="nameIcon"
        :height="16"
        :width="16"
      />

      <input type="text" :value="modelValue" class="input-control__input" @input="input" />

      <ScaleRotateTransition>
        <IconCross v-if="modelValue.length" class="input-control__cross" @click="clear" />
      </ScaleRotateTransition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import http from '@/http/http'

/** @module Icons - Иконки */
import IconCross from '@/components/icons/IconCross.vue'

/** @module Transitions - Переходы */
import ScaleRotateTransition from '@/transitions/ScaleRotateTransition.vue'
import IconInstaller from '@/components/icons/IconInstaller.vue'

const props = defineProps({
  /** @property Label - Этикетка к полю ввода */
  label: {
    type: String,
    default: ''
  },

  /** @property ModelValue - Значение */
  modelValue: {
    type: String,
    default: ''
  },

  /** @param InsideIcon - Расположить иконку внутри поля ввода */
  insideIcon: {
    type: String,
    default: ''
  },

  /** @param ShowIcon - Показывать ли иконку */
  showIcon: {
    type: Boolean,
    default: false
  },

  /** @param NameIcon - Имя иконки */
  nameIcon: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:modelValue', 'clear'])

const input = ({ target }) => emits('update:modelValue', target.value)

const clear = () => {
  emits('clear')
}

const f = ref('')
</script>

<style lang="scss" scoped>
.input-control {
  &__label {
    color: var(--color-base-gray);
    margin-bottom: 4px;
    display: block;
  }

  &__wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
  }

  &__input {
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--color-base-white);
    transition: var(--transition-base);
    outline: none;
    margin: 0;
    padding: 8px;

    &:focus {
      border: 1px solid var(--color-base-black);
    }
  }

  &__icon {
    &_inside {
      position: absolute;
    }
  }

  &__cross {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
