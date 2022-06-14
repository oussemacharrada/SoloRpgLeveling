package com.example.miniprojet.data.models
import com.google.gson.annotations.SerializedName

data class UserRequest(
    @SerializedName("name")
    var name: String,
    @SerializedName("email")
    var email: String,
    @SerializedName("password")
    var password: String,
    @SerializedName("passwordConfirm")
    var passwordConfirm: String
)