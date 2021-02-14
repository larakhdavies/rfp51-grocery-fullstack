import React from 'react';

const GroceryList = (props) => {
  return (
    <div>
      {props.list.map(item => <GroceryListItem item = {item}/>)}
    </div>
  )
}

export default GroceryList