<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header"> </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu
                    mode="inline"
                    :default-selected-keys="['smile']"
                    :default-open-keys="['']"
                    :style="{ height: '100%', borderRight: 0 }"
                >
                    <a-menu-item key="smile">
                        <a-icon type="smile" />
                        首页
                        <router-link to="/index/intro"></router-link>
                    </a-menu-item>
                    <a-sub-menu key="sub1">
                        <span slot="title"
                            ><a-icon type="user" />{{ user }}</span
                        >

                        <a-menu-item key="1"
                            ><router-link to="/index/userList"
                                >人员列表</router-link
                            >
                        </a-menu-item>
                        <a-menu-item key="2">
                            <router-link to="/index/userType"
                                >人员类型</router-link
                            ></a-menu-item
                        >
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"
                            ><a-icon type="laptop" />{{ sign }}</span
                        >
                        <a-menu-item key="5"
                            ><router-link to="/index/signRecord">
                                考勤记录</router-link
                            >
                        </a-menu-item>
                        <a-menu-item key="6">
                            <router-link to="/index/signSet"
                                >考勤设置</router-link
                            >
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="sub3">
                        <a-icon type="notification" />
                        {{ view }}
                        <router-link to="/index/visualData"></router-link>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <router-view> </router-view>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
export default {
    data() {
        return {
            user: "人员管理",
            sign: "考勤管理",
            view: "可视化记录",

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






 



