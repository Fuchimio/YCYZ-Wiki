# 贡献编写须知
<ArticleMetadata />

> [!NOTE] 
> 银川一中 Wiki 由校友共同维护。动笔前请花两分钟读完本页,让你的贡献更快被采纳。

## 一、提交方式

### 方法一

1. 在任意页面左下角点击 **铅笔图标**,进入 GitHub 在线编辑器。
2. 改完填写一句说明 → **Propose changes** → **Create pull request**。
3. 维护者审核通过后,站点会自动重新构建上线。

> [!TIP] 不会用 Github? 完全没问题
> 整个过程都在网页里完成,不用安装任何东西。

### 方法二

 1. 使用任意的富文本编辑器例如```Microsoft Word``` 、```Apple Page``` 、```WPS-Office``` 将想要增加、修改的页面编辑好
 2. 向我们发送修定说明并将完善好的文件作为附件一并发送 -> [联系我们](mailto:support@ycyz.top)

::: details 示例(点我展开)
 收件人: support@ycyz.top
 
 邮件主题: 校园指南关于 XXX  的修订建议
 
 正文:
```md
页面：食在校园 (或注明创建新目录/页面)
说明：（主要讲述为什么要修改、添加此页面，比如 内容过期不符合现状、写的文笔太差了(bushi)、有新增的内容、分类不恰当、有负面影响等等）
1. 因食堂业务调整，原文中XX号窗口的YYY不再提供，故修订本页，将XX的YYY移出。
2. 食在校园主要介绍校园的食堂，建议将其从"社团生活"分类迁移至"探索校园"。

（假装我是附件）.docx
```
:::


## 二、欢迎贡献什么

**鼓励**

- 校园生活干货:食堂、住宿、出行、考试节点
- 学习笔记、资料整理
- 老师语录、社团故事、校史回忆
- 对过时或错误信息的订正
- 对本站样式、功能的完善 -> [技术大牛点我](High-Level.md)

**不建议**

- 人身攻击、不实信息、隐私泄露
- 抄袭他人版权内容
- 与校园无关的广告、引流


## 三、编写规范要点

### 文件与目录命名

- 栏目使用英文目录(如 `Campus/`),栏目首页命名为 `index.md`。
- 具体页面文件名用**小写 + 连字符**,如 `food-guide.md`。

### 标题层级

- 每篇文章**只使用一个 `#`(一级标题)**,作为页面标题。
- 正文从 `##` 开始逐级递增,**不要跳级**(例如 `##` 之后不要直接写 `####`)。

### 语言风格

- 客观、友善、对事不对人。
- 老师语录等主观栏目,也请保持基本尊重。

### 图片

- 图片放到对应栏目的 `images/` 子目录,用相对路径引用:`![示意图](./images/example.png)`
- 涉及他人肖像,请先征得本人同意。

### 站内链接

- 用相对路径,例如:`[食在校内](../Campus/course.md)`


## 四、Markdown 语法参考

本站所有页面用 **Markdown** 书写。基础语法(标题、列表、链接、图片、表格、代码块……)推荐参考下面这份整理得很完整的中文教程:

**[洛谷 Markdown 语法手册](https://help.luogu.com.cn/rules/academic/handbook/markdown)**

> [!TIP] "本站还支持这些扩展语法"
> VitePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为解析器，并使用 [Shiki](https://shiki.matsu.io/) 来突出显示语言语法,在标准 Markdown 之上还有不少增强: 详见 [Markdown进阶](https://vitepress.dev/zh/guide/markdown)


## 五、维基站点样式编辑

如果觉得本站样式存在问题，欢迎技术大牛点此查看 [修订指南](High-Level.md)

---

有疑问?欢迎在 [GitHub Issues](https://github.com/Fuchimio/YCYZ-Wiki/issues) 留言,或直接提 Pull Request。期待你的加入!