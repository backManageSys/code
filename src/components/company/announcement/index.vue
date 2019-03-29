<!--checkAnnouncement查看公告-->
<template>
    <div id="announcement">
        <!--<a-layout>-->
        <!--<a-layout-header>最新公告</a-layout-header>-->
        <!--<a-layout-content>-->
        <!--<a-textarea placeholder="Basic usage" :rows="4" />-->
        <!--</a-layout-content>-->
        <!--</a-layout>-->
        <div>
            <a-row class="box">
                <a-col :span="12" :offset="6" class="content">
                    <div class="title">发布公告</div>
                    <div class="announcement">
                        <a-form
                            :form="form"
                            @submit="handleSubmit"
                        >
                            <a-form-item>
                                <a-textarea :rows="10"
                                            v-decorator="[ 'content',{rules: [{ required: true, message: '请输入公告内容!' }], }]"/>
                            </a-form-item>
                            <a-row>
                                <a-col :span="12" :offset="6" style="text-align: center">
                                    <a-button type="primary" html-type="submit">
                                        确认发布
                                    </a-button>
                                </a-col>
                            </a-row>
                        </a-form>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'announcement',
        data() {
            return {
                announcement: '测试中~~~~~'
            }
        },
        created() {
            this.form = this.$form.createForm(this, {
                onFieldsChange: (_, changedFields) => {
                    this.$emit('change', changedFields);
                },
                mapPropsToFields: () => {
                    return {
                        content: this.$form.createFormField({
                            value: this.content,
                        }),
                    };
                },
            });
        },
        mounted() {

        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
        },
        computed: {},
        beforeCreate() {

        },
        beforeMount() {

        },
        beforeUpdate() {

        },
        updated() {

        },
    }
</script>
<style scoped>
    .content {
        font-size: 18px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        color: #303133;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    }

    .title {
        text-align: center;
        height: 55px;
        line-height: 55px;
        border-bottom: 1px solid #ebeef5;
    }

    .announcement {
        height: 400px;
        padding: 20px;
    }

    .box {
        margin-top: 100px;
    }
</style>
