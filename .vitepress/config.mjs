import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue3-form-generator-docs/',
  title: "Vue3 Form Generator",
  description: "Documentation for vue3-form-generator",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting started', link: 'guide/introduction/getting-started' },
          { text: 'Field schema overview', link: 'guide/introduction/field-overview' }
        ]
      },
      {
        text: 'Customization',
        items: [
          { text: 'Custom field components', link: '/guide/customization/custom-components' },
          // { text: 'CSS classes', link: '/guide/customization/custom-components' }
        ]
      },
      {
        text: 'Mixins',
        items: [
          { text: 'abstractField', link: '/guide/mixins/abstract-field' },
        ]
      },
      {
        text: 'Form Generator',
        items: [
          { text: 'Props', link: '/guide/form-generator/props' },
          { text: 'Events', link: '/guide/form-generator/events' },
        ],
      },
      {
        text: 'Fields',
        items: [
          { text: 'FieldCheckbox', link: '/guide/fields/field-checkbox' },
          { text: 'FieldColor', link: '/guide/fields/field-color' },
          { text: 'FieldNumber', link: '/guide/fields/field-number' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kevinkosterr/vue3-form-generator' }
    ]
  }
})
