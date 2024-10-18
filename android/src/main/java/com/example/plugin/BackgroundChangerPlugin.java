package com.example.plugin.backgroundchanger;

import android.graphics.Color;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "BackgroundChanger")
public class BackgroundChangerPlugin extends Plugin {

    @PluginMethod
    public void changeBackgroundToTransparent(PluginCall call) {
        getBridge().executeOnMainThread(() -> {
            getBridge().getWebView().setBackgroundColor(Color.TRANSPARENT);
            call.resolve();
        });
    }

    @PluginMethod
    public void changeBackgroundToWhite(PluginCall call) {
        getBridge().executeOnMainThread(() -> {
            getBridge().getWebView().setBackgroundColor(Color.WHITE);
            call.resolve();
        });
    }
}