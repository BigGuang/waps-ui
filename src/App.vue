<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'app',
        created() {
            // 删除加载动画demo
            // if (document.getElementById('nb-global-spinner')) {
            //     document.body.removeChild(document.getElementById('nb-global-spinner'));
            // }
            document.body.removeChild(document.getElementById('loading'));
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
    }
</style>
