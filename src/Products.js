import { Star, StarBorder } from "@mui/icons-material";
import React from "react";
import "./Products.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
function Products({ title, image, price, rating }) {
  return (
    <div className="products">
      <div className="products_info">
        <p>{title}</p>
        <p className="products_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="p_ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarRoundedIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button>Add to cart</button>
    </div>
  );
}

export default Products;
