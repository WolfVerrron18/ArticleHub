<template>
  <div class="dropdown">
    <div class="dropdown__value" @click="showDropdown">{{ activeItem?.name }}</div>

    <div v-if="show" class="dropdown__list" v-click-away="showDropdown">
      <div class="dropdown__searcher">
        <InputControl v-model="search" @clear="search = ''" />
      </div>
      <div class="dropdown__list-item" v-for="(item, idx) in list" :key="idx" @click="selectItem(idx)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import InputControl from '@/components/ui/controls/InputControl.vue'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits(['selectItem'])

const show = ref(false)

const search = ref('')

const activeItem = ref({})

const showDropdown = () => {
  show.value = !show.value
}

const selectItem = (idx) => {
  activeItem.value = props.list[idx]

  emits('selectItem', activeItem.value)
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;

  &__value {
    display: flex;
    min-height: 30px;
    background: var(--color-base-white);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 8px;
  }

  &__list {
    position: absolute;
    top: 40px;
    left: 0;
    background: var(--color-base-white);
    box-shadow: 0 1px 2px 0 var(--color-box-shadow);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 10;
    padding: 5px;

    &-item {
      cursor: pointer;
      padding: 5px;
      border-radius: var(--border-radius);

      &:hover {
        background: var(--color-alice-blue);
      }
    }
  }
}
</style>
