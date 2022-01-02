<template>
    <div id="container">
        <div style="text-align: left;">
            {{ myinfo.global.name }} ( {{  myinfo.global.nickName }} )
        </div>
        <ul id="header">
            <li
                v-for="(item, index) in intro_items" :key="index"
                :class="{item_active: hash === item.anchor}"
            >
                <a :href="item.anchor">
                    {{ item.title }}
                </a>
            </li>
        </ul>

        <div 
            id="mobile_menu"
            class="el-icon-more"
            style="font-size: 1.5rem;"
            @click="show_menu = !show_menu"
        ></div>

        <transition
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeInRight"
            leave-active-class="animate__fadeOutRight"
        >
            <ul
                class="menu"
                v-if="show_menu"
            >
                <li
                    v-for="(item, index) in intro_items" :key="index"
                >
                    <a
                        :href="item.anchor"
                        :class="{mobile_item_active: hash === item.anchor}"
                    >
                        {{ item.title }}
                    </a>
                </li>
            </ul>
        </transition>
        
    </div>
</template>

<script>
    export default {
        name: "MyHeader",
        mounted() {
            window.location.href = "/#home" // 自动重定向到首页
            addEventListener("hashchange", ()=>{
                this.hash = window.location.hash
            })
            // 用于头部和移动端侧边栏的锚点响应式, 即: 浏览到对应的介绍项目时, 对应介绍项就有下划线高亮
            this.$bus.$on("change_hash", h => {
                this.hash = h
            })
        },
        data() {
            return {
                intro_items: this.myinfo.header.intro_items,
                hash: "#home",
                show_menu: false,
            }
        },
    };
</script>

<style scoped lang="less">
    @import "../config.less";

    #container {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        font-weight: @global_font_weight;
        display: flex;
        justify-content: space-around;
        align-items: center;
        line-height: 4;

        div {
            flex: 1 0 auto;
        }

        #header {
            // 选中介绍项后的样式
            #active() {
                content: "";
                position: absolute;
                width: 0;
                transition-property: all;
                transition-timing-function: ease-in-out;
                transition-duration: .25s;
                height: 0.2rem;
                left: 0;
                top: 3rem;
                background-color: @global_emphasis_color;
            }

            color: @header_font_color;
            margin: 0;
            padding: 0;
            display: flex;
            flex: 2 0 auto;
            justify-content: flex-end;

            li {
                list-style: none;
                margin: 0 25px;
                position: relative;
                
                //定义hover后的样式
                &::after {
                    #active();
                }
                &:hover {
                    &::after {
                        width: 100%;
                    }
                }
            }

            a {
                text-decoration: none;
                color: @header_font_color;
            }
        }


        @media screen and (max-width: 750px) {
            #container {
                justify-content: space-between;
            }

            div {
                &:first-child {
                    font-size: 1.4rem;
                    text-align: left;
                }
            }

            #header {
                display: none;
            }

            #mobile_menu {
                display: flex;
                justify-content: flex-end;
            }
        }

        @media screen and (min-width: 750px) {
            #header {
                display: flex;
            }
            
            #mobile_menu {
                display: none;
            }
        }



        .menu {
            --animate-duration: .3s;    // 调整与动画样式库
            width: 70%;
            height: 100vh;
            background-color: @mobile_menu_color;
            position: absolute;
            right: 0;
            top: 4rem;
            margin: 0;
            padding: 0;
            li {
                list-style: none;
                margin-bottom: 5px;

                a {
                    position: relative;
                    color: @header_font_color;
                    text-decoration: none;
                    color: @mobile_menu_font_color;
                    text-align: left;
                    font-size: @mobile_menu_font_size;
                    display: inline-block;
                    height: 100%;
                }
            }


            @media screen and (min-width: 750px) {
                display: none;
            }
        }
    }

    /* 介绍项点击后的样式 */
    .item_active {
        &::after {
            #container#header#active();
            width: 100%!important;
        }
    }

    .mobile_item_active {
        &::after {
            #container#header#active();
            width: 100%!important;
        }
    }
</style>
