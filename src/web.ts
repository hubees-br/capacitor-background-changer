import { WebPlugin } from '@capacitor/core';

import type { BackgroundChangerPlugin } from './definitions';

export class BackgroundChangerWeb extends WebPlugin implements BackgroundChangerPlugin {
  changeBackgroundToTransparent(): Promise<void> {
    throw new Error('Method not implemented on web.');
  }
  changeBackgroundToWhite(): Promise<void> {
    throw new Error('Method not implemented on web.');
  }
}
