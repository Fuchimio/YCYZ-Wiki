import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '学校概况',
    // link: '/about/',
    activeMatch: '^/about/',
    items: [
      { text: '学校简介', link: '/about/introduction' },
      { text: '发展历史', link: '/about/history' },
      { text: '校训与办学理念', link: '/about/motto' },
      { text: '学校发展', link: '/about/development' },
      { text: '组织架构', link: '/about/organization' },
      { text: '校内部门', link: '/about/departments' },
      { text: '校园概况', link: '/about/campus-profile' },
      { text: '学校荣誉', link: '/about/honors' },
    ],
  },
  {
    text: '校园生活',
    // link: '/life/',
    activeMatch: '^/life/',
    items: [
      { text: '校园设施', link: '/life/campus/' },
      { text: '宿舍生活', link: '/life/accommodation/' },
      { text: '食堂与饮食', link: '/life/dining/' },
      { text: '交通与出入', link: '/life/transportation/' },
      { text: '日常作息', link: '/life/daily-life/' },
      { text: '校园服务', link: '/life/services/' },
    ],
  },
  {
    text: '学习指南',
    // link: '/study/',
    activeMatch: '^/study/',
    items: [
      { text: '课程与教学', link: '/study/academic/' },
      { text: '考试相关', link: '/study/examinations/' },
      { text: '学习资源', link: '/study/resources/' },
      { text: '学科竞赛', link: '/study/competitions/' },
      { text: '学业规划', link: '/study/academic-planning/' },
    ],
  },
  {
    text: '社团活动',
    // link: '/activities/',
    activeMatch: '^/activities/',
    items: [
      { text: '社团总览', link: '/activities/clubs/' },
      { text: '体育活动', link: '/activities/sports/' },
      { text: '文艺活动', link: '/activities/cultural/' },
      { text: '学生组织', link: '/activities/student-organizations/' },
      { text: '年度活动', link: '/activities/annual-events' },
    ],
  },
  {
    text: '校园文化',
    // link: '/culture/',
    activeMatch: '^/culture/',
    items: [
      { text: '校园传统', link: '/culture/traditions' },
      { text: '校园精神', link: '/culture/school-spirit' },
      { text: '校庆专题', link: '/culture/school-anniversary' },
      { text: '校园故事', link: '/culture/campus-stories' },
      { text: '校友风采', link: '/culture/alumni' },
      { text: '校园影像', link: '/culture/photo-gallery' },
    ],
  },
  {
    text: '实用指南',
    // link: '/guides/',
    activeMatch: '^/(guides|faq)/',
    items: [
      { text: '新生指南', link: '/guides/freshman' },
      { text: '住宿生指南', link: '/guides/boarding' },
      { text: '毕业生指南', link: '/guides/graduation' },
      { text: '常见问题 FAQ', link: '/faq/' },
    ],
  },
  {
    text: '资源与贡献',
    // link: '/resources/',
    activeMatch: '^/(resources|contribute)/',
    items: [
      { text: '资源中心', link: '/resources/' },
      { text: '资料下载', link: '/resources/downloads' },
      { text: '常用链接', link: '/resources/links' },
      { text: '参与贡献', link: '/contribute/' },
      { text: '写作规范', link: '/contribute/writing-guide' },
      { text: '贡献指南', link: '/contribute/contribution-guide' },
      { text: '审核规则', link: '/contribute/review-policy' },
      { text: '贡献者名单', link: '/contribute/contributors' },
    ],
  },
]