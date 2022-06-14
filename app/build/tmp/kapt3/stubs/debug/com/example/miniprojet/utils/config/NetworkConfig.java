package com.example.miniprojet.utils.config;

import java.lang.System;

@kotlin.Metadata(mv = {1, 7, 1}, k = 1, d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u00c6\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002J\u0012\u0010\u000b\u001a\u00020\f2\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006H\u0002J)\u0010\r\u001a\u0002H\u000e\"\u0004\b\u0000\u0010\u000e2\f\u0010\u000f\u001a\b\u0012\u0004\u0012\u0002H\u000e0\u00102\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u00a2\u0006\u0002\u0010\u0011R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u001a\u0010\u0005\u001a\u00020\u0006X\u0086.\u00a2\u0006\u000e\n\u0000\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\n\u00a8\u0006\u0012"}, d2 = {"Lcom/example/miniprojet/utils/config/NetworkConfig;", "", "()V", "BASE_URL", "", "context", "Landroid/content/Context;", "getContext", "()Landroid/content/Context;", "setContext", "(Landroid/content/Context;)V", "okhttpClient", "Lokhttp3/OkHttpClient;", "provideApi", "T", "clazz", "Ljava/lang/Class;", "(Ljava/lang/Class;Landroid/content/Context;)Ljava/lang/Object;", "app_debug"})
public final class NetworkConfig {
    @org.jetbrains.annotations.NotNull()
    public static final com.example.miniprojet.utils.config.NetworkConfig INSTANCE = null;
    public static android.content.Context context;
    private static final java.lang.String BASE_URL = "http://10.0.2.2:8900/";
    
    private NetworkConfig() {
        super();
    }
    
    @org.jetbrains.annotations.NotNull()
    public final android.content.Context getContext() {
        return null;
    }
    
    public final void setContext(@org.jetbrains.annotations.NotNull()
    android.content.Context p0) {
    }
    
    public final <T extends java.lang.Object>T provideApi(@org.jetbrains.annotations.NotNull()
    java.lang.Class<T> clazz, @org.jetbrains.annotations.Nullable()
    android.content.Context context) {
        return null;
    }
    
    private final okhttp3.OkHttpClient okhttpClient(android.content.Context context) {
        return null;
    }
}