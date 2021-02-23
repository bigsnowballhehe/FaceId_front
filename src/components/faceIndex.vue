 <template>
    <div>
        <!-- 人脸识别 -->
        <a-modal
            :visible.sync="openFaceView"
            width="581px"
            :show-close="false"
            v-loading="faceloading"
        >
            <div class="ovf" style="padding: 20px">
                <div>
                    <a-button size="small" type="primary" @click="checkFace"
                        >点击进行人脸识别</a-button
                    >
                    <div slot="tip" class="a-upload__tip">
                        此功能需到非IE浏览器进行
                    </div>
                </div>
                <div class="dialog-footer">
                    <a-button @click="openFaceView = false">取 消</a-button>
                    <a-button type="primary" @click="postFace()"
                        >确 定</a-button
                    >
                </div>
            </div>
        </a-modal>
        <a-modal
            :visible.sync="checkFaceView"
            width="581px"
            :show-close="false"
        >
            <faceContent :faceView="checkFaceView"></faceContent>
        </a-modal>
    </div>
</template>
<script>
import faceContent from './faceContent' // 引入人脸识别组件
export default {
    name: 'faceIndex',
    data() {
        return {
            openFaceView: true,
            faceloading: false,
            checkFaceView: null,

            fileList: [],
            face: '',
        }
    },
    components: {
        faceContent,
    },

    methods: {
        // 弹出人脸识别框
        checkFace() {
            this.checkFaceView = true
        },
        // 限制上传照片
        handleExceed() {
            this.$message.warning({
                message: '不要重复上传！',
                offset: 380,
                duration: 1000,
            })
        },
        // 移除人像图片
        beforeRemove(file) {
            return this.$confirm(`确定移除 ${file.name}？`)
        },
        // 上传的文件
        handleChange(file) {
            this.face = file.raw
        },
        // 获取截取图片
        // getImgFile(d) {
        //     this.face = d
        //     this.checkFaceView = false
        // },
        // 人脸识别完毕
        postFace() {
            this.faceloading = true
            this.checkFaceView = false
            let formData = new FormData()
            formData.append('face', this.face)
            /*人脸识别接口，把获取到的照片传到后台，我这里使用了封装axios。需要注意使用   config.headers = {'Content-Type':'multipart/form-data'} 传照片
             */
            // verifyFace(formData, { isUpload: true })
            //     .then((res) => {
            //         console.log(res)
            //         if (res.code == 0) {
            //             this.faceloading = false
            //             this.$message.success({
            //                 message: '人脸识别成功！',
            //                 offset: 380,
            //                 duration: 1000,
            //             })
            //         } else {
            //             this.$message.error({
            //                 message: '人脸识别失败！',
            //                 offset: 380,
            //                 duration: 1000,
            //             })
            //             this.faceloading = false
            //         }
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })
        },
    },
    created() {},
}
</script>