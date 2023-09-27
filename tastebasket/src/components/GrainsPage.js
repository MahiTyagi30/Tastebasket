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
          { Grains.map((Grains) => (
            <div key={Grains.id} className="box">
              <img src={Grains.image} alt={Grains.name} />
              <h3>{Grains.name}</h3>
              <p>{Grains.price}</p>
              <button
      className={`wishlist-button ${wishlist.some((item) => item && item.id === Grains.id) ? 'added' : ''}`}
      onClick={() => {
        wishlist.some((item) => item && item.id === Grains.id)
          ? removeFromWishlistHandler(Grains.id)
          : addToWishlistHandler(Grains);
      }}
    >
      {wishlist.some((item) => item && item.id ===Grains.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
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
              <p> <StarRating rating={Grains.rating} /></p>
              <Button variant="primary" onClick={() => { send(Grains) }} className="col-lg-12">
                  Add to Cart
                </Button>
            </div>
          ))}
        </div>

</section>
    </div>
  )
}
