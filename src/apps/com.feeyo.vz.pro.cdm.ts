import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.feeyo.vz.pro.cdm',
  name: '飞常准业内版',
  groups: [
    {
      key: 0,
      name: '分段广告-关闭应用内广告',
      desc: '自动关闭',
      snapshotUrls: [
        'https://i.gkd.li/i/25510281',
        'https://i.gkd.li/i/25510296',
      ],
      rules: [
        {
          key: 0,
          name: '关闭应用内广告',
          actionDelay: 300,
          matches: '[vid="tvReportOrRemoveAd"]',
        },
        {
          key: 1,
          name: '关闭通知弹窗',
          actionDelay: 300,
          matches: '[vid="tvCloseAd"]',
        },
      ],
    },
    {
      key: 1,
      name: '开屏广告-跳过开屏广告',
      desc: '适用于跳过按钮在下方的情况',
      matchTime: 10000,
      actionMaximum: 1,
      rules: {
        activityIds: 'com.feeyo.vz.pro.activity.cdm.WelcomeActivity',
        matches:
          '@View <4 FrameLayout < FrameLayout < [vid="splashAdContainer"] + [vid="clLogo"]',
        snapshotUrls: 'https://i.gkd.li/i/25506145',
      },
    },
  ],
});
