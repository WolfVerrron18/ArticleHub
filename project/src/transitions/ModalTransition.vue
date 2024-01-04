<template>
  <Transition name="modal">
    <slot />
  </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active{
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-40px) scale(2);
}
</style>
