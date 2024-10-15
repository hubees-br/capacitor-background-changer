package com.example.plugin

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "BackgroundChanger")
class BackgroundChangerPlugin : Plugin() {

    @PluginMethod
    fun changeBackground(call: PluginCall) {
        val color = call.getString("color") ?: "#FFFFFF"
        
        activity.runOnUiThread {
            bridge.webView.setBackgroundColor(android.graphics.Color.parseColor(color))
        }
        
        call.resolve()
    }
}