package com.example.miniprojet

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class RecyclerAdapter: RecyclerView.Adapter<RecyclerAdapter.ViewHolder>(){
    private var title = arrayOf("Task one", "Task Two", "Task Three", "Task Four", "Task Five")
    private var date = arrayOf("Task one", "Task Two", "Task Three", "Task Four", "Task Five")
    private var image = intArrayOf(R.drawable.cat, R.drawable.cat, R.drawable.cat, R.drawable.cat, R.drawable.cat)
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerAdapter.ViewHolder {
        val v = LayoutInflater.from(parent.context).inflate(R.layout.card_layout, parent, false)
        return ViewHolder(v)
    }

    override fun onBindViewHolder(holder: RecyclerAdapter.ViewHolder, position: Int) {
        holder.itemTitle.text = title[position]
        holder.itemDate.text = date[position]
        holder.itemImage.setImageResource(image[position])
    }

    override fun getItemCount(): Int {
        return title.size
    }
    inner class ViewHolder(itemView: View): RecyclerView.ViewHolder(itemView){
     var itemImage : ImageView
     var itemTitle : TextView
     var itemDate : TextView

     init{
         itemImage = itemView.findViewById(R.id.item_image)
         itemTitle = itemView.findViewById(R.id.item_title)
         itemDate = itemView.findViewById(R.id.item_date)
     }
    }

}