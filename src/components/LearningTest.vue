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
    </div>
</template>

<script>
export default {
    name: "LearningTest",

    data() {
        return {
            postFontsize: 1,
            user: {
                name: "xueqiu",
                age: "23",
            },
        };
    },
    props: ["love", "heat"],
};
</script>

<style>
</style>
