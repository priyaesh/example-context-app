import React from "react";

const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name}></img>
      <button>Add to Cart</button>
      <button>Remove from Cart</button>
    </div>
  );
};

export default SingleProduct;
