// 所以关于你的信息都在这配置, 之后会自动放入项目中
export default {
    global: {
        title: "陈文达的在线简历",  // 浏览器标签页名 和 footer中的版权内容
        name: "陈文达",   // 你的名字
        nickName: "Fitz",   // 英文名或昵称
    },
    header: {
        // 介绍自己
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
            me: require("@/assets/aboutme/me.jpg"),   // 上半身照
            introduce: `
                        掉就打死哦安静地死哦啊接迪欧撒撒降低，
                        待多久斯安德森谁极爱单静安寺级啊世界第四家具大赛嗲第九赛季第三杀季赛季赛
                        待多久斯安德森谁极爱单静安寺级啊世界第四家具大赛嗲第九赛季第三杀季赛季赛
                        待多久斯安德森谁极爱单静安寺级啊世界第四家具大赛嗲第九赛季第三杀季赛季赛
                        sadsajidjsidisajsda
                        `,
        },
        skills: {
            // 最熟悉的技术栈一般3-5个
            /* 
                该项目可以直接使用 https://boxicons.com/ 中的icon, 只需要bxs-icon-name即可
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
                    progress_of_master: 80,
                    icon: "bxl-javascript",
                },
                {
                    skill_name: "ES6",
                    progress_of_master: 70,
                    icon: undefined,    // 使用默认icon
                },
                {
                    skill_name: "Vue",
                    progress_of_master: 85,
                    icon: "bxl-vuejs",
                },
            ],
            //其他一些能够说得上东西的技能, 最好列举5个
            sub_skills: [
                {
                    skill_name: "Git",
                    progress_of_master: 80,
                    icon: "bxl-git",
                },
                {
                    skill_name: "Less",
                    progress_of_master: 60,
                    icon: "bxl-less",
                },
                {
                    skill_name: "Node.js",
                    progress_of_master: 40,
                    icon: "bxl-nodejs",
                },
                {
                    skill_name: "Python",
                    progress_of_master: 40,
                    icon: "bxl-python",
                },
                {
                    skill_name: "Bootstrap",
                    progress_of_master: 50,
                    icon: "bxl-bootstrap",
                },
            ],
        },
        works: [
            {
                title: "w1",        // 作品标题
                pic: require("@/assets/aboutme/me.jpg"),    // 作品预览图
                url: "https://www.cnblogs.com/fitzlovecode/",   // 项目运行地址, 如果未部署可以用 javascript:; 代替
            },
            {
                title: "w1",
                pic: require("@/assets/aboutme/me.jpg"),
                url: "https://www.cnblogs.com/fitzlovecode/",
            },
            {
                title: "w1",
                pic: require("@/assets/aboutme/me.jpg"),
                url: "https://www.cnblogs.com/fitzlovecode/",
            },
            {
                title: "w1",
                pic: require("@/assets/aboutme/me.jpg"),
                url: "https://www.cnblogs.com/fitzlovecode/",
            },
            {
                title: "w1",
                pic: require("@/assets/aboutme/me.jpg"),
                url: "https://www.cnblogs.com/fitzlovecode/",
            },
        ],
    },
}
