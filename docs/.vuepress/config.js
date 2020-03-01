module.exports = {
  title: 'Vue announcer',
  description: '',
  serviceWorker: true,  
  themeConfig: {
    home: false,
    repo: 'vue-a11y/vue-announcer',
    docsDir: 'docs',
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'How to',
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
              '/guide/accessibility.md',
              '/guide/support.md',
            ]
          },
          {
            title: 'How to',
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