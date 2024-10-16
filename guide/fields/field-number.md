# FieldNumber
FieldNumber is a number field that renders an input element of type `number`

## Schema
This is how the form generator will know it should use this field.
```javascript
{ 
  type: 'input',
  inputType: 'number' 
}
```

## Basic example
<script setup>
import { ref } from 'vue';

const form = ref({
	model: {
		numberChoice: 0
	},
	schema: {
		fields: [
			{
				name: 'numberName',
				label: 'What is your age?',
				model: 'numberChoice',
				type: 'input',
				inputType: 'number'
			}
		]
	}
})
</script>

Your age: {{ form.model.numberChoice }}
<vue-form-generator :schema="form.schema" :model="form.model"/>

## Properties
<!--@include: @/parts/shared-field-properties.md-->