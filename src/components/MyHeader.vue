<template>
    <div id="container">
        <div>
            {{ myinfo.name }}
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
        beforeCreate() {
            // 将该页专用的信息先进行一次提取
            this.myinfo = this.myinfo.header
        },
        mounted() {
            window.location.href = "/#home" // 自动重定向到首页
            addEventListener("hashchange", ()=>{
                this.hash = window.location.hash
            })
        },
        data() {
            return {
                intro_items: this.myinfo.intro_items,
                hash: "#home",
                show_menu: false,
            }
        },
    };
</script>

<style scoped lang="less">
    @color: #0D1730;
    @theme-color: #269cf7;


    #container {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        font-weight: 600;
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
                background-color: @theme-color;
            }

            color: #0D1730;
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
                color: @color;
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
            background-color: #16213f;
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
                    color: @color;
                    text-decoration: none;
                    color: #fff;
                    text-align: left;
                    font-size: 1rem;
                    display: inline-block;
                    height: 100%;
                }
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
