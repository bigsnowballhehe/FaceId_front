<template>
  <div class="app">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>考勤管理</a-breadcrumb-item>
      <a-breadcrumb-item>考勤设置</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="head" style="padding-bottom: 24px">
      <a-space
        ><a-range-picker
          v-model="checkDate"
          :ranges="{
            Today: [moment(), moment()],
            'Last Month': [
              moment()
                .month(moment().month() - 1)
                .startOf('month'),
              moment()
                .month(moment().month() - 1)
                .endOf('month'),
            ],
          }"
        >
        </a-range-picker>
        <a-time-picker
          v-model="checkTime"
          :default-value="moment('09:00:00', 'HH:mm:ss')"
        ></a-time-picker>
        <a-button type="primary" @click="postDate">查询</a-button>
        <a-button type="primary" @click="exportExcel" :loading="exLoading"
          >导出Excel</a-button
        >
      </a-space>
    </div>
    <div class="mainm">
      <a-table :columns="columns" :data-source="data"></a-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import timeFormat from '@/utils/formatTime'
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
// 设置考勤时间，然后筛选出迟到的完成数据的导出。
import moment from 'moment'
export default {
  name: 'signSet',
  data() {
    return {
      columns,
      data: null,
      checkDate: null,
      checkTime: moment('09:00:00', 'HH:mm:ss'),
      filterHour: null,
      filterMin: null,
      exLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx',
    }
  },
  methods: {
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          return v[j]
        })
      )
    },
    exportExcel() {
      this.exLoading = true
      import('@/utils/Export2Excel').then((excel) => {
        const tHeader = ['id', 'name', 'time', 'group_id']

        const filterVal = ['id', 'name', 'time', 'group_id']
        const data = this.data
        const list = this.formatJson(filterVal, data)
        excel.export_json_to_excel({
          header: tHeader,
          data: list,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType,
        })
        this.exLoading = false
      })
    },
    moment,
    async postDate() {
      if (this.checkDate == null || this.checkTime == null) {
        this.$message.error('请选择日期时间,不可为空')
      } else {
        //console.log(this.checkDate[0].unix())
        this.filterHour = this.checkTime.get('hours')
        this.filterMin = this.checkTime.get('minute')
        let fir = this.checkDate[0].unix().toString()
        let sec = this.checkDate[1].unix().toString()
        let param = {
          time: {
            $gt: fir,
            $lt: sec,
          },
        }
        let data = await axios.post('http://localhost:3000/get-check', {
          data: param,
        })

        this.data = data.data
        this.data = this.data.filter((dat) => {
          dat.key = dat._id
          let fil = moment.unix(dat.time).get('hour')
          let fil1 = moment.unix(dat.time).get('minute')
          if (fil > this.filterHour) {
            dat.time = timeFormat(dat.time)
            return dat
          }
          if (fil == this.filterHour) {
            if (fil1 > this.filterMin) {
              dat.time = timeFormat(dat.time)
              return dat
            }
          }
        })
      }
    },
  },
}
</script>

<style scoped>
</style>