# 快速制作个人前端在线简历

这个小项目制作于2022年元旦假期期间, 用于本人在大四找实习工作时候使用, 最终做出来的效果虽然有许多瑕疵, 但并不阻碍正常使用, 所以凑合着使用咯

如果这个在线简历模板能帮助到您, 麻烦给我一个Star吧!

最后, 祝大家都能找到自己心仪的工作！


[在线预览](http://fitzlovexx.top)






---






## 使用方式

1. 克隆项目

    ``` shell
    # github
    git clone https://github.com/ChinaFitz/Quickly-Make-Online-Resume.git

    #gitee
    git clone git@gitee.com:chinafitz/resume.git
    ```






2. 根据自己的需要配置项目的内容

    [当完全按照原有模板只更改介绍内容时](#当完全按照原有模板只更改介绍内容时)

    [当需要自定义时简历模板的内容时](#当需要自定义时简历模板的内容时)






3. 打包项目

    ``` shell
    npm run build
    ```



4. 发布到自己的服务器、gitee Page 或 Github Page








---










### 当完全按照原有模板只更改介绍内容时

**您只需要:** 在`src/assets中放入图片(如果你有)` 和 配置`src/myinfo.js`


src/myinfo.js

``` js
// 所以关于你的信息都在这配置, 之后会自动放入项目中
export default {
    global: {
        title: "陈文达的在线简历",  // 浏览器标签页名 和 footer中的版权内容
        name: "陈文达",   // 你的名字
        nickName: "Fitz",   // 英文名或昵称
    },

    header: {
        // 无需做出配置
    },

    intro: {
        home: {
            expect_position: "Web前端开发(实习生)",     // 期望岗位
            me: require("@/assets/home/me.png"),   // 你的头像的路径, 注意储存路径及其写法, @/ 等价于 src/
            blogs: {
                cnblogs: "https://www.cnblogs.com/fitzlovecode/",    // 博客园地址
                gitee: "https://gitee.com/chinafitz",   // gitee地址
                github: "https://github.com/ChinaFitz", // github地址
            }
        },

        aboutme: {
            me: require("@/assets/aboutme/me.png"),   // 上半身照
            introduce: ``,  // 介绍自己
        },

        skills: {
            // 最熟悉的技术栈一般3-5个
            /* 
                该项目可以直接使用:
                https://boxicons.com/ 中的icon (只需要bxs-icon-name即可)
                        和 
                https://element.eleme.cn/#/zh-CN/component/icon 中的 icon (依据官网写法)
                
                使用默认icon就用undefined代替
                不适用icon就用""代替
            */
            main_skills: [
                {
                    skill_name: "Vue",
                    progress_of_master: 80,
                    icon: "bxl-vuejs",
                },
                {
                    skill_name: "Axios",
                    progress_of_master: 60,
                    icon: undefined,    // 使用默认icon
                },
            ],

            //其他一些能够说得上东西的技能, 最好列举5个
            sub_skills: [], // 配置方法与main_skill一样

            // 对自己会的技能做简单的介绍
            skills_introduction: ``,
        },

        works: [
            {
                title: "在线简历(响应式布局)",  // 鼠标悬停 或 图片加载失败时显示
                pic: require("@/assets/works/resume.png"), // 项目预览图位置, 注意路径的写法: @/ 等价于 ./src/
                url: "http://fitzlovexx.top/",  // 项目部署的地址, 没有就用 "javascript:;"
            },
        ],

        contact: {
            full_info: [
                {
                    item: "姓名",   // 个人信息的名字
                    content: "Fitz",  // 个人信息的内容
                    icon: "el-icon-user",  // 注意不同网站icon的用法, 具体可以去网站中查看
                },
                {
                    item: "电话号码",
                    content: "13288888888",
                    icon: "el-icon-mobile-phone", 
                },
                {
                    item: "微信号",
                    content: "13288888888",
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
        record_num: "粤ICP备8888888888号",  // 备案号
    },
}
```





---






### 当需要自定义时简历模板的内容时


您需要关注:
1. src/assets  可以放简历用到的图片
2. src/myinfo.js  可以配置简历内容
3. src/config.less  可以对网站进行配色、布局自定义, ==布局请谨慎自定义==
4. src/components/Intro.vue 配置自定义介绍项的HTML结构, 比如说: 要添加一个 <在校经历> 介绍项
5. src/components/IntroItem.vue 配置自定义介绍项的CSS样式







---






src/myinfo.js 配置可以查看前面
config.less 中已经对配置项进行详细说明, 也可自己尝试配置





---





配置自定义介绍项的HTML结构的方法:

src/myinfo.js

``` js
export default {
    header: {
        intro_items: [
            {
                title: "在校经历",
                anchor: "#honor",
            },
        ],
    },
}
```



配置自定义介绍项的CSS样式的方法:

src/components/Intro.vue 

``` html
<template #honor>
    你的HTML结构
</template>
```





---





src/components/IntroItem.vue 配置自定义介绍项的CSS样式

``` html
<style lang="less" scoped>
    #honor {
        #intro_container(); /* 最好加上 */

        /* 
            你的样式
        */
    }
<style>
```
