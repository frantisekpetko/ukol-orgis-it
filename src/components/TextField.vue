<template>
  <div class="flex flex-col items-start w-full mt-3">
    <div>
      <label
        for="{{ sizeName }}"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-1"
      >
        {{ sizeTitle }}:
      </label>
    </div>
    <div class="flex flex-row items-center w-full">
      <input
        :type="type"
        :id="sizeName"
        :required="required"
        class="mx-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :placeholder="sizeName"
        :value="size"
        @change="(event) => emits('updateSize', (event.target as any)?.value)"
        maxlength="10"
      />
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  size: string
  sizeName: string
  sizeTitle: string
  required: boolean
  type: string
}

defineProps<Props>()

const emits = defineEmits<{
  (eventName: 'updateSize', value: string): void
}>()
</script>
