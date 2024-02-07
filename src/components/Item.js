import React, { useState} from "react";

function Item({ name, category }) {
  const [add,setAdd] = useState(false)
  const addClass = add?"in-cart":""
  const handleMode = ()=>{
    setAdd(!add)
  }
  return (
    <li className={addClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button onClick={handleMode}className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
