<template>
    <div id="app">
        <header-bar></header-bar>
        <h1>主界面</h1>
        <div @click="showBtn" style="cursor: pointer">点击</div>
        <div v-if="isShow">show and disappear</div>
        <div>
            <router-link to="/home">home page</router-link>
        </div>
        <div>
            <router-link to="/about">about page</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import headerBar from "../components/header-bar.vue";

    export default {
        components: {
            headerBar
        },

        name: "home",

        data() {
            return {
                isShow: false
            }
        },

        methods: {
            showBtn () {
                this.isShow = !this.isShow
            }
        }
    }
</script>

<style scoped>

</style>

