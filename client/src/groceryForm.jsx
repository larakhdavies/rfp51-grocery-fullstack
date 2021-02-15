import React from 'react';
import GroceryListItem from './GroceryListItem.jsx';
import GroceryList from './GroceryList.jsx';


const GroceryForm = (props) => {
  return (
    <div>
      <form onSubmit= {props.handleSubmit}> item:
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  )
}

//data will be stored at event.target[0].value

export default GroceryForm

//    <div>
{/* <form onSubmit = 'callback'>
<input type="text" />
<input type="submit" />
</form>
</div> */}