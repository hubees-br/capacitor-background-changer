import { registerPlugin } from '@capacitor/core';
const BackgroundChanger = registerPlugin('BackgroundChanger', {
    web: () => import('./web').then((m) => new m.BackgroundChangerWeb()),
});
export * from './definitions';
export { BackgroundChanger };
//# sourceMappingURL=index.js.map