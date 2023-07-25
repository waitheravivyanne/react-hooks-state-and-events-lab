import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [stateVar, setStateVar] = useState(false);
const handleClick = () => {
  setStateVar((stateVar)=> !stateVar);
}
  
  const appClass = stateVar ? "App dark" : "App light"
  const buttonText = stateVar ? "Dark Mode" : "Light Mode"
  console.log(appClass)

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}>{buttonText}</button>      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
