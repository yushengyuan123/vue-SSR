<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import headerBar from "./components/header-bar.vue";

    export default {
        components: {
            headerBar
        },

        name: "App",

        data() {
            return {
                isShow: false
            }
        },

        methods: {
            showBtn () {
                console.log('点击')
                this.isShow = !this.isShow
            }
        }
    }
</script>

<style scoped>

</style>
