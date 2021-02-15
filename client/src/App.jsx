import React from "react";
import GroceryList from "./GroceryList.jsx";
import $ from "jquery";
import GroceryListItem from './GroceryListItem.jsx';
import GroceryForm from './GroceryForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    this.renderList();
  }

  renderList() {
    $.ajax({
      url: 'http://localhost:8080/groceryList',
      type: 'GET',
      success: function (data){
        this.setState({list: data});
        }.bind(this),
      error: function () {
        console.log('failed')
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log( event.target[0].value)
    let itemName = event.target[0].value //needs to be in JSON form
    //let itemQuantity = event.target[0].value
    let input = {itemName: itemName}
    $.ajax({
      url: 'http://localhost:8080/groceryList',
      type: 'POST',
      contentType: 'application/JSON',
      data: JSON.stringify(input),
      success: this.renderList,
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
        <div>
          <GroceryForm handleSubmit = {this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

export default App