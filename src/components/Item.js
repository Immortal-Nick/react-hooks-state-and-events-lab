import React, { useState } from "react";

function Item({ name, category }) {
 
  const [inCart, setInCart] = useState(false);

 
  function handleAddToCartClick() {
    setInCart((prevInCart) => !prevInCart);
  }

  
  const itemClass = inCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      
      <button onClick={handleAddToCartClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
