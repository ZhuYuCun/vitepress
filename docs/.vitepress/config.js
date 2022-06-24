module.exports = {
  title: 'zxxxx',
  description: '学习记录，欢迎指正',
  base: '/',
  themeConfig: {
    siteTitle: 'siteTitle',
    nav: [
      {text: '首页', link: '/'},
      {text: '文章', link: '/article/before'},
      {
        text: '练习', 
        items: [
          {text: 'HTML', link: '/HTML/'},
          {text: 'CSS', link: '/CSS/index'},
          {text: 'JS', link: '/JS/index'},
        ]
      },
    ],
    sidebar: {
      '/HTML/':[{
        text: 'HTML1', 
        collapsible: true,
        items: [
          { text: 'Introduction1', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
      ],
      '/CSS/':[
        { text: 'Introduction2', link: '/introduction' },
        { text: 'Getting Started', link: '/getting-started' },
      ],
      '/JS/':[
        { text: 'Introduction3', link: '/introduction' },
        { text: 'Getting Started', link: '/getting-started' },
      ],
      '/article/': []

    }
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      const {
        langList,
        demoBlockPlugin
      } = require('./demoblock')
      md.use(demoBlockPlugin, {
        lang: langList
      })
    }
  }
}


