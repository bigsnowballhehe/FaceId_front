<template>
  <div class="app">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>人员管理</a-breadcrumb-item>
      <a-breadcrumb-item>人员列表</a-breadcrumb-item>
    </a-breadcrumb>
    <!--顶部区域-->
    <div class="head"></div>

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
          <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
// columns 格式  dataIndex作为data获取的索引   key是关键字。   slots 是暴露出的插槽  text 第一行胡数据？？ record是当前行所有数据 text是当前行值 slot应该是key
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
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
    async ge() {
      let ret = axios.get("http://localhost:3000/list?info=part_time");
      let ss = await ret;
      this.data = ss.data;
      for (let val of this.data) {
        val["key"] = val["_id"];
      }

      // console.log(this.data);
    },
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