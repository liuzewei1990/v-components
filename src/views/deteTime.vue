<template>
        <div>
                <deteTime ref="dateTime" type="dateTime"></deteTime>
        </div>
</template>

<script>
import deteTime from "../components/v-date-time"
export default {
        components: { deteTime },
        mounted() {
                this.$refs.dateTime.show();
        }
}
</script>

<style>
</style>
