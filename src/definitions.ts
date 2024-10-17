export interface BackgroundChangerPlugin {
    changeBackgroundToTransparent(): Promise<void>;
}