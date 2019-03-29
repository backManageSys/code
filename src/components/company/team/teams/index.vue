<!--teams所有团队-->
<template>
    <div id="teams">
        <a-table :columns="columns" :dataSource="data" bordered>
            <a slot="action" slot-scope="text,record">
                <a-button type="primary" @click="edit(record)">修改</a-button>
                <a-button type="danger">删除</a-button>
            </a>
            <template slot="title" slot-scope="currentPageData">
                团队管理
            </template>
        </a-table>
        <a-modal title="提示" v-model="visible" :footer="null">
            <p>请输入团队验证码</p>
            <p>
                <a-form :form="form" @submit="handleSubmit">
                    <a-form-item>
                        <a-input v-decorator="['code',{rules: [{ required: true, message: '请输入团队验证码!' }], }]"/>
                    </a-form-item>
            <p style="text-align: right">
                <a-button type="primary" html-type="submit">确认</a-button>
                <a-button type="primary" @click="hideModal">取消</a-button>
            </p>
            </a-form>
            </p>
        </a-modal>
        <a-modal title="修改团队信息" v-model="visible1" :footer="null">
            <a-form :form="form1" @submit="editMessage">
            <a-row :gutter="16">
                <a-col :span="6" style="text-align: right">团队名</a-col>
                <a-col :span="18">
                        <a-form-item>
                            <a-input v-decorator="['name',{rules: [{ required: true, message: '请输入团队名!' }], }]"/>
                        </a-form-item>
                </a-col>
                <a-col :span="6" style="text-align: right">区域</a-col>
                <a-col :span="18">
                    <a-form-item>
                        <a-input v-decorator="['address',{rules: [{ required: true, message: '请输入区域!' }], }]"/>
                    </a-form-item>
                </a-col>
                <a-col :span="6" style="text-align: right">状态</a-col>
                <a-col :span="18">
                    <a-form-item>
                        <a-input v-decorator="['state',{rules: [{ required: true, message: '请输入状态!' }], }]"/>
                    </a-form-item>
                </a-col>
                <a-col :span="6" style="text-align: right">验证码</a-col>
                <a-col :span="18">
                    <a-form-item>
                        <a-input v-decorator="['teamCode',{rules: [{ required: true, message: '请输入验证码!' }], }]"/>
                    </a-form-item>
                </a-col>
            </a-row>
            </a-form>
            <p style="text-align: right">
                <a-button type="primary"  @click="editMessage">确认</a-button>
                <a-button type="primary" @click="hideModal1">取消</a-button>
            </p>
        </a-modal>
    </div>
</template>
<script>
    export default {
        name: 'teams',
        data() {
            return {
                visible: false,
                visible1: false,
                columns: [
                    {
                        title: '序号',
                        dataIndex: 'name',
                    },
                    {
                        title: '团队名',
                        dataIndex: 'teamName',
                    },
                    {
                        title: '区域',
                        dataIndex: 'name',
                    },
                    {
                        title: '状态',
                        dataIndex: 'name',
                    },
                    {
                        title: '主管id',
                        dataIndex: 'age',
                    },
                    {
                        title: '创建时间',
                        dataIndex: 'address',
                    },
                    {
                        title: '操作',
                        dataIndex: '',
                        scopedSlots: {customRender: 'action'}
                    },
                ],
                data: [
                    {
                        key: 1,
                        name: 'John Brown',
                        age: 32,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        key: 2,
                        name: 'Jim Green',
                        age: 42,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        key: 3,
                        name: 'Joe Black',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park'
                    },
                ],
                record: {}
            }
        },
        created() {
            this.form = this.$form.createForm(this, {
                onFieldsChange: (_, changedFields) => {
                    this.$emit('change', changedFields);
                },
                mapPropsToFields: () => {
                    return {
                        username: this.$form.createFormField({
                            value: this.code,
                        }),
                    };
                },
            });
            this.form1 = this.$form.createForm(this, {
                onFieldsChange: (_, changedFields) => {
                    this.$emit('change', changedFields);
                },
                mapPropsToFields: () => {
                    return {
                        username: this.$form.createFormField({
                            value: this.name,
                        }),
                    };
                },
            });
        },
        mounted() {

        },
        methods: {
            edit(record) {
                console.log(1, record);
                this.visible = true;
                this.record = record;
            },
            hideModal() {
                this.visible = false
            },
            hideModal1() {
                this.visible1 = false
            },
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        console.log(this.record);
                        this.visible = false;
                        this.visible1 = true;
                        this.form.setFieldsValue({code: ''});
                        // this.$store.commit('update', values);
                    }
                });
            },
            editMessage(e) {
                e.preventDefault();
                this.form1.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        console.log(this.record);
                        this.visible = false;
                        this.visible1 = true;
                        this.form1.setFieldsValue({name: 1111});
                        // this.$store.commit('update', values);
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

</style>
