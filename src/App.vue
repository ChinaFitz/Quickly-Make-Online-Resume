<template>
    <div id="app">
        APP根组件
        <hr>
        <MyHeader />
        <hr>
        <AboutMe />
        <hr>
        <MyFooter />
    </div>
</template>

<script>
    import MyHeader from "./components/MyHeader";
    import AboutMe from "./components/AboutMe";
    import MyFooter from "./components/MyFooter";

    export default {
      name: "App",
      components: {
        MyHeader,
        AboutMe,
        MyFooter,
      },
    };
</script>

<style lang="less"></style>
