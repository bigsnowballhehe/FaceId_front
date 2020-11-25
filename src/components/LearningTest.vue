<template>
    <div :style="{ fontSize: postFontsize + 'em' }">
        <button @click="postFontsize += 0.1">touch me +</button>
        <H1>{{ love }}</H1>
        <h2>{{ heat }}</h2>
        <span>
            年龄是
            <slot v-bind:user="user">
                {{ user.name }}
            </slot>
        </span>
        <a-button type="primary">zehshi</a-button>
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

<style>
</style>
