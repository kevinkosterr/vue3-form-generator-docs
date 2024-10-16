import DefaultTheme from 'vitepress/theme'
import VueFormGenerator from "@kevinkosterr/vue3-form-generator";

import './index.css'
import '@kevinkosterr/vue3-form-generator/themes/basic.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueFormGenerator)
  }
}