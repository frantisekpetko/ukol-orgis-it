<template>
  <div>
    <form
      @submit.prevent="renderElement"
      class="flex flex-col justify-center items-center mx-auto my-0 w-72 px-2"
    >
      <h1 className="text-3xl font-bold text-blue-600">Úkol pro Orgis IT</h1>
      <TextField
        sizeTitle="Height"
        sizeName="height"
        :size="height"
        @updateSize="updateHeight"
        :required="true"
        type="number"
      >
        <Select @updateUnits="updateHeightUnits" :units="heightUnits" :id="heightUnits"/>
      </TextField>
      <TextField
        sizeTitle="Width"
        sizeName="width"
        :size="width"
        @updateSize="updateWidth"
        :required="true"
        type="number"
      >
        <Select @updateUnits="updateWidthUnits" :units="widthUnits" :id="widthUnits" />
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
    </form>
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
import { ref, watch, reactive } from "vue";
import type { Ref } from "vue";

import Button from "@/components/Button.vue";
import DivElement from "@/components/DivElement.vue";
import ColorPicker from "@/components/ColorPicker.vue";
import Select from "@/components/Select.vue";
import TextField from "@/components/TextField.vue";

import "@/index.css";

let color: Ref<string> = ref("#000000");
let isDivElementReady: Ref<boolean> = ref(false);
let width: Ref<string> = ref('');
let height: Ref<string> = ref('');
let text: Ref<string> = ref('');
let widthUnits: Ref<string> = ref("px");
let heightUnits: Ref<string> = ref("px");

let divProperties: {
  color: string,
  width: string,
  height: string,
  text: string,
} = reactive({
  color: '',
  width: '',
  height: '',
  text: '',
});

watch(width, (oldWU: any) => {
  console.log(`width is ${oldWU.value} ${widthUnits.value}`);
});

watch(width, (oldHU: any) => {
  console.log(`height is ${oldHU.value} ${heightUnits.value}`);
});

const updateColor = (value: string): void => {
  color.value = value;
};

const updateWidthUnits = (value: string): void => {
  widthUnits.value = value;
};

const updateHeightUnits = (value: string): void => {
  heightUnits.value = value;
};

const updateHeight = (value: string): void => {
  height.value = value;
};

const updateWidth = (value: string): void => {
  width.value = value;
};

const updateText = (value: string): void => {
  text.value = value;
};

const renderElement = async (): Promise<void> => {
  console.log({
    color: color.value,
    width: width.value,
    height: height.value,
    text: text.value,
  });
  isDivElementReady.value = false;
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

  console.log("render", data);
  divProperties =  {...data};
  console.log({divProperties})
  isDivElementReady.value = true;
  //console.log("check", width.value, height.value, text.value);
};
</script>
<style scoped></style>
