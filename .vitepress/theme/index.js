import DefaultTheme from 'vitepress/theme'
import VueFormGenerator from "@kevinkosterr/vue3-form-generator";

import './index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueFormGenerator)
  }
}