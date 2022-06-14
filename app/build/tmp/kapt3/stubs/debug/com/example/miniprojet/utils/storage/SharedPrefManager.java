package com.example.miniprojet.utils.storage;

import java.lang.System;

@kotlin.Metadata(mv = {1, 7, 1}, k = 1, d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\u0018\u0000 \u000f2\u00020\u0001:\u0001\u000fB\u000f\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0002\u0010\u0004J\u0006\u0010\f\u001a\u00020\rJ\u000e\u0010\u000e\u001a\u00020\r2\u0006\u0010\b\u001a\u00020\tR\u0011\u0010\u0005\u001a\u00020\u00068F\u00a2\u0006\u0006\u001a\u0004\b\u0005\u0010\u0007R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0011\u0010\b\u001a\u00020\t8F\u00a2\u0006\u0006\u001a\u0004\b\n\u0010\u000b\u00a8\u0006\u0010"}, d2 = {"Lcom/example/miniprojet/utils/storage/SharedPrefManager;", "", "mCtx", "Landroid/content/Context;", "(Landroid/content/Context;)V", "isLoggedIn", "", "()Z", "user", "Lcom/example/miniprojet/data/models/User;", "getUser", "()Lcom/example/miniprojet/data/models/User;", "clear", "", "saveUser", "Companion", "app_debug"})
public final class SharedPrefManager {
    private final android.content.Context mCtx = null;
    @org.jetbrains.annotations.NotNull()
    public static final com.example.miniprojet.utils.storage.SharedPrefManager.Companion Companion = null;
    private static final java.lang.String SHARED_PREF_NAME = "my_shared_preff";
    private static com.example.miniprojet.utils.storage.SharedPrefManager mInstance;
    
    private SharedPrefManager(android.content.Context mCtx) {
        super();
    }
    
    public final boolean isLoggedIn() {
        return false;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final com.example.miniprojet.data.models.User getUser() {
        return null;
    }
    
    public final void saveUser(@org.jetbrains.annotations.NotNull()
    com.example.miniprojet.data.models.User user) {
    }
    
    public final void clear() {
    }
    
    @kotlin.Metadata(mv = {1, 7, 1}, k = 1, d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002J\u000e\u0010\u0007\u001a\u00020\u00062\u0006\u0010\b\u001a\u00020\tR\u000e\u0010\u0003\u001a\u00020\u0004X\u0082D\u00a2\u0006\u0002\n\u0000R\u0010\u0010\u0005\u001a\u0004\u0018\u00010\u0006X\u0082\u000e\u00a2\u0006\u0002\n\u0000\u00a8\u0006\n"}, d2 = {"Lcom/example/miniprojet/utils/storage/SharedPrefManager$Companion;", "", "()V", "SHARED_PREF_NAME", "", "mInstance", "Lcom/example/miniprojet/utils/storage/SharedPrefManager;", "getInstance", "mCtx", "Landroid/content/Context;", "app_debug"})
    public static final class Companion {
        
        private Companion() {
            super();
        }
        
        @org.jetbrains.annotations.NotNull()
        @kotlin.jvm.Synchronized()
        public final synchronized com.example.miniprojet.utils.storage.SharedPrefManager getInstance(@org.jetbrains.annotations.NotNull()
        android.content.Context mCtx) {
            return null;
        }
    }
}