import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'moe.shizuku.privileged.api',
  name: 'Shizuku',
  groups: [
    {
      key: 9,
      name: '功能类-自动激活(无线调试)',
      desc: '当Shizuku未激活时，自动以无线调试激(需打开一个端口)',
      activityIds: 'moe.shizuku.manager.MainActivity',
      snapshotUrls: [
        'https://i.gkd.li/i/25506379',
        'https://i.gkd.li/i/25506468',
      ],
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '点击启动',
          matches:
            '@[id="android:id/button1"] <5 LinearLayout < CardView - CardView > LinearLayout >2 TextView[id="android:id/text1"][text="Shizuku未运行"]',
        },
        {
          key: 1,
          preKeys: [0],
          name: '点击端口号',
          matches: '[id="android:id/button3"][text~="\\d{4}"]',
        },
        {
          key: 3,
          preKeys: [1],
          name: '若没有端口号，则返回',
          matches:
            '@[id="android:id/button2"][text="取消"] < LinearLayout[childCount=2]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '从激活页面返回',
          activityIds: 'moe.shizuku.manager.starter.StarterActivity',
          matches:
            '@ImageButton[desc="转到上一层级"] < ViewGroup < LinearLayout - FrameLayout > ScrollView[id="android:id/list"] > TextView[text$="Service started, this window will be automatically closed in 3 seconds"]',
        },
      ],
    },
  ],
});
