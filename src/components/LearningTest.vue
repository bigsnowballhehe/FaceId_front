<template>
    <span>
        年是
        <slot v-bind:user="user">
            {{ user.name }}
        </slot>
    </span>
</template>

<script>
export default {
    name: "LearningTest",

    data() {
        return {
            user: {
                name: "xueqiu",
                age: "23",
            },
        };
    },
};
</script>

<style>
</style>
