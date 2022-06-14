package com.example.miniprojet.Api

import com.example.miniprojet.data.models.DefaultResponse
import com.example.miniprojet.data.models.LoginResponse
import com.example.miniprojet.data.models.UserRequest
import com.example.miniprojet.data.models.UserResponse
import retrofit2.Call
import retrofit2.http.*


interface Api {

    @Headers("Accept: application/json" , "Content-Type: application/json")
    @POST("signup")
    fun createUser(@Body pram: UserRequest): Call<DefaultResponse>



    @Headers("Accept: application/json" , "Content-Type: application/json")
    @POST("login")
    fun userLogin(@Body userRequest: UserRequest): Call<LoginResponse>

}