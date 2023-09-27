import React from 'react'
import b1 from '../images/blog-1.jpg'
import b2 from '../images/blog-2.jpg'
import b3 from '../images/blog-3.jpg'

export default function Blogs() {
  return (
    <div>
        <section class="blogs" id="blogs">
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 class="heading"> our <span>blogs</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src={b1} alt=""/>
            <div class="content">
                <div class="icons">
                    <a href="#"> <i class="fas fa-user"></i> by user </a>
                    <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2022 </a>
                </div>
                <h3>fresh and organic vegitables and fruits</h3>
                <p>Fresh and organic vegitables and fruits at low prices</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

        <div class="box">
            <img src={b2} alt=""/>
            <div class="content">
                <div class="icons">
                    <a href="#"> <i class="fas fa-user"></i> by user </a>
                    <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2022 </a>
                </div>
                <h3>Knowing Nutritious value of your food</h3>
                <p>Understanding the Nutritional Value of Foods: A Comprehensive Guide to Healthy Eating</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

        <div class="box">
            <img src={b3} alt=""/>
            <div class="content">
                <div class="icons">
                    <a href="#"> <i class="fas fa-user"></i> by user </a>
                    <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2022 </a>
                </div>
                <h3>Global Vegetable Cusine of World</h3>
                <p>Mediterranean, Asian, Middle Eastern, and other cultures that showcase the art of vegetable preparation and seasoning.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

    </div>

</section>
    </div>
  )
}
