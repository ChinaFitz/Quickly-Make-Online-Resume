<template>
    <div id="footer_container">
        <p id="title">
            {{ myinfo.global.title }}
        </p>
        <p id="finish_time">
            由Fitz在2022元旦假期期间完成
        </p>
        <div id="copyright">
            <p>©Fitz.  All rigths reserved</p>
            <p>
                <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2021178257号</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        data() {
            return {

            }
        }
    };
</script>

<style scoped lang="less">
    #footer_container {
        color: #fff;
        font-size: 1rem;
        font-weight: 500;

        p {
            margin: 25px;

            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }

    #title {
        font-size: 1.5rem;
    }
</style>
