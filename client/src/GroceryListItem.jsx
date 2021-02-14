import React from 'react';

const GroceryListItem = (props) => {
  return (
    <div>
      {props.foodName} {props.quantity}
    </div>

  )
}

export default GroceryListItem