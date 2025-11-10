import { WebPlugin } from '@capacitor/core';
import type { BackgroundChangerPlugin } from './definitions';
export declare class BackgroundChangerWeb extends WebPlugin implements BackgroundChangerPlugin {
    changeBackgroundToTransparent(): Promise<void>;
    changeBackgroundToWhite(): Promise<void>;
}
