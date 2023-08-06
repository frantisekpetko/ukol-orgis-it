<template>
  <form
    @submit.prevent="emits('renderElement')"
    class="flex flex-col justify-center items-center mx-auto my-0 w-72 px-2"
  >
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
const emits = defineEmits<{
  (eventName: 'renderElement'): Promise<void>
}>()
</script>
