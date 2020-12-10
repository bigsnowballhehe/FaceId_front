<template>
    <div class="app">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item>人员管理</a-breadcrumb-item>
            <a-breadcrumb-item>全职人员</a-breadcrumb-item>
        </a-breadcrumb>
        <!--顶部区域-->
        <div class="head">
            <a-button type="primary" @click="showDrawer">请求注册新人员</a-button>
            <a-drawer
                title="小程序码"
                placement="right"
                :closable="false"
                :visible="visible"
                
                @close="onClose"
            >
                <div id="cx"> <img src="../../public/list.jpg" alt="小程序" ></div>
               
               
            </a-drawer>
        </div>

        <div class="tablem">
            <a-table :columns="columns" :data-source="data">
                <span slot="customTitle"><a-icon type="smile-o" /> ID</span>
                <div
                    slot="filterDropdown"
                    slot-scope="{
                        setSelectedKeys,
                        confirm,
                        clearFilters,
                        selectedKeys,
                    }"
                    style="padding: 8px"
                >
                    <a-input
                        placeholder="查找名字"
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
                        @click="() => handleSearch(selectedKeys, confirm)"
                    >
                        查找
                    </a-button>
                    <a-button
                        size="small"
                        style="width: 90px"
                        @click="() => handleReset(clearFilters)"
                    >
                        重置
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
        title: "姓名",
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
        title: "电话",
        dataIndex: "user_info",
        key: "phone",
    },
    {
        title: "组别",
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
            visible:false,
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
        handleSearch(selectedKeys, confirm) {
            confirm();
            this.searchText = selectedKeys[0];
        },

        handleReset(clearFilters) {
            clearFilters();
            this.searchText = "";
        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
    },
    created() {
        this.ge();
    },
};
</script>

<style scoped>
.app .head {
    padding-bottom: 24px;
}
#cx{
    width:200px;
    height:200px;
    overflow: hidden;
}
img{
    width:100%;
}
</style>