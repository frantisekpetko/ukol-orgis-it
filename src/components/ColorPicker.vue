<template>
  <div class="w-full mx-1 mt-3">
    <label
      for="colorpicker"
      class="mx-1 block text-sm font-medium text-gray-900 dark:text-white"
      >Výběr barvy:</label
    >
    <input
      id="color"
      class="mx-1"
      type="color"
      @change="(event) => emits('update-color', (event.target as any)?.value)"
    />
  </div>
</template>
<script setup lang="ts">
interface Props {
  color: string
}
defineProps<Props>()

const emits = defineEmits<{
  (eventName: 'update-color', value: string): void
}>()
</script>
