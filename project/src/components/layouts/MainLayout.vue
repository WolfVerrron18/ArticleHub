<template>
  <div class="main-layout" @contextmenu="callCtxMenu($event)">
    <RouterView :categories="categories" />

    <ContextMenuTransition>
      <ContextMenu
        v-if="showCtxMenu"
        :position-x="position.x"
        :position-y="position.y"
        @close-menu="showCtxMenu = false"
      />
    </ContextMenuTransition>
  </div>
</template>

<script setup>
import ContextMenu from '@/components/ui/contextMenu/ContextMenu.vue'
import { computed, reactive, ref } from 'vue'
import ContextMenuTransition from '@/transitions/ContextMenuTransition.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const showCtxMenu = ref(false)

const position = reactive({
  x: 0,
  y: 0
})

const categories = computed(() => route.matched[0].children)

const callCtxMenu = (event) => {
  event.preventDefault()

  position.x = event.pageX
  position.y = event.pageY

  showCtxMenu.value = true
}
</script>

<style scoped></style>
