<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
            <div class="logo">
                <img src="" alt="logo" />
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu
                    mode="inline"
                    :default-selected-keys="['1']"
                    :default-open-keys="['sub1']"
                    :style="{ height: '100%', borderRight: 0 }"
                >
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="user" />人员管理</span>
                        <a-menu-item key="1"> 人员列表 </a-menu-item>
                        <a-menu-item key="2"> 人员类型</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"
                            ><a-icon type="laptop" />考勤管理</span
                        >
                        <a-menu-item key="5"> 考勤记录 </a-menu-item>
                        <a-menu-item key="6"> 考勤设置 </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="sub3">
                        <a-icon type="notification" />
                        可视化记录
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content
                    :style="{
                        background: '#fff',
                        padding: '24px',
                        margin: 0,
                        minHeight: '280px',
                    }"
                >
                    Content
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
export default {
    data() {
        return {
            collapsed: false,
        };
    },
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
    width: 240px;
    height: 62px;
    background: rgba(255, 255, 255, 0.2);
    float: left;
}
</style>
