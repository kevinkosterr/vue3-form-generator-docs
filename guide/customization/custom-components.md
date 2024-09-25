The base of every field component is the [`abstractField`](/guide/mixins/abstract-field) mixin. Thus, in order to create a custom component, you'll 
need to make use of the Options API.

## Creating your component
To start creating your own field component, create a new Vue file and import the [`abstractField`](/guide/mixins/abstract-field) mixin like so:

```vue
<script>
  import { abstractField } from "@kevinkosterr/vue3-form-generator";
  
  export default {
    mixins: [ abstractField ]
  }
</script>
```
Every field must make use of one of the following methods to pass its new value to the form generator:

- Handle one of the built-in input events and pass `onFieldValueChanged` as the event handler.
- Manually emit an `onInput` event with the new value as its argument.

::: code-group
```vue {11-16} [using onFieldValueChanged]
<template>
    <input type="checkbox" @change="onFieldValueChanged" >
</template>

<script>
  import { abstractField } from "@kevinkosterr/vue3-form-generator";

  export default {
    mixins: [ abstractField ],
    methods: {
      /** Will be called by onFieldValueChanged() to 
       * determine the definitive value to pass, returns `target.value` 
       * by default */
      formatFieldValue (target) { // Event target is passed here.
        return target.checked
      }
    }
  }
</script>
```

```vue {21-23} [Manual]
<template>
  <div v-for="card in cards" class="card" @click.prevent="selectCard(card.name)">
    {{ card.body }}
  </div>
</template>

<script>
  import { abstractField } from "@kevinkosterr/vue3-form-generator";

  export default {
    mixins: [ abstractField ],
    data () {
      return {
        cards: [
          { name: 'foo', body: 'Wow, that is awesome!' },
          { name: 'bar', body: 'This is cooler!'  }
        ]
      }
    },
    methods: {
      selectCard (name) {
        this.$emit('onInput', name) // Card with 'name' was chosen
      }
    }
  }
</script>
```
:::
