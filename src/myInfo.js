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
                anchor: "#skill",
            },
            {
                title: "个人作品",
                anchor: "#work",
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
    },
}
