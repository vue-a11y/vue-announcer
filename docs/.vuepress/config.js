module.exports = {
  theme: 'vuepress-theme-default-vue-a11y',
  title: 'Vue announcer for Vue 2',
  description: 'A simple way with Vue to announce any useful information for screen readers.',
  head: [
    ['meta', { name: 'theme-color', content: '#fff' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  serviceWorker: true,
  themeConfig: {
    home: false,
    repo: 'vue-a11y/vue-announcer',
    docsDir: 'docs',
    colorMode: {
      props: {
        modes: ['light', 'dark', 'system', 'sepia']
      }
    },
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Examples',
            link: '/demos/'
          }
        ],
        sidebar: [
          '/',
          {
            title: 'Guide',
            collapsable: false,
            children: [
              '/guide/',
              '/guide/announcer.md',
              '/guide/announcer-router.md',
              '/guide/plugins.md',
              '/guide/accessibility.md',
              '/guide/support.md',
            ]
          },
          {
            title: 'Examples',
            collapsable: false,
            children: [
              '/demos/',
              '/demos/nuxt.md',
              '/demos/vuepress.md'
            ]
          }
        ]
      }
    }
  }
}