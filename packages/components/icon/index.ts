import { withInstall } from '@rexag/utils';
import _Icon from './src/icon.vue';

const Icon = withInstall(_Icon);
export default Icon;

export * from './src/icon';

// 这里添加的类型 可以在模版中被解析
declare module 'vue' {
  export interface GlobalComponents {
    RegIcon: typeof Icon;
  }
}
