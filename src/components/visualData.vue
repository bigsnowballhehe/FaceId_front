<template>
  <div class="app">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>可视化记录</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="head" style="padding-bottom: 24px">
      <a-button type="primary">yubei</a-button>
    </div>
    <div class="mainm">
      <v-chart :options="polar" class="echart" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'visualData',

  data() {
    return {
      polar: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
          },
        ],
      },
    }
  },
  methods: {
    moment,
  },
  created() {
    let dat = moment().daysInMonth()
    console.log(dat)
  },
}
</script>

<style scoped>
.echart {
  width: 80%;
  height: 80%;
  padding-right: 200px;
}
.mainm {
  width: 1300px;
  height: 400px;
  display: flex;
  justify-content: center;
}
</style>