
module.exports = {
  title: 'zyc',
  description: '学习记录，欢迎指正',
  base: '/',
  themeConfig: {
    siteTitle: 'siteTitle',
    nav: [
      {text: '首页', link: '/'},
      {text: '文章', link: '/article/index'},
      {
        text: '练习', 
        items: [
          {text: 'HTML', link: '/HTML/index'},
          {text: 'CSS', link: '/CSS/index'},
          {text: 'JS', link: '/JS/index'},
        ]
      },
    ],
    sidebar: {
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


