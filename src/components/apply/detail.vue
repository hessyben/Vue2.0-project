<template>
    <div>详情接口</div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 3,
                spanRight: 21
            }
        },
        created(){
            console.log(this.$route.params.id);
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
