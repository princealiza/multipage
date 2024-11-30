import React from 'react'
import styles from "./page.module.css"

const HomeContent = () => {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: "url('/image home.jpg')" }}>
        <div>
          <h1 className="add-in">WelCome to ZB Foods</h1>
          <p>"Welcome to ZB Foods-where taste meets quality! We take pride in offering pure ingredients, authentic flavors, and a passion for culinary excellence. At ZB Foods, every bite is a journey of deliciousness, crafted with love and care to bring you the freshest and most delightful food experience. Discover the magic of taste with us!"</p>
          <button>Order Now</button>
        </div>
      </section>
    </div>
  )
}

export default HomeContent