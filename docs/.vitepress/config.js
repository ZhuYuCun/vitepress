module.exports = {
  title: 'zxxxx',
  description: '学习记录，欢迎指正',
  base: '/vitepress/',
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '文章', link: '/article/index'},
    ],
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


