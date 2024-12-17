<script setup>
import { ref } from 'vue'

const form = ref({
  model: {
    colorChoice: '#3f3f3f'
  },
  schema: {
    fields: [
      {
        name: 'choiceColor',
        label: 'Choose a color',
        model: 'colorChoice',
        type: 'input',
        inputType: 'color'
      }
    ]
  }
})
</script>

<template>
  <ul>
    <li>Hex: {{ form.model.colorChoice }}</li>
    <li>As badge background: <span class="VPBadge" :style="'background:' + form.model.colorChoice">your color</span></li>
  </ul>
  <vue-form-generator :schema="form.schema" :model="form.model"/>
</template>