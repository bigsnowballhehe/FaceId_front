<template>
    <div class="app">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item>人员管理</a-breadcrumb-item>
            <a-breadcrumb-item>人员列表</a-breadcrumb-item>
        </a-breadcrumb>
        <!--顶部区域-->
        <div class="head">
            <a-button type="primary" @click="showDrawer"> 添加人员 </a-button>
            <a-drawer
                title="添加人员"
                placement="right"
                :closable="false"
                :visible="visible"
                :after-visible-change="afterVisibleChange"
                @close="onClose"
            >
                <a-upload
                    action="api"
                    list-type="picture"
                    :default-file-list="fileList"
                    class="upload-list-inline"
                >
                    <a-button> <a-icon type="upload" /> 上传图片 </a-button>
                </a-upload>
            </a-drawer>
        </div>

        <div class="tablem">
            <a-table :columns="columns" :data-source="data">
                <a slot="name" slot-scope="text">{{ text }}</a>
                <span slot="customTitle"><a-icon type="smile-o" /> Name</span>

                <span slot="action" slot-scope="text, record">
                    <a>Invite 一 {{ record.name }}</a>
                    <a-divider type="vertical" />
                    <a>Delete</a>
                    <a-divider type="vertical" />
                    <a class="ant-dropdown-link">
                        More actions <a-icon type="down" />
                    </a>
                </span>
            </a-table>
        </div>
    </div>
</template>

<script>
const columns = [
    {
        dataIndex: "name",
        key: "name",
        slots: { title: "customTitle" },
        scopedSlots: { customRender: "name" },
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        scopedSlots: { customRender: "tags" },
    },
    {
        title: "Action",
        key: "action",
        scopedSlots: { customRender: "action" },
    },
];

const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];
export default {
    name: "userList",

    data() {
        return {
            fileList: [],
            visible: false,
            data,
            columns,
        };
    },
    methods: {
        afterVisibleChange(val) {
            console.log("visible", val);
        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
    },
};
</script>

<style scoped>
.app .head {
    padding-bottom: 24px;
}
</style>