<template>
  <select
    :id="id"
    class="mx-1 block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
    :value="units"
    @change="(event) => emits('updateUnits', (event.target as any)?.value)"
  >
    <option value="px" selected>px</option>
    <option value="%">%</option>
  </select>
</template>
<script setup lang="ts">
interface Props {
    units: string
    id: string
}

const x = "width"

defineProps<Props>();

const emits = defineEmits<{
  (eventName: 'updateUnits', value: string): void
}>()
</script>
