<template>
    <div id="intro_container">

        <div
            v-for="(item, index) in intro_items" :key="index"
            :id="item.anchor"
            class="intro_items fafa"
        >
            {{ item.title }}
        </div>

        <el-backtop :visibility-height="50"></el-backtop>
    </div>
</template>

<script>
    export default {
        name: "Intro",
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
