<template>
  <form
    class="flex flex-col justify-center items-center mx-auto my-0 w-72 px-2"
    @submit.prevent="emits('renderElement')"
  >
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
const emits = defineEmits<{
  (eventName: 'renderElement'): Promise<void>
}>()
</script>
