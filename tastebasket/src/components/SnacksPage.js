import React from 'react'

import '../App.css'
import ProductData from './ProductData'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ADD,addMilkProduct } from "../redux/actions/action";
import Button from "react-bootstrap/Button";
import MilkProductData from './MilkProductDta'
import StarRating from './StarRating'
import { useEffect } from 'react'
import { useState } from 'react'
import { addToWishlist, removeFromWishlist } from "../redux/actions/WishlistAction"; 
import Wishlist from './Wishlist'
import Fruits from './Fruits'
import Bever from './Bever'
import Grains from './Grains'

// import Sweets from './Sweets'
import Snacks from './Snacks'
export default function Products() {





  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    // Retrieve the wishlist from localStorage when the component mounts
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const addToWishlistHandler = (product) => {
    // Add the product to the wishlist and update localStorage
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const removeFromWishlistHandler = (productId) => {
    // Remove the product from the wishlist and update localStorage
    const updatedWishlist = wishlist.filter((product) => product.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  return (

    <div>
        <section className="categories" id="categories">
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 className="heading"> Our <span>Products</span> </h1>

    
    <div className="box-container">
          { Snacks.map((Snacks) => (
            <div key={Snacks.id} className="box">
              <img src={Snacks.image} alt={Snacks.name} />
              <h3>{Snacks.name}</h3>
              <p>{Snacks.price}</p>
              <button
      className={`wishlist-button ${wishlist.some((item) => item && item.id === Snacks.id) ? 'added' : ''}`}
      onClick={() => {
        wishlist.some((item) => item && item.id === Snacks.id)
          ? removeFromWishlistHandler(Snacks.id)
          : addToWishlistHandler(Snacks);
      }}
    >
      {wishlist.some((item) => item && item.id ===Snacks.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
              {/* <button
            className={`wishlist-button ${wishlist.some((item) => item.id === Products.id) ? 'added' : ''}`}
            onClick={() => {
              wishlist.some((item) => item.id === Products.id)
                ? removeFromWishlistHandler(Products.id)
                : addToWishlistHandler(Products);
            }}
          >
            {wishlist.some((item) => item.id ===Products.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button> */}
              <p> <StarRating rating={Snacks.rating} /></p>
              <Button variant="primary" onClick={() => { send(Snacks) }} className="col-lg-12">
                  Add to Cart
                </Button>
            </div>
          ))}
        </div>

</section>
    </div>
  )
}
