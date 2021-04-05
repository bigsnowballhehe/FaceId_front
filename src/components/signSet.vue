<template>
  <div class="app">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>考勤管理</a-breadcrumb-item>
      <a-breadcrumb-item>考勤设置</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="head" style="padding-bottom: 24px">
      <a-modal v-model="modalVis" :footer="null" :closable="false" width="100%">
        <div class="chartCon">
          <v-chart :options="late" class="chart1"></v-chart>
          <v-chart :options="name" class="chart"></v-chart>
        </div>
      </a-modal>
      <a-space direction="vertical"
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
      </a-space>
      <div class="exportExcel">
        <a-button type="primary" @click="exportExcel" :loading="exLoading"
          >导出Excel</a-button
        >
        <a-button type="primary" v-on:click="getChart">查看图表</a-button>
      </div>
    </div>
    <div class="mainm">
      <a-table :columns="columns" :data-source="data"> </a-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import timeFormat from '@/utils/formatTime'
import enudays from '@/utils/enudays'
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
    scopedSlots: { customRender: 'time' },
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
      dataNameL: [],
      checkChartFalse: false,
      dataMonDay: [],
      chartDate: null,

      late: {
        grid: {
          containlabel: true,
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0,
          },
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [],
            type: 'bar',
          },
        ],
      },
      name: {
        grid: {
          containlabel: true,
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0,
          },
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [],
            type: 'bar',
          },
        ],
      },
      modalVis: false,
      columns,
      data: null,
      checkDate: null,
      checkTime: moment('08:00:00', 'HH:mm:ss'),
      filterHour: null,
      filterMin: null,
      exLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx',
    }
  },
  methods: {
    timeFormat,
    getChart() {
      if (this.checkChartFalse == false) {
        this.dataMonDay.forEach((datt) => {
          this.chartDate.forEach((dat) => {
            if (dat.mon == datt) {
              dat.value += 1
            }
          })
        })

        this.chartDate.forEach((dat) => {
          this.late.xAxis.data.push(dat.mon)
          this.late.series[0].data.push(dat.value)
        })

        let tmp = {}
        this.dataNameL.forEach((dat) => {
          tmp[dat] = (tmp[dat] || 0) + 1
        })
        for (let i in tmp) {
          this.name.xAxis.data.push(i)
          this.name.series[0].data.push(tmp[i])
        }
        this.checkChartFalse = true
      }

      //console.log(this.late.xAxis.data)

      this.modalVis = true
    },
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
        this.chartDate = []
        this.filterHour = this.checkTime.get('hours')
        this.filterMin = this.checkTime.get('minute')
        let fir = this.checkDate[0].unix().toString()
        let sec = this.checkDate[1].unix().toString()
        let allDate = enudays(this.checkDate[0], this.checkDate[1])
        allDate.forEach((dat) => {
          this.chartDate.push({
            mon: dat.get('month') + 1 + '_' + dat.get('date'),
            value: 0,
          })
        })
        // console.log(this.chartDate)
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
            //dat.time = timeFormat(dat.time)
            return dat
          }
          if (fil == this.filterHour) {
            if (fil1 > this.filterMin) {
              //dat.time = timeFormat(dat.time)
              return dat
            }
          }
        })
        this.dataMonDay = []
        this.dataNameL = []
        this.data.forEach((dat) => {
          // 存着数据一共有的日期
          this.dataMonDay.push(
            moment.unix(dat.time).get('month') +
              1 +
              '_' +
              moment.unix(dat.time).get('date')
          )
          this.dataNameL.push(dat.name)
        })
        console.log(this.dataNameL)

        this.data.forEach((dat) => {
          dat.time = timeFormat(dat.time)
        })
      }
    },
  },
}
</script>

<style scoped>
/* .chartCon {
 
} */
.exportExcel {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.head {
  display: flex;
  justify-content: space-between;
}
.chart {
  height: 300px;
  width: 1000px;
}
.chart1 {
  height: 300px;
  width: 1200px;
}
</style>