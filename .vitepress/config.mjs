import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
        ]
      },
      // {
      //   text: 'Customization',
      //   items: [
      //     { text: 'Custom field components', link: '/guide/customization/custom-components' },
      //     { text: 'CSS classes', link: '/guide/customization/custom-components' }
      //   ]
      // },
      {
        text: 'Customization',
        items: [
          { text: 'Custom field components', link: '/guide/customization/custom-components' },
          // { text: 'CSS classes', link: '/guide/customization/custom-components' }
        ]
      },
      // {
      //   text: 'Default HTML components',
      //   items: [
      //     { text: 'FieldCheckbox', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldColor', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldInput', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldNumber', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldPassword', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldRadio', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldSelect', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldSwitch', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldText', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldButton', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldSubmit', link: '/guide/components/field-checkbox' },
      //     { text: 'FieldReset', link: '/guide/components/field-checkbox' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kevinkosterr/vue3-form-generator' }
    ]
  }
})
