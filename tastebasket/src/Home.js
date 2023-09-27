import React from 'react'
import f1 from './images/feature-img-1.png'
import f2 from './images/feature-img-2.png'
import f3 from './images/feature-img-3.png'
import logo from './img/shopping-basket.gif'

export default function Home() {
  return (
    <div>
        < section className="home" id="home">

<div className="content">
    <h3>fresh and <span>organic</span> products for you.</h3>
    <p>World's Largest online foodmarket.</p>
    <a href="#" className="btn">shop now</a>
</div>
</section>

<section className="features" id="features">

    <h1 className="heading"> our <span>features</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={f1} alt=""/>
            <h3>fresh and organic</h3>
            <p>healthy and organic vegetables delivered at your doorstep anywhere in India.</p>
            
        </div>

        <div className="box">
            <img src={f2} alt=""/>
            <h3>free delivery</h3>
            <p>Get vegetables delivered safely at your doorstep in India</p>
          
        </div>

        <div className="box">
            <img src={f3} alt=""/>
            <h3>easy payments</h3>
            <p>easy payment service with 240+ payment solutions & fraud prevention services.</p>
           
        </div>

    </div>

</section>



<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3> TasteBasket <img height="35px" src={logo} alt="logo" className="Animatedlogo"/> </h3>
            <p>India's No.1 grocery brand Registered in Ghaziabad, India.</p>
            <p> Mail Id - TasteBasket@gmail.com </p>
            <p> Mob - +91 9837805140 </p>
            <div className="share">
                <a target="_blank" href="https://www.facebook.com/" className="fab fa-facebook-f"/> 
                <a target="_blank" href="https://twitter.com/i/flow/login" className="fab fa-twitter"/>
                <a target="_blank" href="https://www.instagram.com/" className="fab fa-instagram"/>
                <a target="_blank" href="https://www.linkedin.com/signup" className="fab fa-linkedin"/>
            </div>
        </div>

        <div className="box">
            <h3>contact Details</h3>
            <a href="#" className="links"> <i className="fas fa-phone"></i> +91 9759917775 </a>
            <a href="#" className="links"> <i className="fas fa-phone"></i> +91 9625786096 </a>
            <a target="_blank" href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="links"> <i className="fas fa-envelope"></i> TasteBasket@gmail.com </a>
            <a target="_blank" href="https://www.google.com/maps/place/Sector+9,+Gurugram,+Haryana+122001/@28.4451308,77.0130561,12z/data=!4m5!3m4!1s0x390d19a942b79d9b:0x1347dbfad493a7d3!8m2!3d28.4554726!4d77.0219019" className="links"> <i className="fas fa-map-marker-alt"></i> Ghaziabad, india - 201009</a>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="#home" className="links"> <i className="fas fa-arrow-right"></i> home </a>
            <a href="products.html" className="links"> <i className="fas fa-arrow-right"></i> products </a>
            <a href="categories.html" className="links"> <i className="fas fa-arrow-right"></i> categories </a>
            <a href="review.html" className="links"> <i className="fas fa-arrow-right"></i> review </a>
            <a href="blogs.html" className="links"> <i className="fas fa-arrow-right"></i> blogs </a>
        </div>

        <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder=" Enter your email" className="email"/>
            <input type="submit" value="subscribe" className="btn"/>
            <img src="image/payment.png" className="payment-img" alt=""/>
        </div>

    </div>

    <div className="credit"> Developed and Designed by  <span> &#169; Mahi Tyagi </span> | all rights reserved </div>

</section>

    </div>
  )
}
