import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.liuzh.deviceinfo',
  name: '设备信息',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告(旧版)',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.liuzh.deviceinfo.MainActivity',
          matches:
            'FrameLayout[childCount=3 || childCount=4] > ImageView[text=null] +(2,3) @FrameLayout[childCount=1] > ImageView[childCount=0] <<n [vid="ad_container"]',
          exampleUrls: 'https://e.gkd.li/250d3229-a933-410b-8a4a-daccb366558c',
          snapshotUrls: [
            'https://i.gkd.li/i/16322794',
            'https://i.gkd.li/i/16322793',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: 'com.qq.e.ads.ADActivity',
          matches:
            'FrameLayout[childCount=3] > TextView[text!=null] + ImageView[clickable=true][text=null][childCount=0]',
          exampleUrls: 'https://e.gkd.li/ce0348d0-f864-4e52-b235-2e83ec7c20ac',
          snapshotUrls: 'https://i.gkd.li/i/16322792',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-卡片广告',
      desc: '点击关闭',
      rules: {
        matches: '[vid="ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/25510494',
      },
    },
    {
      key: 3,
      name: '通知提示-开通会员提醒',
      desc: '点击不感兴趣',
      rules: {
        matches: '@[vid="btn_cancel"] - TextView[text^="购买"]',
        snapshotUrls: 'https://i.gkd.li/i/25510577',
      },
    },
    {
      key: 4,
      name: '局部广告-评价提醒',
      desc: '关闭',
      rules: {
        matches: '@ImageView[vid="close"] - ViewGroup > Button[vid="rating"]',
        snapshotUrls: 'https://i.gkd.li/i/25510681',
      },
    },
    {
      key: 5,
      name: '全屏广告-下载应用',
      desc: '关闭',
      rules: {
        matches:
          '@ImageView < FrameLayout <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > TextView[text*="下载"]',
        snapshotUrls: 'https://i.gkd.li/i/25510755',
      },
    },
  ],
});
