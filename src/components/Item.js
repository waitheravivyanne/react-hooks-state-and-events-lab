import React, {useState} from "react";

function Item({ name, category }) {

  const [stateVar, setStateVar] = useState("");
  const handleClick = () => {
    setStateVar((stateVar)=> !stateVar);
}
   const buttonText = stateVar ? "Remove from Cart" : "Add to Cart";
   const buttonClassName = stateVar ? "remove" : "add";
   const appClassName = stateVar ? "in-cart" : "";

  return (
    <li className={appClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick ={handleClick} className= {buttonClassName}>{buttonText}</button>
    </li>
  );
}

export default Item;
