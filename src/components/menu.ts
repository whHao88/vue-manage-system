interface MenuItem {
  index: string
  title: string
  permiss: string
  icon?: string
  subs?: MenuItem[]
}
export const items = [
  {
    icon: 'Odometer',
    index: '/dashboard',
    title: '系统首页',
    permiss: '1',
  },
  {
    icon: 'Calendar',
    index: '/table',
    title: '表格相关',
    permiss: '2',
    subs: [
      {
        index: '/table',
        title: '常用表格',
        permiss: '2',
        icon: 'Odometer',
      },
      {
        index: '/import',
        title: '导入Excel',
        permiss: '2',
        icon: 'Odometer',
      },
      {
        index: '/export',
        title: '导出Excel',
        permiss: '2',
        icon: 'Odometer',
      },
    ],
  },
  {
    icon: 'DocumentCopy',
    index: '/tabs',
    title: 'tab选项卡',
    permiss: '3',
  },
  {
    icon: 'Edit',
    index: '/form',
    title: '表单相关',
    permiss: '4',
    subs: [
      {
        index: '/form',
        title: '基本表单',
        permiss: '5',
        icon: 'Odometer',
      },
      {
        index: '/upload',
        title: '文件上传',
        permiss: '6',
        icon: 'Odometer',
      },
    ],
  },
  {
    icon: 'Setting',
    index: '/icon',
    title: '自定义图标',
    permiss: '10',
  },
  {
    icon: 'PieChart',
    index: '/charts',
    title: 'schart图表',
    permiss: '11',
  },
  {
    icon: 'Warning',
    index: '/permission',
    title: '权限管理',
    permiss: '13',
  },
  {
    icon: 'CoffeeCup',
    index: '/donate',
    title: '支持作者',
    permiss: '14',
  },
]
