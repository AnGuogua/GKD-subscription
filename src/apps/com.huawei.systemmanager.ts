import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.systemmanager',
  name: '华为手机管家',
  groups: [
    {
      key: 0,
      name: '局部广告-添加至桌面',
      rules: {
        matches: '[vid="tv_not_recover"]',
        snapshotUrls: 'https://i.gkd.li/i/25510860',
        activityIds: '.power.ui.HwPowerManagerActivity',
      },
    },
  ],
});
