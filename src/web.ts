import { WebPlugin } from '@capacitor/core';

import type { BackgroundChangerPlugin } from './definitions';

export class BackgroundChangerWeb extends WebPlugin implements BackgroundChangerPlugin {
  async changeBackground(options: { color: string }): Promise<void> {
    document.body.style.backgroundColor = options.color;
  }
}