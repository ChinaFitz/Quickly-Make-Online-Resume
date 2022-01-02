<template>
    <div :id="slot_name">
        <slot :name="slot_name"></slot>
    </div>
</template>


<script>

    export default {
        name: "IntroItem", // 指定组件名
        props: [
            "slot_name",
        ],
    }

</script>

<style lang="less" scoped>
    @import "../config.less";
    
    /* 
        每个自己的介绍项的样式在这配置, 格式如下:
            
            #myinfo文件中的anchor名(不用#) {
                // 你的样式....
            }

    */
    #home {
        font-size: @introItem_font_size;

        a {
            text-decoration: none;
            color: @introItem_background_color;
        }

        .home_item {
            display: flex;
            flex-wrap: wrap;

            .sayHi {
                padding: 2rem;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;

                p,
                & > a {
                    margin: 0 0 1.5rem 0;
                }

                & > a {
                    display: inline-block;
                }

                .info_emphasis {
                    color: @global_emphasis_color;
                }

                .contract_me {
                    width: 6rem;
                    padding: 0.6rem;
                    font-size: 1.3rem;
                    text-align: center;
                    background-color: @global_emphasis_color;
                    color: @introItem_contact_font_color;
                }

                .blogs {
                    display: flex;
                    font-size: 1rem;

                    .blog_item {
                        &:not(:first-child) {
                            margin-left: 1rem;
                        }

                        &:nth-child(3) {
                            display: flex;
                            align-items: center;
                        }
                    }
                }
            }


            .avatar {

                width: 5rem;
                flex-grow: 2;
                padding: 2rem;
                #flex_center();

                .home__blob {
                    fill: @introItem_avatar_background_color;
                    width: 24rem;
                }

                .home__blob-img {
                    width: 20rem;

                    @media screen and (max-width: 750px) {
                        width: 25rem;
                    }
                }
            }
        }
    }



    
</style>