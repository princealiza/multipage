import React from 'react'
import { FaBold } from 'react-icons/fa'
import { MdDescription } from 'react-icons/md'

const Foods = () => {

    const foodData = [
        {id: 1, name: "Alfredo Pasta", price: 700, description: "Chicken", image: '/Alfredo-Pasta.jpg' },
        {id: 2, name: "Karahi", price: 1100, description: "Chicken & Beef", image: '/chicken karahi.jpg' },
        {id: 3, name: "Tikka", price: 450, description: "Chicken", image: '/Chicken tikka.jpg' },
        {id: 4, name: "Chowmein", price: 400, description: "Chicken & Vegetable", image: '/Chiken Chowmein.jpg' },
        {id: 5, name: "Club Sandwich", price: 380, description: "Chicken", image: '/club sandwich.jpg' },
        {id: 6, name: "Zinger Burger", price: 460, description: "Chicken & Beef", image: '/Zinger burger.jpg' },
    ]
  return (
    <div>
        <h2 className="add-in" style={{textAlign: "center", padding: 30, fontSize: 50,}}>Food Menu</h2>
        <div className="foods">
            {foodData.map ((food) => (
                <div key={food.id} className="food-card">
                    <img src={food.image} alt={food.name}/>
                    <h3>{food.name}</h3>
                    <p>{food.description}</p>
                    <div className="price">${food.price}</div>
                    <button>Add to Card</button>
                </div>
         ))}
        </div>
    </div>
  )
}

export default Foods