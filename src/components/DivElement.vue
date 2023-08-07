<template>
  <div class="flex flex-col justify-center items-center my-5 w-full">
    <div
      v-if="isDivElementReady"
      :style="{
        background: props.divProperties.color,
        width: `${props.divProperties.width}${widthUnits}`,
        height: `${props.divProperties.height}${heightUnits}`,
        color: 'white',
      }"
    >
      <div
        class="flex flex-col justify-center items-center align h-full mix-blend-difference"
      >
        {{ props.divProperties.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  divProperties: {
    color: string
    width: string
    height: string
    text: string
  }
  color: string
  width: string
  height: string
  isDivElementReady: boolean
  text: string
  widthUnits: string
  heightUnits: string
}

const props = defineProps<Props>()
</script>
