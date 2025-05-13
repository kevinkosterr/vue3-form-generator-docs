# FieldColor
FieldColor is a color field that renders an input element of type `color`

### type `input`
### inputType `color`

## Basic example
<script setup>
import FieldColorExample from '/components/FieldColorExample.vue'
</script>

<FieldColorExample/>

## Text input example
<FieldColorExample with-input/>

## Properties
::: details Shared properties
<!--@include: @/parts/shared-field-properties.md-->
:::
::: warning
When `withInput` is true, a validator for the hex value is added by default. Even though
the hex value might technically be valid, the native color picker only supports 6 digit hex codes. 
See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/color#providing_a_default_color).
:::
| Property  | Default | Type      | Description                                          |
|-----------|---------|-----------|------------------------------------------------------|
| withInput | `false` | `boolean` | If true, renders an extra input field of type `text` |
