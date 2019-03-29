/*
* 模板描述：
* {
    path: '/company', 路由地址——唯一
    name: '/company', 路由名字——唯一
    redirect: '/company/announcement',路由重定向
    component:'',     对应当前路由应该显示的组件
    meta: {                     路由附加信息
        cname: '公司管理',      路由中文名——唯一，也是遍历Slider的文本
        icon:'bank',            一级菜单才会有的图标type值
        role: '公司管理'        路由身份——唯一，用来和身份库对比，以得出这个路由是否符合当前账号身份
    }
  }
* */
import layout from '../views/layout'
import HelloWorld from '../components/HelloWorld'

const requireAuth = true;
const routes = [
    {
        path: '/company',
        name: '/company',
        redirect: '/company/announcement',
        component: layout,
        meta: {cname: '公司管理', icon: 'bank', role: '公司管理'},
        children: [
            {
                path: 'announcement',
                name: 'announcement',
                component: ()=> import('@/components/company/announcement/index'),
                meta: {cname: '公告管理', role: '公告管理', requireAuth: requireAuth,},
            },
            {
                path: 'checkAnnouncement',
                name: 'checkAnnouncement',
                component: ()=> import('@/components/company/announcement/checkAnnouncement/index'),
                meta: {cname: '查看公告', role: '查看公告', requireAuth: requireAuth,},
            },
            {
                path: 'information',
                name: 'information',
                component: ()=> import('@/components/company/information/index'),
                meta: {cname: '数据管理', role: '数据管理', requireAuth: requireAuth,},
            },
            {
                path: 'team',
                name: 'team',
                component: ()=> import('@/components/company/team/index'),
                meta: {cname: '团队管理', role: '团队管理'},
                children: [
                    {
                        path: 'teams',
                        name: 'teams',
                        component: ()=> import('@/components/company/team/teams/index'),
                        meta: {cname: '所有团队', role: '所有团队', requireAuth: requireAuth,},
                    },
                    {
                        path: 'teamAdd',
                        name: 'teamAdd',
                        component: ()=> import('@/components/company/team/teamAdd/index'),
                        meta: {cname: '添加团队', role: '添加团队', requireAuth: requireAuth,},
                    }
                ]
            },
            {
                path: 'adminManage',
                name: 'adminManage',
                component: ()=> import('@/components/company/adminManage/index'),
                meta: {cname: '管理员管理', role: '管理员管理'},
                children: [
                    {
                        path: 'addAdmin',
                        name: 'addAdmin',
                        component: ()=> import('@/components/company/adminManage/addAdmin/index'),
                        meta: {cname: '添加管理员', role: '添加管理员', requireAuth: requireAuth,},
                    },
                    {
                        path: 'admins',
                        name: 'admins',
                        component: ()=> import('@/components/company/adminManage/admins/index'),
                        meta: {cname: '所有管理员', role: '所有管理员', requireAuth: requireAuth,},
                    }
                ]
            },
            {
                path: 'post',
                name: 'post',
                component: ()=> import('@/components/company/post/index'),
                meta: {cname: '岗位管理', role: '岗位管理'},
                children: [
                    {
                        path: 'postAdd',
                        name: 'postAdd',
                        component: ()=> import('@/components/company/post/postAdd/index'),
                        meta: {cname: '岗位添加', role: '岗位添加', requireAuth: requireAuth,},
                    },
                    {
                        path: 'allPost',
                        name: 'allPost',
                        component: ()=> import('@/components/company/post/allPost/index'),
                        meta: {cname: '所有岗位', role: '所有岗位', requireAuth: requireAuth,},
                    }
                ]
            },
            {
                path: 'privilege',
                name: 'privilege',
                component: ()=> import('@/components/company/privilege/index'),
                meta: {cname: '权限管理', role: '权限管理'},
                children: [
                    {
                        path: 'permission',
                        name: 'permission',
                        component: ()=> import('@/components/company/privilege/permission/index'),
                        meta: {cname: '分配权限', role: '分配权限', requireAuth: requireAuth,},
                    },
                    {
                        path: 'singlePermission',
                        name: 'singlePermission',
                        component: ()=> import('@/components/company/privilege/singlePermission/index'),
                        meta: {cname: '某个职位权限查询', role: '某个职位权限查询', requireAuth: requireAuth,},
                    },
                    {
                        path: 'allPermission',
                        name: 'allPermission',
                        component: ()=> import('@/components/company/privilege/allPermission/index'),
                        meta: {cname: '所有权限查询', role: '所有权限查询', requireAuth: requireAuth,},
                    }
                ]
            },
            {
                path: 'bankCard',
                name: 'bankCard',
                component: ()=> import('@/components/company/bankCard/index'),
                meta: {cname: '银行卡管理', role: '银行卡管理'},
                children: [
                    {
                        path: 'cardAdd',
                        name: 'cardAdd',
                        component: ()=> import('@/components/company/bankCard/cardAdd/index'),
                        meta: {cname: '公司添加银行卡', role: '公司添加银行卡', requireAuth: requireAuth,},
                    },
                    {
                        path: 'cards',
                        name: 'cards',
                        component: ()=> import('@/components/company/bankCard/cards/index'),
                        meta: {cname: '公司所有银行卡', role: '公司所有银行卡', requireAuth: requireAuth,},
                    },
                    {
                        path: 'personalCards',
                        name: 'personalCards',
                        component: ()=> import('@/components/company/bankCard/personalCards/index'),
                        meta: {cname: '所有个人银行卡', role: '所有个人银行卡', requireAuth: requireAuth,},
                    },
                ]
            },
            {
                path: 'riskControl',
                name: 'riskControl',
                component: ()=> import('@/components/company/riskControl/index'),
                meta: {cname: '风控管理', role: '风控管理', requireAuth: requireAuth,},
            },
            {
                path: 'settings',
                name: 'settings',
                component: ()=> import('@/components/company/settings/index'),
                meta: {cname: '系统设置', role: '系统设置', requireAuth: requireAuth,},
            },
            {
                path: 'operations',
                name: 'operations',
                component: ()=> import('@/components/company/operations/index'),
                meta: {cname: '运营管理', role: '运营管理'},
                children: [
                    {
                        path: 'addStair',
                        name: 'addStair',
                        component: ()=> import('@/components/company/operations/addStair/index'),
                        meta: {cname: '添加通道', role: '添加通道', requireAuth: requireAuth,},
                    },
                    {
                        path: 'editOperations',
                        name: 'editOperations',
                        component: ()=> import('@/components/company/operations/editOperations/index'),
                        meta: {cname: '修改通道', role: '修改通道', requireAuth: requireAuth,},
                    },
                    {
                        path: 'terminationOperations',
                        name: 'terminationOperations',
                        component: ()=> import('@/components/company/operations/terminationOperations/index'),
                        meta: {cname: '停用通道', role: '停用通道', requireAuth: requireAuth,},
                    }
                ]
            },
            {
                path: 'logDetails',
                name: 'logDetails',
                component: ()=> import('@/components/company/logDetails/index'),
                meta: {cname: '日志明细', role: '日志明细', requireAuth: requireAuth,},
            }
        ]
    },
    {
        path: '/user',
        name: '/user',
        redirect: '/user/agency',
        component: layout,
        meta: {cname: '用户中心', icon: 'user', role: '用户中心'},
        children: [
            {
                path: 'userInfo',
                name: 'userInfo',
                component: ()=> import('@/components/user/userInfo/index'),
                meta: {cname: '用户信息', role: '用户信息', requireAuth: requireAuth,},
            },
            {
                path: 'agency',
                name: 'agency',
                component: ()=> import('@/components/user/agency/index'),
                meta: {cname: '代理管理', role: '代理管理', requireAuth: requireAuth,},
                children: [
                    {
                        path: 'addAgency',
                        name: 'addAgency',
                        component: ()=> import('@/components/user/agency/addAgency/index'),
                        meta: {cname: '添加代理', role: '添加代理', requireAuth: requireAuth,},
                    },
                    {
                        path: 'agents',
                        name: 'agents',
                        component: ()=> import('@/components/user/agency/agents/index'),
                        meta: {cname: '所有代理', role: '所有代理', requireAuth: requireAuth,},
                    },
                    {
                        path: 'IAgent',
                        name: 'IAgent',
                        component: ()=> import('@/components/user/agency/IAgent/index'),
                        meta: {cname: '我是代理', role: '我是代理', requireAuth: requireAuth,},
                    }
                ]
            },
            {
                path: 'supplierManage',
                name: 'supplierManage',
                component: ()=> import('@/components/user/supplierManage/index'),
                meta: {cname: '供码用户管理', role: '供码用户管理'},
                children: [
                    {
                        path: 'addSupplier',
                        name: 'addSupplier',
                        component: ()=> import('@/components/user/supplierManage/addSupplier/index'),
                        meta: {cname: '添加供码用户', role: '添加供码用户', requireAuth: requireAuth,},
                    },
                    {
                        path: 'suppliers',
                        name: 'suppliers',
                        component: ()=> import('@/components/user/supplierManage/suppliers/index'),
                        meta: {cname: '所有供码用户', role: '所有供码用户', requireAuth: requireAuth,},
                    },
                    {
                        path: 'ISupplier',
                        name: 'ISupplier',
                        component: ()=> import('@/components/user/supplierManage/ISupplier/index'),
                        meta: {cname: '我是供码用户', role: '我是供码用户', requireAuth: requireAuth,},
                    }
                ]
            },
            {
                path: 'merchantManage',
                name: 'merchantManage',
                component: ()=> import('@/components/user/merchantManage/index'),
                meta: {cname: '商户管理', role: '商户管理'},
                children: [
                    {
                        path: 'addMerchant',
                        name: 'addMerchant',
                        component: ()=> import('@/components/user/merchantManage/addMerchant/index'),
                        meta: {cname: '添加商户', role: '添加商户', requireAuth: requireAuth,},
                    },
                    {
                        path: 'waitApprovalMer',
                        name: 'waitApprovalMer',
                        component: ()=> import('@/components/user/merchantManage/waitApprovalMer/index'),
                        meta: {cname: '审批商户', role: '审批商户', requireAuth: requireAuth,},
                    },
                    {
                        path: 'merchants',
                        name: 'merchants',
                        component: ()=> import('@/components/user/merchantManage/merchants/index'),
                        meta: {cname: '所有商户', role: '所有商户', requireAuth: requireAuth,},
                    },
                    {
                        path: 'IMerchant',
                        name: 'IMerchant',
                        component: ()=> import('@/components/user/merchantManage/IMerchant/index'),
                        meta: {cname: '我是商户', role: '我是商户', requireAuth: requireAuth,},
                    },
                    {
                        path: 'myMerchants',
                        name: 'myMerchants',
                        component: ()=> import('@/components/user/merchantManage/myMerchants/index'),
                        meta: {cname: '我的商户', role: '我的商户', requireAuth: requireAuth,},
                    }
                ]
            },
            {
                path: 'bankCardSetting',
                name: 'bankCardSetting',
                component: ()=> import('@/components/user/bankCardSetting/index'),
                meta: {cname: '银行卡设置', role: '银行卡设置'},
                children: [
                    {
                        path: 'addCardPersonal',
                        name: 'addCardPersonal',
                        component: ()=> import('@/components/user/bankCardSetting/addCardPersonal/index'),
                        meta: {cname: '个人添加银行卡', role: '个人添加银行卡', requireAuth: requireAuth,},
                    },
                    {
                        path: 'cardsPersonal',
                        name: 'cardsPersonal',
                        component: ()=> import('@/components/user/bankCardSetting/cardsPersonal/index'),
                        meta: {cname: '个人银行卡', role: '个人银行卡', requireAuth: requireAuth,},
                    },
                    {
                        path: 'personalExtractMoneyHistory',
                        name: 'personalExtractMoneyHistory',
                        component: ()=> import('@/components/user/bankCardSetting/personalExtractMoneyHistory/index'),
                        meta: {cname: '个人提现历史', role: '个人提现历史', requireAuth: requireAuth,},
                    },
                ]
            },
            {
                path: 'getQrCode',
                name: 'getQrCode',
                component: ()=> import('@/components/user/getQrCode/index'),
                meta: {cname: '获取二维码', role: '获取二维码', requireAuth: requireAuth,},
            }
        ]
    },
    {
        path: '/finance',
        name: '/finance',
        redirect: '/finance/receiveCodeList',
        component: layout,
        meta: {cname: '财务管理', icon: 'strikethrough', role: '财务管理'},
        children: [
            {
                path: 'withdrewWaiting',
                name: 'withdrewWaiting',
                component: ()=> import('@/components/finance/withdrewWaiting/index'),
                meta: {cname: '抢单', role: '抢单', requireAuth: requireAuth,},
            },
            {
                path: 'orderForms',
                name: 'orderForms',
                component: ()=> import('@/components/finance/orderForms/index'),
                meta: {cname: '处理订单', role: '处理订单', requireAuth: requireAuth,},
            },
            {
                path: 'extractMoneyHistory',
                name: 'extractMoneyHistory',
                component: ()=> import('@/components/finance/extractMoneyHistory/index'),
                meta: {cname: '提现历史', role: '提现历史', requireAuth: requireAuth,},
            },
            {
                path: 'c2p',
                name: 'c2p',
                component: ()=> import('@/components/finance/c2p/index'),
                meta: {cname: '添加内卡账变', role: '添加内卡账变', requireAuth: requireAuth,},
            }
        ]
    },
    {
        path: '/report',
        name: '/report',
        redirect: '/report/receiveCodeReport',
        component: layout,
        meta: {cname: '报表统计', icon: 'ordered-list', role: '报表统计'},
        children: [
            {
                path: 'receiveCodeReport',
                name: 'receiveCodeReport',
                component: ()=> import('@/components/report/receiveCodeReport/index'),
                meta: {cname: '收款码报表', role: '收款码报表', requireAuth: requireAuth,},
            },
            {
                path: 'merchantsReport',
                name: 'merchantsReport',
                component: ()=> import('@/components/report/merchantsReport/index'),
                meta: {cname: '商户报表', role: '商户报表', requireAuth: requireAuth,},
            },
            {
                path: 'localTeamReport',
                name: 'localTeamReport',
                component: ()=> import('@/components/report/localTeamReport/index'),
                meta: {cname: '供码用户报表', role: '供码用户报表', requireAuth: requireAuth,},
            },
            {
                path: 'fundReport',
                name: 'fundReport',
                component: ()=> import('@/components/report/fundReport/index'),
                meta: {cname: '资金报表', role: '资金报表', requireAuth: requireAuth,},
            },
            {
                path: 'agencyReport',
                name: 'agencyReport',
                component: ()=> import('@/components/report/agencyReport/index'),
                meta: {cname: '代理报表', role: '代理报表', requireAuth: requireAuth,},
            }
        ]
    },
    {
        path: '/order',
        name: '/order',
        redirect: '/order/orderDetails',
        component: layout,
        meta: {cname: '订单管理', icon: 'solution', role: '订单管理'},
        children: [
            {
                path: 'orderDetails',
                name: 'orderDetails',
                component: ()=> import('@/components/order/orderDetails/index'),
                meta: {cname: '订单明细', role: '订单明细', requireAuth: requireAuth,},
            },
            {
                path: 'codeChangeOrder',
                name: 'codeChangeOrder',
                component: ()=> import('@/components/order/codeChangeOrder/index'),
                meta: {cname: '内部码帐变订单', role: '内部码帐变订单', requireAuth: requireAuth,},
            },
            {
                path: 'cardChangeOrder',
                name: 'cardChangeOrder',
                component: ()=> import('@/components/order/cardChangeOrder/index'),
                meta: {cname: '内部卡帐变订单', role: '内部卡帐变订单', requireAuth: requireAuth,},
            },
        ]
    },
];
var permissions = ['公司管理','公告管理','风控管理','管理员管理','所有管理员','权限管理','所有权限查询','分配权限','用户中心','获取二维码','供码用户管理','添加供码用户','我是供码用户','银行卡设置','个人银行卡','个人提现历史'];

const tempObj = {
    filterPrivilege(routes,permissions) {
        // routes       全部路由
        // permissions  权限
        var target = []; // 过滤出的最终路由
        for (let i in routes) {
            // 查询当前路由是否有权限，
            if (permissions.includes(routes[i].meta.role)) {
                target[i] = routes[i];
                // 如果当前路由有children，则执行递归
                if (routes[i].children && routes[i].children.length >= 1) {
                    var obj = tempObj.filterPrivilege(routes[i].children,permissions);
                    // 将当前当前路由数组children中的空值删除，获取全新数组
                    obj = obj.filter(function (val) {
                        return Boolean(val)
                    });
                    target[i].children = obj
                }
            }
        }
        // 递归出口
        return target
    },
    routes:routes
};
// tempObj.routes = tempObj.filterPrivilege(routes,permissions);
export default tempObj


