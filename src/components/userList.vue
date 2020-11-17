<template>
    <div class="app">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item>人员管理</a-breadcrumb-item>
            <a-breadcrumb-item>人员列表</a-breadcrumb-item>
        </a-breadcrumb>

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
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    list-type="picture"
                    :default-file-list="fileList"
                    class="upload-list-inline"
                >
                    <a-button> <a-icon type="upload" /> upload </a-button>
                </a-upload>
            </a-drawer>
        </div>
    </div>
</template>

<script>
export default {
    name: "userList",
    data() {
        return {
            fileList: [],
            visible: false,
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
</style>