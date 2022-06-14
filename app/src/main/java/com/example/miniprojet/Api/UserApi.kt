package com.example.miniprojet.Api

import com.example.miniprojet.data.models.UserRequest
import com.example.miniprojet.data.models.UserResponse
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface UserAPI {
    @POST("users/login")
    fun onLogin(@Body userRequest: UserRequest): Call<UserResponse>

}