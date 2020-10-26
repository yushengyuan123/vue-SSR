<template>
    <div>跳转到{{about}}页面</div>
</template>

<script>
    export default {
        name: "about",

        data () {
            return {
                about: 'about'
            }
        },

        mounted() {
            console.log('执行')
            setTimeout(() => {
                console.log('执行')
                this.about = '哈哈我偷偷把你换了'
            }, 1000)
        }
    }
</script>

<style scoped>

</style>
