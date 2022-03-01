// 所以关于你的信息都在这配置, 之后会自动放入项目中
export default {
    global: {
        title: "陈文达的在线简历",  // 浏览器标签页名 和 footer中的版权内容
        name: "陈文达",   // 你的名字
        nickName: "Fitz",   // 英文名或昵称
    },

    header: {
        // 介绍自己的几个主题
        intro_items: [
            {
                title: "首页",
                anchor: "#home",
            },
            {
                title: "关于我",
                anchor: "#aboutme",
            },
            {
                title: "我会些什么?",
                anchor: "#skills",
            },
            {
                title: "个人作品",
                anchor: "#works",
            },
            {
                title: "联系我",
                anchor: "#contact",
            },
        ],
    },

    intro: {
        home: {
            expect_position: "Web前端开发(实习生)",     // 期望岗位
            me: require("@/assets/home/me.png"),   // 你的头像的路径, 注意储存路径及其写法, @/ 等价于 src/
            blogs: {
                cnblogs: "https://www.cnblogs.com/fitzlovecode/",    // 博客园地址
                gitee: "https://gitee.com/chinafitz",
                github: "https://github.com/ChinaFitz",
            }
        },

        aboutme: {
            me: require("@/assets/aboutme/me.png"),   // 上半身照
            introduce: `
                        现在就读于电子科技大学中山学院, 专业是电子商务(本科), 我的绩点是3.74(前1.12%)。
                        我喜欢互联网的一切技术, 在机缘巧合下了解到了前端开发并因为其强反馈性而喜欢上了。
                        平时喜欢逛一下如Gihutb、博客园、掘金等的一些开源技术社区, 不仅能丰富自己的知识, 更能了解行业的一些方向
                        从2019年开始学习到如今, 了解到了很多前端方面的技术, 也做了几个小小的项目。学习的总结与心得也在自己的博客园中记录着。
                        自认为是一个性格温和、性格外向的人, 凭着这份热爱希望能够成为一名前端工程师吧！
                        `,
        },

        skills: {
            // 最熟悉的技术栈一般3-5个
            /* 
                该项目可以直接使用 https://boxicons.com/ 中的icon 和 https://element.eleme.cn/#/zh-CN/component/icon 中的 icon, 只需要bxs-icon-name即可
                使用默认icon就用undefined代替
                不适用icon就用""代替
            */
            main_skills: [
                {
                    skill_name: "HTML",
                    progress_of_master: 65, // 技能掌握程度
                    icon: "bxl-html5",  // icon类名
                },
                {
                    skill_name: "CSS",
                    progress_of_master: 60,
                    icon: "bxl-css3",
                },
                {
                    skill_name: "JavaScript",
                    progress_of_master: 70,
                    icon: "bxl-javascript",
                },
                {
                    skill_name: "ES6",
                    progress_of_master: 65,
                    icon: undefined,    // 使用默认icon
                },
                {
                    skill_name: "Vue",
                    progress_of_master: 80,
                    icon: "bxl-vuejs",
                },
                {
                    skill_name: "Axios",
                    progress_of_master: 60,
                    icon: undefined,
                },
            ],
            //其他一些能够说得上东西的技能, 最好列举5个
            sub_skills: [
                {
                    skill_name: "Git",
                    progress_of_master: 73,
                    icon: "bxl-git",
                },
                {
                    skill_name: "Less",
                    progress_of_master: 60,
                    icon: "bxl-less",
                },
                {
                    skill_name: "Bootstrap",
                    progress_of_master: 50,
                    icon: "bxl-bootstrap",
                },
                {
                    skill_name: "Node.js",
                    progress_of_master: 15,
                    icon: "bxl-nodejs",
                },
                {
                    skill_name: "Python",
                    progress_of_master: 5,
                    icon: "bxl-python",
                },
            ],
            // 对自己会的技能做简单的介绍
            skills_introduction: `
                学习的方式主要是通过视频入门后, 做一些小Demo或者小项目进行练习与巩固。
                当需要对技术进行深入理解时则是通过书籍和别人写的技术博客, 然后自己试着在博客园上记录下来。
                技术栈主要是: 前端基础三件套、组件库、样式库、Vue、预处理器、Git以及一点点的Node.js、Python...
            `,
        },

        works: [
            {
                title: "找\"直播网红\"平台用户端(前后端分离)",
                pic: require("@/assets/works/wanghong.png"),
                url: "http://wanghong.fitzlovexx.top/",
            },
            {
                title: "好物商城(前后端分离)",
                pic: require("@/assets/works/mall.png"),
                url: "http://mall.fitzlovexx.top/",
            },
            {
                title: "在线简历(响应式布局)",
                pic: require("@/assets/works/resume.png"),
                url: "http://fitzlovexx.top/",
            },
            {
                title: "子网划分辅助工具(纯静态)",        // 作品标题
                pic: require("@/assets/works/subnet.png"),    // 作品预览图
                url: "http://subnet.fitzlovexx.top/",   // 项目运行地址, 如果未部署可以用 javascript:; 代替
            },
        ],

        contact: {
            full_info: [
                {
                    item: "姓名",
                    content: "陈文达",
                    icon: "el-icon-user",  // 注意不同网站icon的用法, 具体可以去网站中查看
                },
                {
                    item: "电话号码",
                    content: "13266032311",
                    icon: "el-icon-mobile-phone", 
                },
                {
                    item: "微信号",
                    content: "13266032311",
                    icon: "bx bxl-twitter", 
                },
                {
                    item: "邮箱",
                    content: "498289134@qq.com",
                    icon: "el-icon-location-outline", 
                },
                {
                    item: "居住地",
                    content: "中山市",
                    icon: "bx bx-mail-send",  
                },
            ]
        },
    },

    footer: {
        record_num: "粤ICP备2021178257号",  // 备案号
    },
}
