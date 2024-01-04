<template>
  <Transition name="scale-rotate">
    <slot />
  </Transition>
</template>

<style lang="scss" scoped>
.scale-rotate {
  &-enter-active,
  &-leave-active {
    transition: transform 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: rotate(90deg) scale(0.5);
  }
}
</style>
