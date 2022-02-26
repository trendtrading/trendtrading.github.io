module.exports = {
    base: '/',
    dest: 'dist',
    title: '交易',
    description: '交易',
    themeConfig: {
        logo: '/assets/img/interview.png',
        displayAllHeaders: false,
        editLinks: false,
        sidebarDepth: 5,
        docsDir: 'docs',
        // header组件的菜单栏配置
        nav: [
            {
                text: '交易',
                link: '/c00-prepare/'
            },
            {
                text: '书籍',
                link: '/c01-book/'
            },

            {
                text: '更多',
                items: [
                    {
                        text: '书籍2',
                        link: '/c01-book/'
                    }
                ]
            },
            {
                text: 'GitHub',
                link: 'https://gitee.com/trendtrading/trendtrading'
            }
        ],
        // 侧边栏，多个侧边栏配置
        sidebar: {
            '/c00-prepare/': ['', 's01'],
            '/c01-book/': ['']
        }
    }
};
