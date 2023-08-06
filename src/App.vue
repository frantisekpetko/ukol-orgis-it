<template>
  <div class="overflow-x-hidden mt-5">
    <Form @renderElement="renderElement">
      <Title :title="titleString" />
      <TextField
        sizeTitle="Výška"
        sizeName="height"
        :size="height"
        @updateSize="updateHeight"
        :required="true"
        type="number"
      >
        <Select
          @updateUnits="updateHeightUnits"
          :units="heightUnits"
          :id="heightUnits"
        />
      </TextField>
      <TextField
        sizeTitle="Šířka"
        sizeName="width"
        :size="width"
        @updateSize="updateWidth"
        :required="true"
        type="number"
      >
        <Select
          @updateUnits="updateWidthUnits"
          :units="widthUnits"
          :id="widthUnits"
        />
      </TextField>
      <ColorPicker @updateColor="updateColor" :color="color" />
      <TextField
        sizeTitle="Textový popisek"
        sizeName="text"
        :size="text"
        @updateSize="updateText"
        :required="false"
        type="text"
      />
      <Button />
    </Form>
    <DivElement
      :divProperties="divProperties"
      :text="text"
      :color="color"
      :width="width"
      :height="height"
      :isDivElementReady="isDivElementReady"
      :widthUnits="widthUnits"
      :heightUnits="heightUnits"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'

import axios from 'axios'

import Button from '@/components/Button.vue'
import DivElement from '@/components/DivElement.vue'
import ColorPicker from '@/components/ColorPicker.vue'
import Select from '@/components/Select.vue'
import TextField from '@/components/TextField.vue'
import Title from '@/components/Title.vue'
import Form from '@/components/Form.vue'

import '@/index.css'

let color: Ref<string> = ref('#000000')
let isDivElementReady: Ref<boolean> = ref(false)
let width: Ref<string> = ref('')
let height: Ref<string> = ref('')
let text: Ref<string> = ref('')
let widthUnits: Ref<string> = ref('px')
let heightUnits: Ref<string> = ref('px')

const titleString = 'Úkol pro Orgis IT'

let divProperties: {
  color: string
  width: string
  height: string
  text: string
} = reactive({
  color: '',
  width: '',
  height: '',
  text: '',
})

const updateColor = (value: string): void => {
  color.value = value
}

const updateWidthUnits = (value: string): void => {
  widthUnits.value = value
}

const updateHeightUnits = (value: string): void => {
  heightUnits.value = value
}

const updateHeight = (value: string): void => {
  height.value = value
}

const updateWidth = (value: string): void => {
  width.value = value
}

const updateText = (value: string): void => {
  text.value = value
}

const renderElement = async (): Promise<void> => {
  console.log('input data', {
    color: color.value,
    width: width.value,
    height: height.value,
    text: text.value,
  })
  isDivElementReady.value = false
  /*
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      color: color.value,
      width: width.value,
      height: height.value,
      text: text.value,
    }),
  });

  const data = { ...(await res.json()) };
  */
  const { data } = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      color: color.value,
      width: width.value,
      height: height.value,
      text: text.value,
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
  console.log('output data', data)
  divProperties = { ...data }
  //console.log({ divProperties })
  isDivElementReady.value = true
}
</script>
