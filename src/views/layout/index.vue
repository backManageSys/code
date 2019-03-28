<!--项目主组件，包含了页头和左侧导航菜单，以及路由出口  也就是主内容区-->

<template>
    <div id="layout">
        <template>
            <a-layout id="components-layout-demo-side" style="min-height: 100vh">
                <!--左侧选项菜单-->
                <a-layout-sider collapsible v-model="collapsed">
                    <!---->
                    <div class="logo"/>
                    <a-menu @click="handleClick"
                            theme="dark"
                            :defaultSelectedKeys="currentSelectedKeys"
                            :defaultOpenKeys="currentOpenKeys"
                            :selectedKeys="currentSelectedKeys"
                            :openKeys.sync="currentOpenKeys"
                            mode="inline"
                    >
                        <!--在此处遍历a-sub-menu-->
                        <a-sub-menu v-for="par in list" :key="par.name" v-if="par.meta.cname!='empty'">
                            <!--一级菜单的图标和内容-->
                            <span slot="title" v-if="par.meta.icon">
                                <a-icon :type="par.meta.icon"/>
                                <span>{{par.meta.cname}}</span>
                            </span>
                            <!--二级菜单-->
                            <template v-for="son in par.children">
                                <!--三级菜单——如果当前二级菜单有children则说明这个二级菜单有三级菜单-->
                                <a-sub-menu v-if="son.children" :key="son.name">
                                    <span slot="title">{{son.meta.cname}}</span>
                                    <a-menu-item v-for="item in son.children" :key="item.name">
                                        <!--mySelectedKeys点击标签页时需要用来更新——当前选中的Slider项-->
                                        <!--myOpenKeys点击标签页时需要用来更新——当前展开的Slider选项组,myOpenKeys:par.name+','+son.name-->
                                        <router-link
                                            :to="{path:`${par.path}/${son.path}/${item.path}`,query:{mySelect:`${item.name}-${par.name}+${son.name}`}}">
                                            {{item.meta.cname}}
                                        </router-link>
                                    </a-menu-item>
                                </a-sub-menu>
                                <!--没有children则直接显示为a-menu-item项-->
                                <a-menu-item v-else="" :key="son.name">
                                    <!--mySelectedKeys点击标签页时需要用来更新——当前选中的Slider项-->
                                    <!--myOpenKeys点击标签页时需要用来更新——当前展开的Slider选项组,myOpenKeys:-->
                                    <router-link
                                        :to="{path:`${par.path}/${son.path}`,query: {mySelect:`${son.name}-${par.name}`}}">
                                        {{son.meta.cname}}
                                    </router-link>
                                </a-menu-item>
                            </template>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
                <!--右侧主要内容-->
                <a-layout>
                    <!--主体部分——包含页头和内容显示区-->
                    <a-layout-header style="background-color: #fff;text-align: right">
                        <div @mouseleave="changeHide">
                            <a-avatar @mouseenter="changeShow"
                                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            <div v-if="showState"
                                 style="background: #fff; z-index: 9999;position: absolute;right: 20px;height: 35px; line-height: 35px;width: 85px;text-align: center;margin-top: 5px;border: 1px solid #9999;border-radius: 5px;">
                                <router-link to="/login">
                                    <a-icon type="poweroff"/>
                                    <span>退出登录</span>
                                </router-link>
                            </div>
                        </div>
                    </a-layout-header>
                    <a-layout-content style="margin:16px;background-color: #fff;">
                        <!--页部header-->
                        <template>
                            <div class="tabs">
                                <a-tabs
                                    hideAdd
                                    v-model="activeKey"
                                    type="editable-card"
                                    @edit="onEdit"
                                    @tabClick="tabClick"
                                >
                                    <a-tab-pane
                                        v-for="pane in panes"
                                        :key="pane.key"
                                    >
                                        <span slot="tab">
                                            <router-link :to="pane.path">{{pane.title}}</router-link>
                                        </span>
                                    </a-tab-pane>
                                </a-tabs>
                            </div>
                        </template>
                        <!--面包屑导航-->
                        <!--<a-breadcrumb style="margin: 16px 0">-->
                        <!--<a-breadcrumb-item>User</a-breadcrumb-item>-->
                        <!--<a-breadcrumb-item>Bill</a-breadcrumb-item>-->
                        <!--</a-breadcrumb>-->
                        <!--主体内容-->
                        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                            <div>
                                <transition name="fade-transform" mode="out-in">
                                    <router-view/>
                                </transition>
                            </div>
                        </div>
                    </a-layout-content>
                </a-layout>
            </a-layout>
        </template>
    </div>
</template>

<script>
    import list from '../../router/routes'

    export default {
        name: 'layout',
        data() {
            return {
                collapsed: false,
                list: list,
                activeKey: '',
                newTabIndex: 0,
                panes: [],//标签页数组
                currentOpenKeys: [],
                currentSelectedKeys: [],
                showState: false
            }
        },
        methods: {
            //点击侧边栏的每个item执行 —— 添加 一个标签页
            handleClick(e) {
                // 新建一个标签按钮
                let openKeysStr = '';
                let openKeys = '';
                let selectedKeys = '';
                if (this.$route.query.mySelect) {
                    openKeysStr = this.$route.query.mySelect.substr(this.$route.query.mySelect.indexOf('-') + 1);
                    openKeys = [];
                    /*判断“当前需要被展开的数组值是一个还是两个”。有加号则代表是两个*/
                    openKeysStr.indexOf('+') >= 0 ? openKeys = openKeysStr.split('+') : openKeys.push(openKeysStr);
                    selectedKeys = [];
                    selectedKeys.push(this.$route.query.mySelect.substr(0, this.$route.query.mySelect.indexOf('-')));
                    this.currentOpenKeys = openKeys;
                    this.currentSelectedKeys = selectedKeys;
                }

                let tab = {
                    title: this.$route.meta.cname,
                    path: this.$route.path,
                    key: this.$route.path,
                    openKeys: openKeys || [],
                    selectedKeys: selectedKeys || [],
                };
                // 更新当前应该被选中的标签
                this.activeKey = tab.path;
                //如果已经存在这个tab标签页。则不再重复添加，否则添加
                if (this.panes.every(function (val) {
                    let flag = val.key != tab.key && val.path != tab.path && val.title != tab.title;
                    return flag
                })) {
                    this.panes.push(tab);
                }
            },
            callback(key) {
                // console.log(key,'key')
            },
            changeShow() {
                this.showState = true;
            },
            changeHide() {
                this.showState = false;
            },
            tabClick(a) {
                let temp = this.panes.find(function (val) {
                    return val.key == a
                });
                this.currentOpenKeys = [...temp.openKeys];
                this.currentSelectedKeys = [...temp.selectedKeys];
            },
            // 监听标签页被删除和添加时的执行事件
            onEdit(targetKey, action) {
                // targetKey 被点击的标签页的key
                // action 值只有remove和add
                this[action](targetKey)
            },
            // 删除标签页执行，targetkey是被点击删除的那个标签页的key
            remove(targetKey) {
                // 如果只有一条了，则禁止删除
                if (this.panes.length === 1) {
                    this.$message.warn('只有最后一个了,请手下留情~~', 1);
                    return false
                }
                // 删除被点击的标签页，
                let newPanes = this.panes.filter(function (val) {
                    return val.key !== targetKey;
                });
                //更新标签页数组
                this.panes = newPanes;
            },
            // 内置的添加标签页方法。目前没用到。——现在使用的是methods中的handleClick
            add(targetKey) {

            },
        },
        // 页面加载时先添加一个tab标签
        created() {
            this.handleClick();
        }
    }
</script>

<style>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .tabs a {
        text-decoration: none;
    }

    /*标签页的背景颜色*/
    .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
        background-color: #dadada;
    }

    /*当前被选中标签页的背景颜色*/
    .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
        background-color: #fff;
    }
</style>
