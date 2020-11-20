<template>
    <div class="app">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item>人员管理</a-breadcrumb-item>
            <a-breadcrumb-item>人员类型</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="head" style="padding-bottom: 24px">
            <a-button type="primary">yubei</a-button>
        </div>
        <a-table :columns="columns" :data-source="data"> </a-table>
    </div>
</template>

<script>
const columns = [
    {
        key: "ID",
        title: "ID",
        dataIndex: "id",
    },
    {
        key: "name",
        title: "Name",
        dataIndex: "name",
    },
];
const data = [
    {
        key: "1",
        id: "233",
        name: "wu",
    },
];
export default {
    name: "userType",
    data() {
        return {
            columns,
            data,
        };
    },
};
</script>

<style scoped>
</style>