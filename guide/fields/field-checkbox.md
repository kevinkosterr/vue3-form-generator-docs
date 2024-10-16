# FieldCheckbox
FieldCheckbox is a checkbox field that renders an input element of type `checkbox`

## Schema
This is how the form generator will know it should use this field.
```javascript
{ 
  type: 'input',
  inputType: 'checkbox' 
}
```

## Basic example
<script setup>
import { ref } from 'vue';

const form = ref({
	model: {
		readTutorial: false
	},
	schema: {
		fields: [
			{
				name: 'tutorialRead',
				label: 'Have you read the tutorial?',
				model: 'readTutorial',
				type: 'input',
				inputType: 'checkbox'
			}
		]
	}
})
</script>

readTutorial: <code>{{ form.model.readTutorial }}</code>
<vue-form-generator :schema="form.schema" :model="form.model"/>

## Properties
<!--@include: @/parts/shared-field-properties.md-->
