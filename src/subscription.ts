import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1,
  name: 'Guogua的GKD订阅',
  version: 0,
  author: 'Guogua',
  checkUpdateUrl:
    'https://raw.githubusercontent.com/AnGuogua/GKD-subscription/main/dist/gkd.json5',
  updateUrl:
    'https://raw.githubusercontent.com/AnGuogua/GKD-subscription/main/dist/gkd.version.json5',
  supportUri: 'https://github.com/AnGuogua/GKD-subscription/',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
