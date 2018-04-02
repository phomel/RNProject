package com.rnproject;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by huangyacong on 2018/3/30.
 */

public class ToastModule extends ReactContextBaseJavaModule {

    public static final String DURATION_SHORT_KEY = "SHORT";
    public static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ToastExample";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> map = new HashMap<>();
        map.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        map.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return map;
    }

    @ReactMethod
    public void showToast(String msg, int duration) {
        Toast.makeText(getReactApplicationContext(), msg, duration).show();
    }
}
