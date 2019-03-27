
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
const routes = [
    {
        path: '/company',
        name: '/company',
        redirect: '/company/announcement',
        component:layout,
        meta: {cname: '公司管理',icon:'bank', role: '公司管理'},
        children: [
            {
                path: 'announcement',
                name :'announcement',
                component:HelloWorld,
                meta: {cname: '公告管理', role: '公告管理'},
            },
            {
                path: 'team',
                name: 'team',
                component:HelloWorld,
                meta: {cname: '团队管理', role: '团队管理'},
                children: [
                    {
                        path: 'teams',
                        name : 'teams',
                        component:HelloWorld,
                        meta: {cname: '所有团队', role: '所有团队'},
                    },
                    {
                        path: 'teamAdd',
                        name : 'teamAdd',
                        component:HelloWorld,
                        meta: {cname: '添加团队', role: '添加团队'},
                    }
                ]
            },
            {
                path: 'adminManage',
                name:'adminManage',
                component:HelloWorld,
                meta: {cname: '管理员管理', role: '管理员管理'},
                children: [
                    {
                        path: 'addAdmin',
                        name:'addAdmin',
                        component:HelloWorld,
                        meta: {cname: '添加管理员', role: '添加管理员'},
                    },
                    {
                        path: 'admins',
                        name:'admins',
                        component:HelloWorld,
                        meta: {cname: '所有管理员', role: '所有管理员'},
                    }
                ]
            },
            {
                path: 'post',
                name:'post',
                component:HelloWorld,
                meta: {cname: '岗位管理', role: '岗位管理'},
                children: [
                    {
                        path: 'postAdd',
                        name:'postAdd',
                        component:HelloWorld,
                        meta: {cname: '岗位添加', role: '岗位添加'},
                    },
                    {
                        path: 'allPost',
                        name:'allPost',
                        component:HelloWorld,
                        meta: {cname: '所有岗位', role: '所有岗位'},
                    }
                ]
            },
            {
                path: 'privilege',
                name:'privilege',
                component:HelloWorld,
                meta: {cname: '权限管理', role: '权限管理'},
                children: [
                    {
                        path: 'permission',
                        name:'permission',
                        component:HelloWorld,
                        meta: {cname: '分配权限', role: '分配权限'},
                    },
                    {
                        path: 'singlePermission',
                        name:'singlePermission',
                        component:HelloWorld,
                        meta: {cname: '某个职位权限查询', role: '某个职位权限查询'},
                    },
                    {
                        path: 'allPermission',
                        name:'allPermission',
                        component:HelloWorld,
                        meta: {cname: '所有权限查询', role: '所有权限查询'},
                    }
                ]
            },
            {
                path: 'bankCard',
                name:'bankCard',
                component:HelloWorld,
                meta: {cname: '银行卡管理', role: '银行卡管理'},
                children: [
                    {
                        path: 'cardAdd',
                        name:'cardAdd',
                        component:HelloWorld,
                        meta: {cname: '公司所有银行卡', role: '公司所有银行卡'},
                    },
                    {
                        path: 'cards',
                        name:'cards',
                        component:HelloWorld,
                        meta: {cname: '公司添加银行卡', role: '公司添加银行卡'},
                    },
                    {
                        path: 'personalCards',
                        name:'personalCards',
                        component:HelloWorld,
                        meta: {cname: '所有个人银行卡', role: '所有个人银行卡'},
                    },
                ]
            },
            {
                path: 'riskControl',
                name:'riskControl',
                component:HelloWorld,
                meta: {cname: '风控管理', role: '风控管理'},
            },
            {
                path: 'settings',
                name:'settings',
                component:HelloWorld,
                meta: {cname: '系统设置', role: '系统设置'},
            },
            {
                path: 'operations',
                name:'operations',
                component:HelloWorld,
                meta: {cname: '运营管理', role: '运营管理'},
                children: [
                    {
                        path: 'addStair',
                        name:'addStair',
                        component:HelloWorld,
                        meta: {cname: '添加通道', role: '添加通道'},
                    },
                    {
                        path: 'editOperations',
                        name:'editOperations',
                        component:HelloWorld,
                        meta: {cname: '修改通道', role: '修改通道'},
                    },
                    {
                        path: 'terminationOperations',
                        name:'terminationOperations',
                        component:HelloWorld,
                        meta: {cname: '停用通道', role: '停用通道'},
                    }
                ]
            },
            {
                path: 'logDetails',
                name:'logDetails',
                component:HelloWorld,
                meta: {cname: '日志明细', role: '日志明细'},
            }
        ]
    },
    {
        path: '/user',
        name:'/user',
        redirect: '/user/agency',
        component:layout,
        meta: {cname: '用户中心',icon:'user', role: '用户中心'},
        children: [
            {
                path: 'userInfo',
                name:'userInfo',
                component:HelloWorld,
                meta: {cname: '用户信息', role: '用户信息'},
            },
            {
                path: 'agency',
                name:'agency',
                component:HelloWorld,
                meta: {cname: '代理管理', role: '代理管理'},
                children: [
                    {
                        path: 'addAgency',
                        name:'addAgency',
                        component:HelloWorld,
                        meta: {cname: '添加代理', role: '添加代理'},
                    },
                    {
                        path: 'agents',
                        name:'agents',
                        component:HelloWorld,
                        meta: {cname: '所有代理', role: '所有代理'},
                    },
                    {
                        path: 'IAgent',
                        name:'IAgent',
                        component:HelloWorld,
                        meta: {cname: '我是代理', role: '我是代理'},
                    }
                ]
            },
            {
                path: 'supplierManage',
                name:'supplierManage',
                component:HelloWorld,
                meta: {cname: '供码用户管理', role: '供码用户管理'},
                children: [
                    {
                        path: 'addSupplier',
                        name:'addSupplier',
                        component:HelloWorld,
                        meta: {cname: '添加供码用户', role: '添加供码用户'},
                    },
                    {
                        path: 'suppliers',
                        name:'suppliers',
                        component:HelloWorld,
                        meta: {cname: '所有供码用户', role: '所有供码用户'},
                    },
                    {
                        path: 'ISupplier',
                        name:'ISupplier',
                        component:HelloWorld,
                        meta: {cname: '我是供码用户', role: '我是供码用户'},
                    }
                ]
            },
            {
                path: 'merchantManage',
                name:'merchantManage',
                component:HelloWorld,
                meta: {cname: '商户管理', role: '商户管理'},
                children: [
                    {
                        path: 'addMerchant',
                        name:'addMerchant',
                        component:HelloWorld,
                        meta: {cname: '添加商户', role: '添加商户'},
                    },
                    {
                        path: 'waitApprovalMer',
                        name:'waitApprovalMer',
                        component:HelloWorld,
                        meta: {cname: '审批商户', role: '审批商户'},
                    },
                    {
                        path: 'merchants',
                        name:'merchants',
                        component:HelloWorld,
                        meta: {cname: '所有商户', role: '所有商户'},
                    },
                    {
                        path: 'IMerchant',
                        name:'IMerchant',
                        component:HelloWorld,
                        meta: {cname: '我是商户', role: '我是商户'},
                    },
                    {
                        path: 'myMerchants',
                        name:'myMerchants',
                        component:HelloWorld,
                        meta: {cname: '我的商户', role: '我的商户'},
                    }
                ]
            },
            {
                path: 'bankCardSetting',
                name:'bankCardSetting',
                component:HelloWorld,
                meta: {cname: '银行卡设置', role: '银行卡设置'},
                children: [
                    {
                        path: 'addCardPersonal',
                        name:'addCardPersonal',
                        component:HelloWorld,
                        meta: {cname: '个人添加银行卡', role: '个人添加银行卡'},
                    },
                    {
                        path: 'cardsPersonal',
                        name:'cardsPersonal',
                        component:HelloWorld,
                        meta: {cname: '个人银行卡', role: '个人银行卡'},
                    },
                    {
                        path: 'personalExtractMoneyHistory',
                        name:'personalExtractMoneyHistory',
                        component:HelloWorld,
                        meta: {cname: '个人提现历史', role: '个人提现历史'},
                    },
                ]
            },
            {
                path: 'getQrCode',
                name:'getQrCode',
                component:HelloWorld,
                meta: {cname: '获取二维码', role: '获取二维码'},
            }
        ]
    },
    {
        path: '/finance',
        name:'/finance',
        redirect: '/finance/receiveCodeList',
        component:layout,
        meta: {cname: '财务管理',icon:'strikethrough', role: '财务管理'},
        children: [
            {
                path: 'withdrewWaiting',
                name:'withdrewWaiting',
                component:HelloWorld,
                meta: {cname: '抢单', role: '抢单'},
            },
            {
                path: 'orderForms',
                name:'orderForms',
                component:HelloWorld,
                meta: {cname: '处理订单', role: '处理订单'},
            },
            {
                path: 'extractMoneyHistory',
                name:'extractMoneyHistory',
                component:HelloWorld,
                meta: {cname: '提现历史', role: '提现历史'},
            },
            {
                path: 'c2p',
                name:'c2p',
                component:HelloWorld,
                meta: {cname: '添加内卡账变', role: '添加内卡账变'},
            }
        ]
    },
    {
        path:'/report',
        name:'/report',
        redirect: '/report/receiveCodeReport',
        component:layout,
        meta: {cname: '报表统计',icon:'ordered-list', role: '报表统计'},
        children: [
            {
                path: 'receiveCodeReport',
                name:'receiveCodeReport',
                component:HelloWorld,
                meta: {cname: '收款码报表', role: '收款码报表'},
            },
            {
                path: 'merchantsReport',
                name:'merchantsReport',
                component:HelloWorld,
                meta: {cname: '商户报表', role: '商户报表'},
            },
            {
                path: 'localTeamReport',
                name:'localTeamReport',
                component:HelloWorld,
                meta: {cname: '供码用户报表', role: '供码用户报表'},
            },
            {
                path: 'fundReport',
                name:'fundReport',
                component:HelloWorld,
                meta: {cname: '资金报表', role: '资金报表'},
            },
            {
                path: 'agencyReport',
                name:'agencyReport',
                component:HelloWorld,
                meta: {cname: '代理报表', role: '代理报表'},
            }
        ]
    },
    {
        path: '/order',
        name:'/order',
        redirect: '/order/orderDetails',
        component:layout,
        meta: {cname: '订单管理',icon:'solution', role: '订单管理'},
        children: [
            {
                path: 'orderDetails',
                name:'orderDetails',
                component:HelloWorld,
                meta: {cname: '订单明细', role: '订单明细'},
            },
            {
                path: 'codeChangeOrder',
                name:'codeChangeOrder',
                component:HelloWorld,
                meta: {cname: '内部码帐变订单', role: '内部码帐变订单'},
            },
            {
                path: 'cardChangeOrder',
                name:'cardChangeOrder',
                component:HelloWorld,
                meta: {cname: '内部卡帐变订单', role: '内部卡帐变订单'},
            },
        ]
    },
    {path:'/',redirect:'/company'}
];
export default routes
/*[
    {
        title: '公司管理',
        path: '/123',
        icon:'bank',
        meta: {cname: '公司管理', role: ['公司管理']},
        children: [
            {
                title: '公告管理',
                path: '/123',
                name :'ggglname',
                component:Sytd,
                meta: {cname: '公告管理', role: ['公告管理']},
            },
            {
                title: '团队管理',
                path: 'tdgl',
                meta: {cname: '团队管理', role: ['团队管理']},
                children: [
                    {
                        title: '所有团队',
                        path: 'sytd',
                        name : 'sytd0',
                        meta: {cname: '所有团队', role: ['所有团队']},
                    },
                    {
                        title: '添加团队',
                        path: 'tjtd',
                        name : 'tjtd0',
                        meta: {cname: '添加团队', role: ['添加团队']},
                    }
                ]
            },
            {
                title: '管理员管理',
                path: '',
                meta: {cname: '管理员管理', role: ['管理员管理']},
                children: [
                    {
                        title: '添加管理员',
                        path: '',
                        meta: {cname: '添加管理员', role: ['添加管理员']},
                    },
                    {
                        title: '所有管理员',
                        path: '',
                        meta: {cname: '所有管理员', role: ['所有管理员']},
                    }
                ]
            },
            {
                title: '岗位管理',
                path: '',
                meta: {cname: '岗位管理', role: ['岗位管理']},
                children: [
                    {
                        title: '岗位添加',
                        path: '',
                        meta: {cname: '岗位添加', role: ['岗位添加']},
                    },
                    {
                        title: '所有岗位',
                        path: '',
                        meta: {cname: '所有岗位', role: ['所有岗位']},
                    }
                ]
            },
            {
                title: '权限管理',
                path: '',
                meta: {cname: '权限管理', role: ['权限管理']},
                children: [
                    {
                        title: '分配权限',
                        path: '',
                        meta: {cname: '分配权限', role: ['分配权限']},
                    },
                    {
                        title: '某个职位权限查询',
                        path: '',
                        meta: {cname: '某个职位权限查询', role: ['某个职位权限查询']},
                    },
                    {
                        title: '所有权限查询',
                        path: '',
                        meta: {cname: '所有权限查询', role: ['所有权限查询']},
                    }
                ]
            },
            {
                title: '银行卡管理',
                path: '',
                meta: {cname: '银行卡管理', role: ['银行卡管理']},
                children: [
                    {
                        title: '公司所有银行卡',
                        path: '',
                        meta: {cname: '公司所有银行卡', role: ['公司所有银行卡']},
                    },
                    {
                        title: '公司添加银行卡',
                        path: '',
                        meta: {cname: '公司添加银行卡', role: ['公司添加银行卡']},
                    },
                    {
                        title: '所有个人银行卡',
                        path: '',
                        meta: {cname: '所有个人银行卡', role: ['所有个人银行卡']},
                    },
                ]
            },
            {
                title: '风控管理',
                path: '',
                meta: {cname: '风控管理', role: ['风控管理']},
            },
            {
                title: '系统设置',
                path: '',
                meta: {cname: '系统设置', role: ['系统设置']},
            },
            {
                title: '运营管理',
                path: '',
                meta: {cname: '运营管理', role: ['运营管理']},
                children: [
                    {
                        title: '添加通道',
                        path: '',
                        meta: {cname: '添加通道', role: ['添加通道']},
                    },
                    {
                        title: '修改通道',
                        path: '',
                        meta: {cname: '修改通道', role: ['修改通道']},
                    },
                    {
                        title: '停用通道',
                        path: '',
                        meta: {cname: '停用通道', role: ['停用通道']},
                    }
                ]
            },
            {
                title: '日志明细',
                path: '',
                meta: {cname: '日志明细', role: ['日志明细']},
            }
        ]
    },
    {
        title: '用户中心',
        path: '',
        icon:'user',
        meta: {cname: '用户中心', role: ['用户中心']},
        children: [
            {
                title: '用户信息',
                path: '',
                meta: {cname: '用户信息', role: ['用户信息']},
            },
            {
                title: '代理管理',
                path: '',
                meta: {cname: '代理管理', role: ['代理管理']},
                children: [
                    {
                        title: '添加代理',
                        path: '',
                        meta: {cname: '添加代理', role: ['添加代理']},
                    },
                    {
                        title: '所有代理',
                        path: '',
                        meta: {cname: '所有代理', role: ['所有代理']},
                    },
                    {
                        title: '我是代理',
                        path: '',
                        meta: {cname: '我是代理', role: ['我是代理']},
                    }
                ]
            },
            {
                title: '供码用户管理',
                path: '',
                meta: {cname: '供码用户管理', role: ['供码用户管理']},
                children: [
                    {
                        title: '添加供码用户',
                        path: '',
                        meta: {cname: '添加供码用户', role: ['添加供码用户']},
                    },
                    {
                        title: '所有供码用户',
                        path: '',
                        meta: {cname: '所有供码用户', role: ['所有供码用户']},
                    },
                    {
                        title: '我是供码用户',
                        path: '',
                        meta: {cname: '我是供码用户', role: ['我是供码用户']},
                    }
                ]
            },
            {
                title: '商户管理',
                path: '',
                meta: {cname: '商户管理', role: ['商户管理']},
                children: [
                    {
                        title: '添加商户',
                        path: '',
                        meta: {cname: '添加商户', role: ['添加商户']},
                    },
                    {
                        title: '审批商户',
                        path: '',
                        meta: {cname: '审批商户', role: ['审批商户']},
                    },
                    {
                        title: '所有商户',
                        path: '',
                        meta: {cname: '所有商户', role: ['所有商户']},
                    },
                    {
                        title: '我是商户',
                        path: '',
                        meta: {cname: '我是商户', role: ['我是商户']},
                    },
                    {
                        title: '我的商户',
                        path: '',
                        meta: {cname: '我的商户', role: ['我的商户']},
                    }
                ]
            },
            {
                title: '银行卡设置',
                path: '',
                meta: {cname: '银行卡设置', role: ['银行卡设置']},
                children: [
                    {
                        title: '个人所有银行卡',
                        path: '',
                        meta: {cname: '个人所有银行卡', role: ['个人所有银行卡']},
                    },
                    {
                        title: '个人添加银行卡',
                        path: '',
                        meta: {cname: '个人添加银行卡', role: ['个人添加银行卡']},
                    },
                    {
                        title: '个人银行卡',
                        path: '',
                        meta: {cname: '个人银行卡', role: ['个人银行卡']},
                    }, {
                        title: '提现历史',
                        path: '',
                        meta: {cname: '提现历史', role: ['提现历史']},
                    }
                ]
            },
        ]
    },
    {
        title: '财务管理',
        path: '',
        icon:'strikethrough',
        meta: {cname: '财务管理', role: ['财务管理']},
        children: [
            {
                title: '抢单',
                path: '',
                meta: {cname: '抢单', role: ['抢单']},
            },
            {
                title: '处理订单',
                path: '',
                meta: {cname: '处理订单', role: ['处理订单']},
            },
            {
                title: '提现历史',
                path: '',
                meta: {cname: '提现历史', role: ['提现历史']},
            },
            {
                title: '添加内卡账变',
                path: '',
                meta: {cname: '添加内卡账变', role: ['添加内卡账变']},
            }
        ]
    },
    {
        title: '报表统计',
        path: '',
        icon:'ordered-list',
        meta: {cname: '报表统计', role: ['报表统计']},
        children: [
            {
                title: '收款码报表',
                path: '',
                meta: {cname: '收款码报表', role: ['收款码报表']},
            },
            {
                title: '商户报表',
                path: '',
                meta: {cname: '商户报表', role: ['商户报表']},
            },
            {
                title: '供码用户报表',
                path: '',
                meta: {cname: '供码用户报表', role: ['供码用户报表']},
            },
            {
                title: '资金报表',
                path: '',
                meta: {cname: '资金报表', role: ['资金报表']},
            },
            {
                title: '代理报表',
                path: '',
                meta: {cname: '代理报表', role: ['代理报表']},
            }
        ]
    },
    {
        title: '订单管理',
        path: '',
        icon:'solution',
        meta: {cname: '订单管理', role: ['订单管理']},
        children: [
            {
                title: '订单明细',
                path: '',
                meta: {cname: '订单明细', role: ['订单明细']},
            },
            {
                title: '内部码帐变订单',
                path: '',
                meta: {cname: '内部码帐变订单', role: ['内部码帐变订单']},
            },
            {
                title: '内部卡帐变订单',
                path: '',
                meta: {cname: '内部卡帐变订单', role: ['内部卡帐变订单']},
            },
        ]
    }
]*/
