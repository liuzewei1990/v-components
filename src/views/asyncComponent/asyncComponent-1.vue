<template>
    <div>asyncComponent-1</div>
</template>

<script>
export default {
    props: {
        v: String
    },
    mounted() {
        console.log("asyncComponent-1", this.v)
    },
}
</script>

<style>
</style>
