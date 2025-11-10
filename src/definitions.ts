export interface BackgroundChangerPlugin {
  changeBackgroundToTransparent(): Promise<void>;
  changeBackgroundToWhite(): Promise<void>;
}
