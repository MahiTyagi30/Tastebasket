const StarRating = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
  
    const starArray = Array(totalStars).fill(0);
  
    return (
      <div className="star-rating" >
        {starArray.map((_, index) => {
          if (index < fullStars) {
            return <i key={index} className="fas fa-star" style={{color: "var(--orange)"}}></i>;
          } else if (halfStar && index === fullStars) {
            return <i key={index} className="fas fa-star-half-alt"  style={{color: "var(--orange)"}}></i>;
          } else {
            return <i key={index} className="far fa-star"  style={{color: "var(--orange)"}}></i>;
          }
        })}
      </div>
    );
  };
  export default StarRating
  