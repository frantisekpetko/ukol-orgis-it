<template>
  <div class="overflow-x-hidden mt-5">
    <AppForm @renderElement="renderElement">
      <AppTitle :title="titleString" />
      <TextField
        type="number"
        :required="true"
        size-title="Výška"
        size-name="height"
        :size="height"
        @update-size="updateHeight"
      >
        <UnitsSelect
          :id="heightUnits"
          :units="heightUnits"
          @update-units="updateHeightUnits"
        />
      </TextField>
      <TextField
        type="number"
        :required="true"
        size-title="Šířka"
        size-name="width"
        :size="width"
        @update-size="updateWidth"
      >
        <UnitsSelect
          :id="widthUnits"
          :units="widthUnits"
          @update-units="updateWidthUnits"
        />
      </TextField>
      <ColorPicker 
        :color="color"
        @update-color="updateColor"  
      />
      <TextField
        type="text"
        :required="false"
        size-title="Textový popisek"
        size-name="text"
        :size="text"
        @update-size="updateText"
      />
      <FormButton />
    </AppForm>
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

import FormButton from '@/components/FormButton.vue'
import DivElement from '@/components/DivElement.vue'
import ColorPicker from '@/components/ColorPicker.vue'
import UnitsSelect from '@/components/UnitsSelect.vue'
import TextField from '@/components/TextField.vue'
import AppTitle from '@/components/AppTitle.vue'
import AppForm from '@/components/AppForm.vue'

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
