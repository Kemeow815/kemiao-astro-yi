// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type {AnalyticsConfig} from "./types/analyticsTypes"

/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * baseUrl {string} When using GitHubPages, you must enter the repository name, startWith '/', e.g. /repo_name
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 * asideTagsMaxSize {number}
 *    0: disable,
 *    > 0: display the limited number of tags in the sidebar
 *    All tags will be displayed in single page "/tags".
 */
export const site = {
  title: '喵落阁', // required
  favicon: '/favicon.svg', // required
  description: '欢迎来到克喵的博客！',
  author: "克喵爱吃卤面", // required
  avatar: '/kemiao.jpg', // required
  url: 'https://boke.kemeow.top', // required
  baseUrl: '', // When using GitHubPages, you must enter the repository name startWith '/'. e.g. '/astro-blog'
  motto: '愿你看清一切真相后，依旧热爱你的家人和朋友。',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
  asideTagsMaxSize: 10,
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 * memosUrl {string} memos server url
 * memosUsername {string} memos login name
 * memosPageSize {number} 10
 */
export const config = {
  lang: 'zh-cn', // en | zh-cn | zh-Hant | cs
  codeFoldingStartLines: 16, // Need to re-run the project to take effect

  // memos config
  memosUrl: 'https://memos.050815.xyz', // https://xxxx.xxx.xx
  memosUsername: '克喵爱吃卤面', // login name
  memosCreatorId: '1',
  memosAvatar: 'https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256',
  memosName: '克喵爱吃卤面',
  memosPageSize: 10, // number
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const categories = [
  {
    name: "文章",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  {
    name: "动态",
    iconClass: "ri-lightbulb-flash-line",
    href: "/feed/1",
  },
  {
    name: "Memos",
    iconClass: "ri-quill-pen-line",
    href: "/memos",
  },
  {
    name: "归档",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  {
    name: "留言",
    iconClass: "ri-chat-1-line",
    href: "/message",
  },
  {
    name: "搜索",
    iconClass: "ri-search-line",
    href: "/search",
  },
  {
    name: "更多",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: '关于',
        iconClass: 'ri-information-line',
        href: '/about',
      },
      {
        name: '友链',
        iconClass: 'ri-user-5-line',
        href: '/friends',
        target: '_self',
      },
      {
        name: "Moment",
        iconClass: "ri-wechat-line",
        href: "https://moment.050815.xyz",
        target: '_blank',
        // target: '_self',
      },
      {
        name: "相册",
        iconClass: "ri-image-fill",
        href: "https://photos.050815.xyz",
        target: '_self',
      },
      {
        name: "Ech0",
        iconClass: "ri-file-marked-line",
        href: "https://pyq.050815.xyz",
        target: '_blank',
      },
      {
        name: "iceFox",
        iconClass: "ri-quill-pen-ai-line",
        href: "https://pyq.kemiao.online",
        target: '_blank',
      },
      {
        name: "TG说说",
        iconClass: "ri-book-marked-fill",
        href: "https://shuoshuo.kemiao.online",
        target: '_blank',
      },
      {
        name: "音乐",
        iconClass: "ri-music-line",
        href: "https://music.kemiao.online",
        target: '_blank',
      },
      {
        name: "News",
        iconClass: "ri-newspaper-fill",
        href: "https://news.kemiao.online",
        target: '_blank',
      }
    ]
  }
]

/**
 * Personal link address
 */
export const infoLinks = [
  {
    icon: 'ri-telegram-fill',
    name: 'telegram',
    outlink: 'https://t.me/KemiaoJun',
  },
  {
    icon: 'ri-twitter-fill',
    name: 'twitter',
    outlink: 'https://twitter.com/kemiaosw',
  },
  {
    icon: 'ri-qq-line',
    name: 'QQ',
    outlink: 'https://qm.qq.com/q/m8FW8Y6TkY',
  },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/Kemeow815',
  },
  {
    icon: 'ri-home-3-line',
    name: 'homepage',
    outlink: 'https://www.kemiao.online',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: '/rss.xml',
  }
]

/**
 * donate
 * enable {boolean}
 * tip {string}
 * wechatQRCode: Image addresses should be placed in the public directory.
 * alipayQRCode: Image addresses should be placed in the public directory.
 * paypalUrl {string}
 */
export const donate = {
  enable: true,
  tip: "Thanks for the coffee !!!☕",
  wechatQRCode: "https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/202505050804813.jpg",
  alipayQRCode: "https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/202505050804592.jpg",
  paypalUrl: "https://www.paypal.com/paypalme/kemiaofx?locale.x=zh_XC",
}

/**
 * Friendship Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    {
      name: "wallleap",
      url: 'https://myblog.wallleap.cn',
      avatar: "https:/gravatar.wallleap.cn/avatar/be1ccdcf025a92b98a92e331e1b3662a?size=256",
      description: 'Luwang\'s blog'
    },
  ]

/**
 * Comment Feature
 * enable {boolean}
 * type {string} required waline | giscus
 * walineConfig.serverUrl {string} server link
 * walineConfig.lang {string} link: https://waline.js.org/guide/features/i18n.html
 * walineConfig.pageSize {number} number of comments per page. default 10
 * walineConfig.wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * walineConfig.count {number} recent comment numbers
 * walineConfig.pageview {boolean} display the number of page views and comments of the article
 * walineConfig.reaction {string | string[]} Add emoji interaction function to the article
 * walineConfig.requiredMeta {string[]}  Set required fields, default anonymous
 * walineConfig.whiteList {string[]} set some pages not to display reaction
 */
export const comment = {
  enable: true,
  type: 'giscus', // waline | giscus,
  walineConfig: {
    serverUrl: "",
    lang: 'en',
    pageSize: 20,
    wordLimit: '',
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ["nick", "mail"],
    whiteList: ['/message/', '/friends/'],
  },

  // giscus config
  giscusConfig: {
    'data-repo': "Kemeow815/kemiao-astro-yi",
    'data-repo-id': "R_kgDOOyXy1Q",
    'data-category': "Announcements",
    'data-category-id': "DIC_kwDOOyXy1c4CqueW",
    'data-mapping': "title",
    'data-strict': "0",
    'data-reactions-enabled': "1",
    'data-emit-metadata': "0",
    'data-input-position': "top",
    'data-theme': "preferred_color_scheme",
    'data-lang': "zh-CN",
    'crossorigin': "anonymous",
  }

  //
}

/**
 * Analytics Feature Configuration
 *
 * This file centralizes the analytics configuration for the application.
 * It defines and exports the default settings for Umami and Google Analytics.
 */
export const analytics: AnalyticsConfig = {
  enable: true,
  umamiConfig: {
    enable: false,
    id: "",
    url: ""
  },
  gaConfig: {
    enable: false,
    id: ""
  },
  busuanzi: true,
};
