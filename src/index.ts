import { registerPlugin } from '@capacitor/core';

import type { BackgroundChangerPlugin } from './definitions';

const BackgroundChanger = registerPlugin<BackgroundChangerPlugin>('BackgroundChanger');

export * from './definitions';
export { BackgroundChanger };