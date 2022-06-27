
module.exports = {
  title: 'ZhuYucun',
  description: '学以致用、勤于实践！',
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
      { text: 'github', icon: 'github', link: 'https://github.com/ZhuYuCun' },
    ],
    sidebar: {
      '/article/index': [],
      '/HTML/': [
        {
          text: 'HTML',
          children: [
            { text: 'Index', link: '/config/' }, 
            { text: 'Three', link: '/config/three' }, 
            { text: 'Four', link: '/config/four' }
          ]
        },
        {
          text: 'HTML5', 
          children: [
            {text: 'HTML', link: '/HTML/index'},
            {text: 'HTML5', link: '/CSS/index'},
            {text: 'JS', link: '/JS/index'},
          ]
        },
        {
          text: 'Other', 
          children: [
            {text: 'ÇSS', link: '/HTML/index'},
            {text: 'CSS3', link: '/CSS/index'},
          ]
        },
      ],
      '/CSS/': [
        {
          text: 'CSS',
          collapsible: true,
          children: [
            { text: 'Index', link: '/config/' }, 
            { text: 'Three', link: '/config/three' }, 
            { text: 'Four', link: '/config/four' }
          ]
        },
        {
          text: 'CSS3', 
          collapsible: true,
          children: [
            {text: 'HTML', link: '/HTML/index'},
            {text: 'HTML5', link: '/CSS/index'},
            {text: 'JS', link: '/JS/index'},
          ]
        },
        {
          text: 'Other', 
          children: [
            {text: 'ÇSS', link: '/HTML/index'},
            {text: 'CSS3', link: '/CSS/index'},
          ]
        }
      ]
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


