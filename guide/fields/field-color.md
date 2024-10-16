# FieldColor
FieldColor is a color field that renders an input element of type `color`

## Schema
This is how the form generator will know it should use this field.
```javascript
{ 
  type: 'input',
  inputType: 'color' 
}
```

## Basic example
<script setup>
import { ref } from 'vue';

const form = ref({
	model: {
		colorChoice: '#efefef'
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

<span>
Your color:
<div style="height: 35px; width: 35px;" :style="'background:' + form.model.colorChoice"></div>
</span>
<vue-form-generator :schema="form.schema" :model="form.model"/>

## Properties
<!--@include: @/parts/shared-field-properties.md-->