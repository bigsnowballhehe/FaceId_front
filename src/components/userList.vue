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
                    action=""
                    list-type="picture"
                    :default-file-list="fileList"
                    class="upload-list-inline"
                >
                    <a-button style="margin-bottom: 20px">
                        <a-icon type="upload" /> 上传图片
                    </a-button>
                </a-upload>

                <a-form
                    :label-col="{ span: 5 }"
                    :wrapper-col="{ span: 12 }"
                    @submit="handleSubmit"
                    :form="form"
                >
                    <a-form-item label="ID:" style="margin-top: 10px">
                        <a-input
                            v-decorator="[
                                '人员ID',
                                {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入用户ID!',
                                        },
                                    ],
                                },
                            ]"
                        />
                    </a-form-item>

                    <a-form-item label="类型">
                        <a-select
                            v-decorator="[
                                '人员类型',
                                {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入人员类型!',
                                        },
                                    ],
                                },
                            ]"
                        >
                            <a-select-option value="员工">
                                员工
                            </a-select-option>
                            <a-select-option value="兼职">
                                兼职
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="备注">
                        <a-input placeholder=".." />
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                        <a-button type="primary" html-type="submit">
                            Submit
                        </a-button>
                    </a-form-item>
                </a-form>
            </a-drawer>
        </div>

        <div class="tablem">
            <a-table :columns="columns" :data-source="data">
                <span slot="customTitle"><a-icon type="smile-o" /> Name</span>

                <a slot="name" slot-scope="text, record"
                    >{{ text }} {{ record.name }}</a
                >

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
// columns 格式  dataIndex作为data获取的索引   key是关键字。   slots 是暴露出的插槽  text 第一行胡数据？？ record是当前行所有数据 text是当前行值
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
];
export default {
    name: "userList",

    data() {
        return {
            fileList: [],
            formLayout: "horizontal",
            visible: false,
            data,
            columns,
            form: this.$form.createForm(this, { name: "coordinated" }),
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
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values);
                }
            });
        },
    },
};
</script>

<style scoped>
.app .head {
    padding-bottom: 24px;
}
</style>