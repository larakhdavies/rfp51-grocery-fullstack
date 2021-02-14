import React from 'react';
import GroceryListItem from './GroceryListItem.jsx';

const GroceryList = (props) => {
  return (
    <div>
      {props.list.map((item) => <GroceryListItem foodName = {item.foodName} quantity = {item.quantity} />)}
    </div>
  )
}

export default GroceryList
