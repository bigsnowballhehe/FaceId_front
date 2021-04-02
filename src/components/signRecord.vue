<template>
  <div class="app">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>考勤管理</a-breadcrumb-item>
      <a-breadcrumb-item>考勤记录</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="head" style="padding-bottom: 24px">
      <div class="idCheck">
        <a-input
          v-model="param.id"
          placeholder="按ID查询"
          width="50%"
        ></a-input>
        <a-input
          v-model="param.name"
          placeholder="按姓名查询"
          width="50%"
        ></a-input>

        <a-button type="primary" @click="addCheck">查询</a-button>
      </div>
    </div>
    <div class="mainm">
      <a-table :columns="columns" :data-source="data"></a-table>
    </div>
  </div>
</template>

<script>
import timeFormat from '@/utils/formatTime'
import axios from 'axios'
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '组别',
    dataIndex: 'group_id',
    key: 'group_id',
  },
]
export default {
  name: 'signRecord',
  data() {
    return {
      data: [],
      columns,
      param: {
        name: null,
        id: null,
      },
    }
  },
  methods: {
    addCheck() {
      this.getData()
    },
    async getData() {
      let data = await axios.post('http://localhost:3000/get-check', {
        data: this.param,
      })

      //console.log(data.data)
      this.data = data.data
      this.data.forEach((dat) => {
        dat.key = dat._id
        dat.time = timeFormat(dat.time)
      })
    },
  },
  created() {
    this.getData()
  },
}
</script>

<style scoped>
.idCheck {
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
}
</style>