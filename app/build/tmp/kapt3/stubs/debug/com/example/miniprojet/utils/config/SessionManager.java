package com.example.miniprojet.utils.config;

import java.lang.System;

@kotlin.Metadata(mv = {1, 7, 1}, k = 1, d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\u0018\u0000 \f2\u00020\u0001:\u0001\fB\u000f\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u00a2\u0006\u0002\u0010\u0004J\b\u0010\u0007\u001a\u0004\u0018\u00010\bJ\u000e\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\bR\u000e\u0010\u0005\u001a\u00020\u0006X\u0082\u000e\u00a2\u0006\u0002\n\u0000\u00a8\u0006\r"}, d2 = {"Lcom/example/miniprojet/utils/config/SessionManager;", "", "context", "Landroid/content/Context;", "(Landroid/content/Context;)V", "prefs", "Landroid/content/SharedPreferences;", "fetchAuthToken", "", "saveAuthToken", "", "token", "Companion", "app_debug"})
public final class SessionManager {
    private android.content.SharedPreferences prefs;
    @org.jetbrains.annotations.NotNull()
    public static final com.example.miniprojet.utils.config.SessionManager.Companion Companion = null;
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String USER_TOKEN = "user_token";
    
    public SessionManager(@org.jetbrains.annotations.Nullable()
    android.content.Context context) {
        super();
    }
    
    /**
     * Function to save auth token
     */
    public final void saveAuthToken(@org.jetbrains.annotations.NotNull()
    java.lang.String token) {
    }
    
    /**
     * Function to fetch auth token
     */
    @org.jetbrains.annotations.Nullable()
    public final java.lang.String fetchAuthToken() {
        return null;
    }
    
    @kotlin.Metadata(mv = {1, 7, 1}, k = 1, d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0005"}, d2 = {"Lcom/example/miniprojet/utils/config/SessionManager$Companion;", "", "()V", "USER_TOKEN", "", "app_debug"})
    public static final class Companion {
        
        private Companion() {
            super();
        }
    }
}