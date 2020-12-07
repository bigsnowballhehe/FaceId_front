<template>
    <div class="app">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item>人员管理</a-breadcrumb-item>
            <a-breadcrumb-item>临时派遣</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="head" style="padding-bottom: 24px"></div>
        <a-table :columns="columns" :data-source="data" >
            <span slot="customTitle"><a-icon type="smile-o" /> ID</span>
        </a-table>
        <!--props传入两个参数，然后才利用slot暴露出数据-->
    </div>
</template>

<script>
const columns = [
    {
        dataIndex: "id",
        key: "id",
        slots: { title: "customTitle" },
    },
    {
        title: "Name",
        key: "name",
        dataIndex: "name",
    },
    {
        title: "Phone",
        dataIndex: "user_info",
        key: "phone",
    },
    {
        title: "Group",
        dataIndex: "group_id",
        key: "group",
    },
];

let data = [];
import axios from "axios";
export default {
    name: "userType",
    data() {
        return {
            columns,
            data,
        };
    },
    methods: {
        async ge() {
            let ret = axios.get("http://localhost:3000/par");
            let ss = await ret;
            this.data = ss.data;
            for (let val of this.data) {
                val["key"] = val["_id"];
            }

            // console.log(this.data);
        },
    },
    mounted() {
        this.ge();
    },
};
</script>

<style scoped>
</style>