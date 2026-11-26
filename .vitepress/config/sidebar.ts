import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  // ==========================================
  // 学校概况
  // ==========================================
  '/about/': [
    {
      text: '学校概况',
      items: [
        { text: '概况总览', link: '/about/' },
        { text: '学校简介', link: '/about/introduction' },
        { text: '发展历史', link: '/about/history' },
        { text: '校训与办学理念', link: '/about/motto' },
      ],
    },
    {
      text: '学校信息',
      collapsed: false,
      items: [
        { text: '学校发展', link: '/about/development' },
        { text: '组织架构', link: '/about/organization' },
        { text: '校内部门', link: '/about/departments' },
        { text: '校园概况', link: '/about/campus-profile' },
        { text: '学校荣誉', link: '/about/honors' },
      ],
    },
  ],

  // ==========================================
  // 校园生活
  // ==========================================
  '/life/': [
    {
      text: '校园生活',
      items: [
        { text: '校园生活总览', link: '/life/' },
      ],
    },
    {
      text: '校园设施',
      collapsed: false,
      items: [
        { text: '设施总览', link: '/life/campus/' },
        { text: '校园地图', link: '/life/campus/campus-map' },
        { text: '校园建筑', link: '/life/campus/buildings' },
        { text: '公共设施', link: '/life/campus/facilities' },
        { text: '教室', link: '/life/campus/classrooms' },
        { text: '图书馆', link: '/life/campus/library' },
        { text: '操场与运动场地', link: '/life/campus/playground' },
        { text: '其他设施', link: '/life/campus/other-facilities' },
      ],
    },
    {
      text: '宿舍生活',
      collapsed: true,
      items: [
        { text: '住宿总览', link: '/life/accommodation/' },
        { text: '宿舍介绍', link: '/life/accommodation/dormitory' },
        { text: '宿舍管理规定', link: '/life/accommodation/dormitory-rules' },
        { text: '住宿物品清单', link: '/life/accommodation/packing-list' },
        { text: '洗浴指南', link: '/life/accommodation/bathing' },
        { text: '住宿常见问题', link: '/life/accommodation/accommodation-faq' },
      ],
    },
    {
      text: '食堂与饮食',
      collapsed: true,
      items: [
        { text: '饮食总览', link: '/life/dining/' },
        { text: '食堂介绍', link: '/life/dining/canteen' },
        { text: '支付方式', link: '/life/dining/payment' },
        { text: '就餐指南', link: '/life/dining/dining-guide' },
        { text: '校内超市', link: '/life/dining/supermarket' },
        { text: '周边饮食', link: '/life/dining/nearby-food' },
      ],
    },
    {
      text: '交通与出入',
      collapsed: true,
      items: [
        { text: '交通总览', link: '/life/transportation/' },
        { text: '校园出入', link: '/life/transportation/campus-entry' },
        { text: '上下学通勤', link: '/life/transportation/commuting' },
        { text: '周边交通', link: '/life/transportation/nearby-transport' },
        { text: '外卖与快递', link: '/life/transportation/delivery' },
      ],
    },
    {
      text: '日常作息',
      collapsed: true,
      items: [
        { text: '作息总览', link: '/life/daily-life/' },
        { text: '每日时间表', link: '/life/daily-life/timetable' },
        { text: '早操与晨间活动', link: '/life/daily-life/morning-exercise' },
        { text: '午休安排', link: '/life/daily-life/lunch-break' },
        { text: '个人物品准备', link: '/life/daily-life/personal-items' },
        { text: '手机管理规定', link: '/life/daily-life/phone-policy' },
      ],
    },
    {
      text: '校园服务',
      collapsed: true,
      items: [
        { text: '服务总览', link: '/life/services/' },
        { text: '校园缴费', link: '/life/services/campus-payment' },
        { text: '学生卡', link: '/life/services/student-card' },
        { text: '失物招领', link: '/life/services/lost-and-found' },
        { text: '报修服务', link: '/life/services/repair' },
        { text: '求助渠道', link: '/life/services/help' },
      ],
    },
  ],

  // ==========================================
  // 学习指南
  // ==========================================
  '/study/': [
    {
      text: '学习指南',
      items: [
        { text: '学习指南总览', link: '/study/' },
      ],
    },
    {
      text: '课程与教学',
      collapsed: false,
      items: [
        { text: '课程总览', link: '/study/academic/' },
        { text: '课程体系', link: '/study/academic/curriculum' },
        { text: '学科介绍', link: '/study/academic/subjects' },
        { text: '选科指南', link: '/study/academic/subject-selection' },
        { text: '分班情况', link: '/study/academic/class-placement' },
        { text: '教学制度', link: '/study/academic/teaching-system' },
      ],
    },
    {
      text: '考试相关',
      collapsed: true,
      items: [
        { text: '考试总览', link: '/study/examinations/' },
        { text: '周测', link: '/study/examinations/weekly-test' },
        { text: '月考', link: '/study/examinations/monthly-exam' },
        { text: '期中与期末考试', link: '/study/examinations/midterm-final' },
        { text: '考场规则', link: '/study/examinations/examination-rules' },
        { text: '成绩相关', link: '/study/examinations/results' },
      ],
    },
    {
      text: '学习资源',
      collapsed: true,
      items: [
        { text: '资源总览', link: '/study/resources/' },
        { text: '教材信息', link: '/study/resources/textbooks' },
        { text: '教辅资料', link: '/study/resources/workbooks' },
        { text: '数字学习平台', link: '/study/resources/digital-platforms' },
        { text: '学习网站', link: '/study/resources/learning-websites' },
        { text: '学习方法', link: '/study/resources/study-methods' },
      ],
    },
    {
      text: '学科竞赛',
      collapsed: true,
      items: [
        { text: '竞赛总览', link: '/study/competitions/' },
        { text: '数学竞赛', link: '/study/competitions/math' },
        { text: '物理竞赛', link: '/study/competitions/physics' },
        { text: '化学竞赛', link: '/study/competitions/chemistry' },
        { text: '生物竞赛', link: '/study/competitions/biology' },
        { text: '信息学竞赛', link: '/study/competitions/informatics' },
        { text: '其他竞赛', link: '/study/competitions/other-competitions' },
      ],
    },
    {
      text: '学业规划',
      collapsed: true,
      items: [
        { text: '规划总览', link: '/study/academic-planning/' },
        { text: '高一阶段', link: '/study/academic-planning/freshman' },
        { text: '高二阶段', link: '/study/academic-planning/sophomore' },
        { text: '高三阶段', link: '/study/academic-planning/senior' },
      ],
    },
  ],

  // ==========================================
  // 社团与活动
  // ==========================================
  '/activities/': [
    {
      text: '社团与活动',
      items: [
        { text: '活动总览', link: '/activities/' },
        { text: '年度活动日历', link: '/activities/annual-events' },
      ],
    },
    {
      text: '学生社团',
      collapsed: false,
      items: [
        { text: '社团总览', link: '/activities/clubs/' },
        { text: '社团列表', link: '/activities/clubs/club-list' },
        { text: '社团招新', link: '/activities/clubs/recruitment' },
        { text: '如何加入社团', link: '/activities/clubs/how-to-join' },
      ],
    },
    {
      text: '体育活动',
      collapsed: true,
      items: [
        { text: '体育总览', link: '/activities/sports/' },
        { text: '运动会', link: '/activities/sports/sports-meet' },
        { text: '篮球活动', link: '/activities/sports/basketball' },
        { text: '足球活动', link: '/activities/sports/football' },
        { text: '羽毛球活动', link: '/activities/sports/badminton' },
        { text: '体育课', link: '/activities/sports/physical-education' },
      ],
    },
    {
      text: '文艺活动',
      collapsed: true,
      items: [
        { text: '文艺总览', link: '/activities/cultural/' },
        { text: '艺术活动', link: '/activities/cultural/art-events' },
        { text: '文艺演出', link: '/activities/cultural/performances' },
        { text: '音乐活动', link: '/activities/cultural/music' },
        { text: '校园讲座', link: '/activities/cultural/lectures' },
      ],
    },
    {
      text: '学生组织',
      collapsed: true,
      items: [
        { text: '组织总览', link: '/activities/student-organizations/' },
        { text: '学生会', link: '/activities/student-organizations/student-union' },
        { text: '校园广播站', link: '/activities/student-organizations/broadcasting' },
        { text: '志愿服务', link: '/activities/student-organizations/volunteer' },
      ],
    },
  ],

  // ==========================================
  // 校园文化
  // ==========================================
  '/culture/': [
    {
      text: '校园文化',
      items: [
        { text: '文化总览', link: '/culture/' },
        { text: '校园传统', link: '/culture/traditions' },
        { text: '校园精神', link: '/culture/school-spirit' },
      ],
    },
    {
      text: '校园记忆',
      collapsed: false,
      items: [
        { text: '校庆专题', link: '/culture/school-anniversary' },
        { text: '历史事件', link: '/culture/historical-events' },
        { text: '校园故事', link: '/culture/campus-stories' },
        { text: '校园人物', link: '/culture/campus-characters' },
        { text: '校友风采', link: '/culture/alumni' },
      ],
    },
    {
      text: '校园记录',
      collapsed: true,
      items: [
        { text: '校园文化墙', link: '/culture/campus-wall' },
        { text: '校园影像', link: '/culture/photo-gallery' },
      ],
    },
  ],

  // ==========================================
  // 专题指南
  // ==========================================
  '/guides/': [
    {
      text: '专题指南',
      items: [
        { text: '指南总览', link: '/guides/' },
        { text: '新生指南', link: '/guides/freshman' },
        { text: '住宿生指南', link: '/guides/boarding' },
        { text: '毕业生指南', link: '/guides/graduation' },
      ],
    },
  ],

  // ==========================================
  // 常见问题
  // ==========================================
  '/faq/': [
    {
      text: '常见问题',
      items: [
        { text: '问题总览', link: '/faq/' },
      ],
    },
    {
      text: '分类问题',
      collapsed: false,
      items: [
        { text: '新生问题', link: '/faq/freshman' },
        { text: '住宿问题', link: '/faq/accommodation' },
        { text: '饮食问题', link: '/faq/dining' },
        { text: '学习问题', link: '/faq/study' },
        { text: '社团问题', link: '/faq/clubs' },
        { text: '活动问题', link: '/faq/activities' },
        { text: '电子设备问题', link: '/faq/devices' },
        { text: '校园出入问题', link: '/faq/campus-access' },
        { text: '费用问题', link: '/faq/fees' },
        { text: '其他问题', link: '/faq/other' },
      ],
    },
  ],

  // ==========================================
  // 资源中心
  // ==========================================
  '/resources/': [
    {
      text: '资源中心',
      items: [
        { text: '资源总览', link: '/resources/' },
        { text: '资料下载', link: '/resources/downloads' },
        { text: '常用链接', link: '/resources/links' },
      ],
    },
  ],

  // ==========================================
  // 参与贡献
  // ==========================================
  '/contribute/': [
    {
      text: '参与贡献',
      items: [
        { text: '贡献总览', link: '/contribute/' },
        { text: '写作规范', link: '/contribute/writing-guide' },
        { text: '贡献指南', link: '/contribute/contribution-guide' },
        { text: '审核规则', link: '/contribute/review-policy' },
        { text: '贡献者名单', link: '/contribute/contributors' },
      ],
    },
  ],
}