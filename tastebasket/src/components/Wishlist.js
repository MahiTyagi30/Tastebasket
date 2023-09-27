import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from "react-bootstrap/Button";
import StarRating from './StarRating';
import { ADD } from "../redux/actions/action";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    // Retrieve the wishlist from your data source (e.g., Redux or localStorage)
    // and set it in the component's state.
    // Example for using localStorage:
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);
  const navigate = useNavigate();

  const goBackToProducts = () => {
    navigate('/products');
  };

  const removeFromWishlistHandler = (productId) => {
    console.log('Removing product with ID:', productId);
    console.log('Current wishlist:', wishlist);
    const updatedWishlist = wishlist.filter((product) => product.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

    const dispatch=useDispatch();
    // const wishlist = useSelector((state) => state.wishlist)
    const sendToCart = (product) => {
        dispatch(ADD(product));
      };

  return (
    <div>
      <section className="categories" id="categories">
        <br />
        <br />
        <br />
        <br />
        <h1 className="heading"> Your Wishlist </h1>

        <div className="box-container">
           
          {wishlist.map((Product) => (
            //  console.log("productas",Product); 
            Product && Product.image && (
            <div key={Product.id} className="box">
              <img src={Product.image} alt={Product.name} />
              <h3>{Product.name}</h3>
              <p>{Product.price}</p>
              <button
                className={`wishlist-button added`}
                onClick={() => {
                  if (Product&&Product.id) {
                    removeFromWishlistHandler(Product.id);
                  }
                }}
              >
                Remove from Wishlist
              </button>
              <p><StarRating rating={Product.rating} /></p>
              <Button variant="primary" className="col-lg-12"   onClick={() => sendToCart(Product)}>
                Add to Cart
              </Button>
            </div>
            )
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
