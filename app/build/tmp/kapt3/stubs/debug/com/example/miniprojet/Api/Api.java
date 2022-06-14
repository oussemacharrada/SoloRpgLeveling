package com.example.miniprojet.Api;

import java.lang.System;

@kotlin.Metadata(mv = {1, 7, 1}, k = 1, d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\bf\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\b\b\u0001\u0010\u0005\u001a\u00020\u0006H\'J\u0018\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\b0\u00032\b\b\u0001\u0010\t\u001a\u00020\u0006H\'\u00a8\u0006\n"}, d2 = {"Lcom/example/miniprojet/Api/Api;", "", "createUser", "Lretrofit2/Call;", "Lcom/example/miniprojet/data/models/DefaultResponse;", "pram", "Lcom/example/miniprojet/data/models/UserRequest;", "userLogin", "Lcom/example/miniprojet/data/models/LoginResponse;", "userRequest", "app_debug"})
public abstract interface Api {
    
    @org.jetbrains.annotations.NotNull()
    @retrofit2.http.POST(value = "signup")
    @retrofit2.http.Headers(value = {"Accept: application/json", "Content-Type: application/json"})
    public abstract retrofit2.Call<com.example.miniprojet.data.models.DefaultResponse> createUser(@org.jetbrains.annotations.NotNull()
    @retrofit2.http.Body()
    com.example.miniprojet.data.models.UserRequest pram);
    
    @org.jetbrains.annotations.NotNull()
    @retrofit2.http.POST(value = "login")
    @retrofit2.http.Headers(value = {"Accept: application/json", "Content-Type: application/json"})
    public abstract retrofit2.Call<com.example.miniprojet.data.models.LoginResponse> userLogin(@org.jetbrains.annotations.NotNull()
    @retrofit2.http.Body()
    com.example.miniprojet.data.models.UserRequest userRequest);
}