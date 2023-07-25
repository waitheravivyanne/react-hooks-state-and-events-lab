import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All")
  const handleOnChange = (e) => {
    let selectedCategory = e.target.value
    setSelectedCategory(selectedCategory)
  }
  // if (selectedCategory === "All") {
  //   items = items
  // }
  if (selectedCategory !== "All"){
    items = items.filter((item)=>{
      return item.category === selectedCategory
    })
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange ={handleOnChange} name="filter">
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
      </ul>
    </div>
  );
}

export default ShoppingList;
