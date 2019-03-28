<!--checkAnnouncement查看公告-->
<template>
    <div id="checkAnnouncement">
        <!--<a-layout>-->
        <!--<a-layout-header>最新公告</a-layout-header>-->
        <!--<a-layout-content>-->
        <!--<a-textarea placeholder="Basic usage" :rows="4" />-->
        <!--</a-layout-content>-->
        <!--</a-layout>-->
        <div>
            <a-row class="box">
                <a-col :span="12" :offset="6" class="content">
                    <div class="title">最新公告</div>
                    <div class="outer">
                        <div class="announcement">
                            <a-list
                                class="demo-loadmore-list"
                                itemLayout="horizontal"
                                :dataSource="listData"
                            >
                                <a-list-item slot="renderItem" slot-scope="item, index" @click="show(item, index)">

                                    <a-list-item-meta :description="item.content" class="announcementContent">
                                        <a slot="title">{{item.title}}</a>
                                    </a-list-item-meta>
                                    <span slot="actions" v-if="item.state === 1">
                                    <span style="font-size: 12px">已阅读</span>
                                </span>
                                    <span slot="actions" v-if="item.state === 0">
                                    <span style="font-size: 12px;color: #353AC6;">未阅读</span>
                                </span>
                                </a-list-item>
                            </a-list>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>


</template>
<script>
    export default {
        name: 'checkAnnouncement',
        data() {
            return {
                listData: [
                    {
                        title: '标题1',
                        content: '测试111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
                        state: 1
                    },
                    {
                        title: '标题2',
                        content: '测试2',
                        state: 0
                    },
                    {
                        title: '标题3',
                        content: '测试3',
                        state: 1
                    },
                    {
                        title: '标题4',
                        content: '测试4',
                        state: 0
                    },
                    {
                        title: '标题5',
                        content: '测试111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
                        state: 1
                    },
                    {
                        title: '标题6',
                        content: '测试6',
                        state: 0
                    },
                    {
                        title: '标题7',
                        content: '测试7',
                        state: 1
                    },
                    {
                        title: '标题8',
                        content: '测试8',
                        state: 0
                    },
                    {
                        title: '标题9',
                        content: '测试111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
                        state: 1
                    },
                    {
                        title: '标题10',
                        content: '测试10',
                        state: 0
                    },
                ],
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            show(item, index) {
                this.listData[index].state = 1;
                const h = this.$createElement;
                this.$info({
                    title: item.title,
                    content: h('div', {}, [
                        h('p', item.content),
                    ]),
                    onOk() {
                        console.log(111);
                    },
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

    .outer {
        height: 400px;
        position: relative;
        overflow: hidden;
    }

    .announcement {
        padding: 20px;
        position: absolute;
        left: 0;
        top: 0;
        right: -17px;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .box {
        margin-top: 100px;
    }

    .ant-list-item-meta-description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 250px;
    }
</style>
