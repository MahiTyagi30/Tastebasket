import React from 'react'
import '../App.css'
import c1 from '../images/cat-1.png'
import c2 from '../images/cat-2.png'
import c3 from '../images/cat-3.png'
import c4 from '../images/q-500x500.webp'
import c5 from '../images/food-grains.jpg'
import c6 from '../images/bakerytitle.jpg'
import c7 from '../images/british-snacks.webp'
import c8 from '../images/indianmithai3.jpg'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <div>
        <section className="categories" id="categories">
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 className="heading"> product <span>categories</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={c1} alt=""/>
            <h3>vegetables</h3>
            <p>upto 45% off</p>
            <Link to="/products" className='btn'>Shop now</Link>
            {/* <a href="#" className="btn">shop now</a> */}
        </div>

        <div className="box">
            <img src={c2} alt=""/>
            <h3>fresh fruits</h3>
            <p>upto 45% off</p>
            <Link to="/fruits" className='btn'>Shop Now</Link>
        </div>

        <div className="box">
            <img src={c3} alt=""/>
            <h3>dairy products</h3>
            <p>upto 45% off</p>
            <Link to="/products2" className='btn'>Shop Now</Link>
        </div>
        <div className="box">
            <img src={c4} alt=""/>
            <h3>beverages</h3>
            <p>upto 45% off</p>
            <Link to="/bever" className='btn'>Shop Now</Link>
        </div>
        <div className="box">
            <img src={c5} alt=""/>
            <h3>Foodgrains</h3>
            <p>upto 45% off</p>
            <Link to="/grains" className='btn'>Shop Now</Link>
        </div>
        <div className="box">
            <img src={c6} alt=""/>
            <h3>Bakery Products</h3>
            <p>upto 45% off</p>
            <Link to="/bakery" className='btn'>Shop Now</Link>
        </div>
        <div className="box">
            <img src={c7} alt="" height="80%" width="90%"/>
            <h3>Snacks</h3>
            <p>upto 45% off</p>
            <Link to="/snacks" className='btn'>Shop Now</Link>

        </div>
        <div className="box">
            <img src={c8} alt=""/>
            <h3>Sweets</h3>
            <p>upto 45% off</p>
            <Link to="/sweets" className='btn'>Shop Now</Link>
        </div>
        

        

    </div>

</section>
    </div>
  )
}
