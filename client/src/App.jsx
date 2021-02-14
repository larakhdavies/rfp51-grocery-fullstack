import React from "react";
import GroceryList from "./GroceryList.jsx";
import $ from "jquery";
import GroceryListItem from './GroceryListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8080/groceryList',
      type: 'GET',
      success: function (data){
        console.log(data)
        this.setState({list: data});
        }.bind(this),
      error: function () {
        console.log('failed')
      }
    });
  }


  render() {
    return (
      <div>
        <div>
          <h1>Grocery List!</h1>
          <h2>List Items:</h2>
        </div>
        <div className = "groceryList">
          <GroceryList list = {this.state.list} />
        </div>
      </div>
    );
  }
}

export default App