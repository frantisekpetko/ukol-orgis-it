<template>
  <h1 className="text-3xl font-bold text-blue-600">{{ title }}</h1>
</template>
<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>
