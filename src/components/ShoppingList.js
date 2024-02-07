import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,filterBy] = useState('All')
  function handleFilter(e){
    // console.log(e.target.value)
    filterBy(e.target.value)
  }
  const filteredItems = items.filter((item)=>{
    if (selectedCategory ==='All'){
      return true
    }
    else{
      return item.category===selectedCategory
    }
  })
  const ItemList = filteredItems.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e)=>handleFilter(e)}name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {ItemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
