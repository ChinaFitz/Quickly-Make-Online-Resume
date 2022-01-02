<template>
    <el-container>
        <el-header>
            <MyHeader />
        </el-header>
        <el-main>
            <Intro />
        </el-main>
        <el-footer>
            <MyFooter />
        </el-footer>
    </el-container>
</template>

<script>
    import MyHeader from "@/components/MyHeader";
    import Intro from "@/components/Intro";
    import MyFooter from "@/components/MyFooter";

    export default {
      name: "App",
      components: {
        MyHeader,
        Intro,
        MyFooter,
      },
    };
</script>

<style lang="less">
    /*===== 全局字体 =====*/
    html {
        font-family: 'Poppins', Helvetica, Arial, sans-serif;

        // 锚点滚动的过渡效果
        scroll-behavior: smooth;

        // 滚动条样式
        &::-webkit-scrollbar {
            width: 15px;
            height: 15px;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: rgba(144, 147, 153, .5);
            border-radius: 30px;
            box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);

            &:hover {
                background-color: rgba(105, 106, 109, 0.5);
            }
        }

        &::-webkit-scrollbar-track {
            background-color: #fff;
        }
    }

    @media screen and (max-width: 750px) {
        html {
            font-size: 14px;
        }
        
    }

    @media screen and (min-width: 750px) {
        html {
            font-size: 18px;
        }
    }

    .el-header {
        height: 4rem!important;
        background-color: #fff;
        box-shadow: 0 1px 4px rgba(140, 153, 167, 0.18);
        z-index: 999;
        position: sticky;
        top: 0px;
    }
    
    .el-header, .el-footer {
      color: #333;
      text-align: center;
    }

    .el-footer {
        background-color: #0d1730;
        height: auto!important;
    }


    .el-main {
      background-color: #fff;
      color: #333;
    }
</style>
