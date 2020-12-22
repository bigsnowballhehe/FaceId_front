<template>
    <div class="app">
        <!-- <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>首页</a-breadcrumb-item>
        </a-breadcrumb> -->
        <div class="wecl">
            <!-- <img src="../assets/wecl.jpg" alt="欢迎" /> -->
           <h1>考勤记录系统</h1>
           <div class="intro">
               <span>本系统是基于百度人脸识别API的考勤记录系统，可以查看关于在注册人员的考勤记录，以及更直观的可视化界面</span>
               <h2>功能完成</h2>
               <ul>
                   <li></li>
                   <li></li>
                   <li></li>
               </ul>
               <h2>技术栈</h2>
               <ul>
                   <li>Vue</li>
                   <li>Node</li>
                   <li>Mongoose</li>
               </ul>
               <h2>技术官网</h2>

               <ul>
                   <li></li>
                   <li></li>
                   <li></li>
               </ul>
           </div>
        </div>
        
    </div>
</template>

<script>
</script>

<style scoped lang="less">
.wecl{
    // text-align: center;
    border-top:1px solid gray;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    
}
.wecl  h1{
    font-weight: 500;
    font-size:30px;
    line-height:38px;
    color:#0d1a26;
    margin-top:10px;
    margin-bottom: 20px;
    align-self: center;
}
.app{
    height: 600px;
}
.wecl .intro{
    align-self: center;
}
</style>