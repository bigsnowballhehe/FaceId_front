<template>
    <div class="app">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>首页</a-breadcrumb-item>
        </a-breadcrumb>
        <img src="../assets/wecl.jpg" alt="欢迎" />
        <a-button type="primary" @click="increment">dianwo</a-button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "intro",
    methods: {
        increment() {
            this.$store.commit("increment");
            console.log(this.$store.state.count);
        },
    },
    computed: {
        ...mapState({
            count: "count",
        }),
    },
};
</script>

<style scoped>
</style>