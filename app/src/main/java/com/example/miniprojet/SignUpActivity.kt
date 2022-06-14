package com.example.miniprojet

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.example.miniprojet.Api.RetrofitClient
import com.example.miniprojet.data.models.DefaultResponse
import com.example.miniprojet.data.models.UserRequest
import com.example.miniprojet.utils.config.NetworkConfig
import kotlinx.android.synthetic.main.activity_sign_up.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class SignUpActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_up)
        signupBtnSignup.setOnClickListener{
            val email = emailSignup.text.toString().trim()
            val name = nameSignup.text.toString().trim()
            val password = passwordSIgnup.text.toString().trim()
            val cpassword = cpasswordSignUp.text.toString().trim()


            if(email.isEmpty()){
                emailSignup.error = "Email Required"
                emailSignup.requestFocus()
                return@setOnClickListener
            }
            if(name.isEmpty()){
                nameSignup.error = "Email Required"
                nameSignup.requestFocus()
                return@setOnClickListener
            }
            if(password.isEmpty()){
                passwordSIgnup.error = "Email Required"
                nameSignup.requestFocus()
                return@setOnClickListener
            }
            if(cpassword.isEmpty()){
                cpasswordSignUp.error = "Email Required"
                nameSignup.requestFocus()
                return@setOnClickListener
            }


            RetrofitClient.instance.createUser(UserRequest(name,email,password,cpassword))
                .enqueue(object: Callback<DefaultResponse>{
                    override fun onFailure(call: Call<DefaultResponse>, t: Throwable) {
                        Toast.makeText(applicationContext, t.message, Toast.LENGTH_LONG).show()
                    }

                    override fun onResponse(call: Call<DefaultResponse>, response: Response<DefaultResponse>) {
                        Toast.makeText(applicationContext, response.body()?.message, Toast.LENGTH_LONG).show()
                    }

                })


        }
        lgnBtnSignup.setOnClickListener{
            val intent = Intent(applicationContext, LoginActivity::class.java)
            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK

            startActivity(intent)

        }
    }
}


