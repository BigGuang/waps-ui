<template>
    <div id="game">
        <wp_game :url="url"/>
    </div>
</template>

<script>
    import wp_game from "@/components/ext/wp_game";
    export default {
        name: "Game",
        components: {wp_game},
        props: {
            url: {
                type: String,
                default: 'https://mcxxl.shandw.com/wyqq?uid=1862214035&nick=1862214035&avatar=null&sex=null&channel=10000&time=1550624898&sign=7bc149c8937cf52922e99aeba620c0e6&gid=2055973065&appid=2055973065&plt=null&cburl=http%3A%2F%2Fwww.shandw.com%2Fmi%2Fgame%2F2055973065.html%3Fchannel%3D10000%26ver%3D2.2.2&amp;reurl=http%3A%2F%2Fwww.shandw.com%2Fmi%2Fgame%2F2055973065.html%3Fchannel%3D10000%26ver%3D2.2.2&amp;fl=5&amp;ver=2.2.2'
            },
        },
        created(){
            window.console.log(this.$sdk.getVersion())
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>