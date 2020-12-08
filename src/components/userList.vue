<template>
    <div class="app">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item>人员管理</a-breadcrumb-item>
            <a-breadcrumb-item>全职人员</a-breadcrumb-item>
        </a-breadcrumb>
        <!--顶部区域-->
        <div class="head"></div>
        

        <div class="tablem">
            <a-table :columns="columns" :data-source="data">
                <span slot="customTitle"><a-icon type="smile-o" /> ID</span>
                <div
                    slot="filterDropdown"
                    slot-scope="{ setSelectedKeys, confirm, clearFilters ,selectedKeys}"
                    style="padding: 8px"
                >
                    <a-input
                        placeholder="Search name"
                        :value="selectedKeys[0]"
                        style="width: 188px; margin-bottom: 8px; display: block"
                        @change="
                            (e) =>
                                setSelectedKeys(
                                    e.target.value ? [e.target.value] : []
                                )
                        "
                    />
                    <a-button
                        type="primary"
                        icon="search"
                        size="small"
                        style="width: 90px; margin-right: 8px"
                        @click="() => handleSearch(selectedKeys,confirm)"
                    >
                        Search
                    </a-button>
                    <a-button
                        size="small"
                        style="width: 90px"
                        @click="() => handleReset(clearFilters)"
                    >
                        Reset
                    </a-button>
                </div>
                <a-icon
                    slot="filterIcon"
                    slot-scope="filtered"
                    type="search"
                    :style="{ color: filtered ? '#108ee9' : undefined }"
                />
            </a-table>
        </div>
    </div>
</template>

<script>
// columns 格式  dataIndex作为data获取的索引   key是关键字。   slots 是暴露出的插槽  text 第一行胡数据？？ record是当前行所有数据 text是当前行值 slot应该是key
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
        scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender",
        },
        onFilter: (value, record) =>
            record.name.toString().toLowerCase().includes(value.toLowerCase()),
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
    name: "userList",

    data() {
        return {
            formLayout: "horizontal",
            searchText: "",
            data,
            columns,
        };
    },
    methods: {
        async ge() {
            let ret = axios.get("http://localhost:3000/list");
            let ss = await ret;
            this.data = ss.data;
            for (let val of this.data) {
                val["key"] = val["_id"];
            }

            // console.log(this.data);
        },
        handleSearch(selectedKeys,confirm) {
            confirm();
            this.searchText = selectedKeys[0]
        },

        handleReset(clearFilters) {
            clearFilters();
            this.searchText = "";
        },
    },
    mounted() {
        this.ge();
    },
};
</script>

<style scoped>
.app .head {
    padding-bottom: 24px;
}
</style>