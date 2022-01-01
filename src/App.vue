<template>
    <el-container>
        <el-header>
            <MyHeader />
        </el-header>
        <el-main>
            <AboutMe />
        </el-main>
        <el-footer>
            <MyFooter />
        </el-footer>
    </el-container>
</template>

<script>
    import MyHeader from "@/components/MyHeader";
    import AboutMe from "@/components/AboutMe";
    import MyFooter from "@/components/MyFooter";

    export default {
      name: "App",
      components: {
        MyHeader,
        AboutMe,
        MyFooter,
      },
    };
</script>

<style lang="less">
    /*===== 全局字体 =====*/
    html {
        font-family: 'Poppins', Helvetica, Arial, sans-serif;
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
    }
    
    .el-header, .el-footer {
      color: #333;
      text-align: center;
    }

    .el-footer {
        background-color: #B3C0D1;
        line-height: 60px;
    }


    .el-main {
      background-color: #fff;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
</style>
