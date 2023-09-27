import React from 'react'
import mahi from './images/mahi.png' 
import './App.css'

export default function About() {
  return (
    <div>
        <section className="review" id="review">
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 className="heading"> About <span>Members</span> </h1>

    <div className="swiper review-slider">

        <div className="swiper-wrapper">

            

            <div className="swiper-slide box about ">
                <img src={mahi} alt=""/>
                <p>TasteBasket website Designer and Developer <br/> [B.Tech. (CSE), II year]</p>
                <h3>Mahi Tyagi</h3>
                
                <div className="share">
                <a target="_blank" href="https://www.facebook.com/" className="fab fa-facebook-f"/> 
                <a target="_blank" href="https://twitter.com/i/flow/login" className="fab fa-github"/>
                <a target="_blank" href="https://www.instagram.com/i_mahityagi/" className="fab fa-instagram"/>
                <a target="_blank" href="https://www.linkedin.com/in/mahityagi/" className="fab fa-linkedin"/>
            </div>
            </div>

            

        </div>

    </div>

</section>
    </div>
  )
}
