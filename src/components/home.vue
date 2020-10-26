<template>
    <div>
        <div @click="showBtn" style="cursor: pointer">点击获取最新</div>
        {{item}}
    </div>
</template>

<script>
    import headerBar from "./header-bar.vue";
    import {mapActions, mapMutations} from "vuex";

    export default {
        name: "home",

        data() {
            return {
                index: 0
            }
        },

        computed: {
            item() {
                return this.$store.state.items
            }
        },

        methods: {
            ...mapActions(['fetchItem']),

            showBtn () {
                console.log('点击事件')
                this.fetchItem(this.index % 3)
                this.index++
            }
        }
    }
</script>

<style scoped>

</style>
