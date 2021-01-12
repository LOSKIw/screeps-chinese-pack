/**
 * 游戏首页
 * @see https://screeps.com/
 */
const content: PageContent = {
    hashs: [''],

    content: [
        // 右顶栏
        { 'en-US': 'Status', 'zh-CN': '服务器状态' },
        { 'en-US': 'Docs', 'zh-CN': '文档' },
        { 'en-US': 'Blogs', 'zh-CN': '博客' },
        { 'en-US': 'Forum', 'zh-CN': '讨论组' },
        { 'en-US': 'Sign in', 'zh-CN': '登录' },

        { 'en-US': 'MMO sandbox game for programmers', 'zh-CN': '为程序员量身打造的 MMO 沙盒游戏' },
        { 'en-US': 'It means "scripting creeps"', 'zh-CN': 'Screeps 的含义是编程（scripting）您的爬虫（creep）。' },
        {
            'en-US': 'It\'s an open-source game for programmers,\nwherein the core mechanic is programming',
            'zh-CN': 'Screeps 是一款面向编程爱好者的开源 MMO RTS 沙盒游戏，其核心机制是为您的单位编写 AI。'
        },
        {
            'en-US': 'your units\' AI.\nYou control your colony by writing JavaScript.',
            'zh-CN': '您可以通过书写 JavaScript 代码来掌控自己的殖民地。'
        },

        { 'en-US': 'MMO real-time sandbox with huge persistent world', 'zh-CN': '在广阔永恒的世界中畅玩 MMO 实时沙盒游戏' },
        { 'en-US': 'View on', 'zh-CN': '浏览' },
        { 'en-US': 'Live demo', 'zh-CN': '在线试玩' },
        { 'en-US': 'No registration required', 'zh-CN': '无需注册' },

        { 'en-US': 'Coming soon', 'zh-CN': '即将开放' },
        {
            'selector': 'section.sc-products > div.sc-products__arena > div.sc-products__arena-header > div',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace(
                    'Match-based gameplay versus <br> other players',
                    '与其他玩家对抗的匹配对战机制'
                )
            }
        },
        { 'en-US': 'Steam page', 'zh-CN': 'Steam 页面' },
        { 'en-US': 'Subscribe for news', 'zh-CN': '订阅获取新闻' },
        {
            'selector': '#subscribe-dialog > div > h2',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace(
                    'Enter your email to stay tuned <br> for news about Screeps Arena development:',
                    '输入您的邮箱来获取 Screeps Arena 的最新进展'
                )
            }
        },
        { 'en-US': 'Subscribe', 'zh-CN': '订阅' },
        { 'en-US': 'Cancel', 'zh-CN': '取消' },
        {
            'selector': 'section.sc-scripting > div > div.sc-block > header > div',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Play by', '游戏方式')
                el.innerHTML = el.innerHTML.replace('<b>S</b>cripting', '写<b>代码<b>')
            }
        },
        {
            'selector': 'section.sc-scripting > div > div.sc-block > ul > li',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace(
                    '<em>Real programming</em>, not just pseudocode. You can use libs from real projects.',
                    '<em>用真实的代码编程</em>，而不是伪代码。您可以调用任何真正的第三方库。'
                )
                el.innerHTML = el.innerHTML.replace('Use JavaScript or ', '使用 JavaScript 或者通过 WebAssembly')
                el.innerHTML = el.innerHTML.replace('compile other languages', '编译其它语言。')
                el.innerHTML = el.innerHTML.replace(' via WebAssembly.', '')
                el.innerHTML = el.innerHTML.replace(
                    '<a class="link" href="http://docs.screeps.com/">Docs and game API</a> of a full-fledged platform.',
                    '包含完整详细的 <a class="link" href="https://screeps-cn.gitee.io/">游戏文档及 API</a>。'
                )
            }
        },
        {
            'selector': 'body > main > section.sc-world > div > div.sc-block',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Programmable', '可编程的')
                el.innerHTML = el.innerHTML.replace('<b>W</b>orld', '<b>世</b>界')
                el.innerHTML = el.innerHTML.replace(
                    '<em>Huge persistent world</em> consisting of 70,000 interconnected game rooms.',
                    '拥有 70,000 个内部相通的游戏房间的<em>巨大永恒世界</em>。'
                )
                el.innerHTML = el.innerHTML.replace(
                    '<em>40-server cluster</em> (160 CPU cores) processing player scripts using Node.js.',
                    '<em>40 个服务器集群</em>（160 CPU核心）运行基于 Node.js 的玩家脚本。'
                )
                el.innerHTML = el.innerHTML.replace(
                    'Programmable world living a continuous life <em>24/7 in real-time</em> even when you\'re offline.',
                    '可编程世界 <em>在现实中 24/7 不停歇地运行</em>，当您下线后亦是如此。'
                )
            }
        },
        {
            'selector': 'body > main > section.sc-sandbox > div > div.sc-block',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Open Source', '开源')
                el.innerHTML = el.innerHTML.replace('<b>S</b>andbox', '<b>沙</b>盒')
                el.innerHTML = el.innerHTML.replace(
                    'Engine released on <a class="link" href="https://github.com/screeps/screeps">GitHub</a> as an open and moddable program platform.',
                    '游戏引擎在 <a class="link" href="https://github.com/screeps/screeps">GitHub</a> 上作为一个开源且可修改的程序平台发布。'
                )
                el.innerHTML = el.innerHTML.replace(
                    'You can <em>change any aspect</em> of game objects\' behavior.',
                    '您可以 <em>修改</em> 游戏内部对象的 <em>任何行为特征</em>。'
                )
                el.innerHTML = el.innerHTML.replace(
                    '<em>Contribute</em> to the game engine development and <em>earn in-game benefits</em>.',
                    '为游戏引擎做出 <em>贡献</em> 来获得 <em>游戏内的回报</em>。'
                )
            }
        },
        { 'en-US': 'What people say', 'zh-CN': '人们的评价' },
        {
            'selector': 'div.sc-reviews__left-side > a > div',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Read reviews on Steam', '浏览 Steam 上的评论')
                el.innerHTML = el.innerHTML.replace('%&nbsp;of&nbsp;', '%\u00A0中有\u00A0')
                el.innerHTML = el.innerHTML.replace('&nbsp;reviews are positive', '\u00A0条积极评论')
            }
        },
        {
            'selector': 'body > footer > div > section > header > div',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace('Our news ', '相关新闻')
                el.innerHTML = el.innerHTML.replace('in Twitter', '来自 Twitter')
            }
        }
    ]
}

export default content
