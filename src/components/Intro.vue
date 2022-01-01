<template>
    <div id="intro_container">

        <div
            v-for="(item, index) in intro_items" :key="index"
            :id="item.anchor"
            class="intro_items"
        >
            {{ item.title }}
        </div>

        <el-backtop :visibility-height="50"></el-backtop>
    </div>
</template>

<script>
    import lodash from "lodash"

    export default {
        name: "Intro",
        mounted() {
            this.intro_item_active()
        },
        data() {
            return {

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
        },
        methods: {
            // 用于头部和移动端侧边栏的锚点响应式, 即: 浏览到对应的介绍项目时, 对应介绍项就有下划线高亮
            intro_item_active () {
                const divs = document.querySelectorAll(".intro_items")
                const anchor_target = {}    // 记录每个锚点所在的位置, 用于顶部和移动端右侧菜单的响应式
                const items = this.myinfo.header.intro_items
                divs.forEach(
                    (div, index) => {
                        anchor_target[`${div.offsetTop}`] = items[index]["anchor"]
                    }
                )
                
                addEventListener("scroll", lodash.throttle(
                    ()=>{
                        let curScrollTop = document.documentElement.scrollTop
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
            }
        },
    };
</script>

<style scoped lang="less">
    #intro_container {

        .intro_items {
            line-height: 1000px;

            color: #fff;
            font-weight: bold;
            font-size: 4rem;

            &:nth-child(1) {
                background-color: goldenrod;
            }
            &:nth-child(2) {
                background-color: rebeccapurple;
            }
            &:nth-child(3) {
                background-color: teal;
            }
            &:nth-child(4) {
                background-color: yellowgreen;
            }
            &:nth-child(5) {
                background-color: hotpink;
            }
        }
    }
</style>
