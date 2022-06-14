package com.example.miniprojet

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val taskFragment = TaskFragment()
        val animalFragment = AnimalFragment()
        val rewardsFragment = RewardsFragment()
        val profileFragment = ProfileFragment()
        makeCurrentFragment(taskFragment)

        val bottom_navigation = findViewById<BottomNavigationView>(R.id.bottom_navigation)
        bottom_navigation.setOnNavigationItemSelectedListener {
            when(it.itemId){
                R.id.nav_Tasks -> makeCurrentFragment(taskFragment)
                R.id.nav_animals -> makeCurrentFragment(animalFragment)
                R.id.nav_rewards -> makeCurrentFragment(rewardsFragment)
                R.id.nav_profile -> makeCurrentFragment(profileFragment)
            }
            true
        }
    }
    private fun makeCurrentFragment(fragment: Fragment){
        supportFragmentManager.beginTransaction().apply {
            replace(R.id.fram_nav, fragment)
            commit()
        }
    }
}