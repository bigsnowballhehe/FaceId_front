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
export default {
    name: "visualData",

    data() {
        let data = [];

        for (let i = 0; i <= 360; i++) {
            let t = (i / 180) * Math.PI;
            let r = Math.sin(2 * t) * Math.cos(2 * t);
            data.push([r, i]);
        }

        return {
            polar: {
                title: {
                    text: "极坐标双数值轴",
                },
                legend: {
                    data: ["line"],
                },
                polar: {
                    center: ["50%", "54%"],
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross",
                    },
                },
                angleAxis: {
                    type: "value",
                    startAngle: 0,
                },
                radiusAxis: {
                    min: 0,
                },
                series: [
                    {
                        coordinateSystem: "polar",
                        name: "line",
                        type: "line",
                        showSymbol: false,
                        data: data,
                    },
                ],
                animationDuration: 2000,
            },
        };
    },
};
</script>

<style scoped>
.echart {
    width: 80%;
    height: 80%;
}
.mainm {
    width: 1300px;
    height: 400px;
    display: flex;
    justify-content: center;
}
</style>