export interface BackgroundChangerPlugin {
    changeBackground(options: { color: string }): Promise<void>;
  }
  