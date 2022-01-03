<template>
    <div id="intro_container">

        <IntroItem
            class="intro_items"
            ref="intro_items"
            v-for="(item, index) in intro_items" :key="index"
            :slot_name="item.anchor"
        >
            <!-- 动态计算插槽名 -->
            <template #[item.anchor]>
                {{ item.title }}
            </template>


            <!-- home(首页)介绍项 -->
            <template #home>
                <div class="home_item">
                    <div class="sayHi">
                        <p>你好呀,</p>
                        <p>
                            我叫
                            <span class="info_emphasis">陈文达</span>, 
                            你也可以叫我
                            <span class="info_emphasis">Fitz</span>
                        </p>
                        <p>我想应聘的岗位是:
                            <span class="info_emphasis">
                                {{ myinfo.intro.home.expect_position }}
                            </span>
                        </p>
                        <a href="#contact" class="contract_me">联系我吧</a>
                        <div class="blogs">
                            <a class="blog_item" target="_blank" :href="blogs.cnblogs">博客园</a>
                            <a class="blog_item" target="_blank" :href="blogs.gitee">gitee</a>
                            <a class="blog_item" target="_blank" :href="blogs.github">
                                github
                                <i class="bx bxl-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="avatar">
                        <svg class="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                                <image class="home__blob-img" x="60" y="50" width="100%" height="100%" :href="avatar"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </template>


            <!-- aboutme(关于我)介绍项 -->
            <template #aboutme>
                <p class="title">{{item.title}}</p>
                <div class="whoami">
                    <img :src="me" alt="个人照片" class="pic">
                    <div class="introduce">
                        <p>我叫 {{ myinfo.global.name }} ,</p>
                        <div> {{ myinfo.intro.aboutme.introduce }}</div>
                    </div>
                </div>
            </template>


            <!-- skill(我会些什么)介绍项 -->
            <template #skills>
                <p class="title">{{item.title}}</p>
                <div class="container">
                    <div class="skills_left">
                        <p>我掌握了以下技能:</p>
                        <div class="skills_introduce">
                            这些技能都是我自己在各大视频网站自学的 这些技能都是我自己在各大视频网站自学的
                            这些技能都是我自己在各大视频网站自学的 这些技能都是我自己在各大视频网站自学的
                            这些技能都是我自己在各大视频网站自学的 这些技能都是我自己在各大视频网站自学的
                        </div>
                        <ul
                            class="skills_list animate__animated animate__bounce animate__fadeInLeftBig"
                        >
                            <Skills
                                v-for="(skill, index) in main_skills" :key="index"
                                :skill_name="skill.skill_name"
                                :progress_num="skill.progress_of_master"
                                :icon_class_name="skill.icon"
                            />
                        </ul>
                    </div>
                    <div class="skills_right">
                        <ul
                            class="skills_list animate__animated animate__bounce animate__fadeInRightBig"
                        >
                            <Skills
                                v-for="(skill, index) in sub_skills" :key="index"
                                :skill_name="skill.skill_name"
                                :progress_num="skill.progress_of_master"
                                :icon_class_name="skill.icon"
                            />
                        </ul>
                    </div>
                </div>
            </template>

            
            <template #works>
                <p class="title">{{item.title}}</p>
                <div class="works_container">
                    <a
                        class="work_item"
                        target="_blank"
                        :title="work.title"
                        :href="work.url"
                        v-for="(work, index) in works_list" :key="index"
                    >
                        <img :src="work.pic" :alt="work.title">
                    </a>
                </div>
            </template>


            <!-- contact(联系我)介绍项 -->
            <template #contact>
                <p class="title">{{item.title}}</p>

                <el-descriptions
                    border
                    :column="1"
                    size="size"
                >
                    <el-descriptions-item
                        v-for="(info, index) in full_info" :key="index"
                        ref="infos"
                    >
                        <template slot="label">
                            <i :class="info.icon"></i>
                            {{ info.item }}
                        </template>
                        {{ info.content }}
                        
                        <el-button 
                            type="primary"
                            size="mini"
                            @click="copy(info.content, $event)"
                        >
                            点击复制信息
                        </el-button>

                    </el-descriptions-item>
                </el-descriptions>
            </template>

        </IntroItem>

        <el-backtop :visibility-height="50"></el-backtop>
    </div>
</template>

<script>
    import lodash from "lodash"
    import IntroItem from "@/components/IntroItem"
    import Skills from "@/components/Skills"

    export default {
        name: "Intro",
        components: {
            IntroItem,
            Skills,
        },
        mounted() {
            this.intro_item_active()
        },
        data() {
            return {
                avatar: this.myinfo.intro.home.me,
                me: this.myinfo.intro.aboutme.me,
            }
        },
        computed: {
            intro_items() {
                const reg = /(\w+)/g
                const items = this.myinfo.header.intro_items
                return items.map(
                    item => {
                        return {
                            title: item.title,
                            anchor: item.anchor.match(reg)[0]
                        }
                    }
                )
            },
            // 博客相关的地址
            blogs() {
                return this.myinfo.intro.home.blogs
            },
            skills_list() {
                return this.myinfo.intro.skills
            },
            main_skills() {
                return this.skills_list.main_skills
            },
            sub_skills() {
                return this.skills_list.sub_skills
            },
            works_list() {
                return this.myinfo.intro.works
            },
            full_info() {
                return this.myinfo.intro.contact.full_info
            },
        },
        methods: {
            // 用于头部和移动端侧边栏的锚点响应式, 即: 浏览到对应的介绍项目时, 对应介绍项就有下划线高亮
            intro_item_active () {
                const vcs = this.$refs["intro_items"]
                const anchor_target = {}    // 记录每个锚点所在的位置, 用于顶部和移动端右侧菜单的响应式
                const items = this.myinfo.header.intro_items
                vcs.forEach(
                    (vc, index) => {
                        const div = vc.$el
                        anchor_target[`${div.offsetTop}`] = items[index]["anchor"]
                    }
                )
                
                addEventListener("scroll", lodash.throttle(
                    ()=>{
                        // +header的高度 的原因是: 修复锚点因为header的position为sticky而导致的偏移bug
                        let curScrollTop = document.documentElement.scrollTop + 72
                        let anchors_scrollTop = Object.keys(anchor_target)
                        for (let i = 0; i < anchors_scrollTop.length; i++) {
                            const cur_anchor_scrollTop = Number(anchors_scrollTop[i])
                            const next_anchor_scrollTop = Number.isNaN(Number(anchors_scrollTop[i+1])) ? 
                                                            cur_anchor_scrollTop +  (cur_anchor_scrollTop - Number(anchors_scrollTop[i-1])) : 
                                                            Number(anchors_scrollTop[i+1])
                            if (curScrollTop >= cur_anchor_scrollTop && curScrollTop < next_anchor_scrollTop) {
                                const flag = `${anchors_scrollTop[i]}`
                                this.$bus.$emit("change_hash", anchor_target[flag])
                                break
                            }
                        }
                    },
                    350
                ))
            },

            // 实现一键复制(仅支持PC端)
            copy (text) {
                navigator.clipboard.writeText(text)
            }

        },
    };
</script>

<style scoped lang="less">
    @import "../config.less";

    #intro_container {
        width: 90%;
        margin: 0 auto;

        /* 将样式穿透到IntroItem组件(具名插槽)中 */
        ::v-deep .intro_items {
            
            color: @intro_background_color;
            font-weight: bold;
           
        }
    }
</style>
