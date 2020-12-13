<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
            <div class="logo">
                <div class="ative">
                    <span>人脸识别考勤记录</span>
                </div>
                <a
                    class="a-link"
                    href="https://cloud.baidu.com/"
                    target="view_window"
                    >特别感谢</a
                >
            </div>
        </a-layout-header>

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
                                >全职人员</router-link
                            >
                        </a-menu-item>
                        <a-menu-item key="2">
                            <router-link to="/index/userType"
                                >临时派遣</router-link
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
                <keep-alive>
                <router-view> </router-view>
                </keep-alive>
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

<style scoped lang="less">
.logo {
    display: flex;
    justify-content: space-between;
}

.ative {
    font-size: 2em;
    color: gray;
    
}

.a-link {
    color: gray;
    font-size: 1.2em;
    line-height: 32px;
    &:hover {
        color: white;
    }
}
</style>






 
