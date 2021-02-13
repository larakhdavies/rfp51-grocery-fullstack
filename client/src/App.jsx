import React from "react";
import GroceryList from "./GroceryList.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: "apple, banan"
    };
  }

  render() {
    return (
      <div>
        <GroceryList list = {this.state.list} />
        <div>
          <h1>Hello, world!</h1>
        </div>
      </div>
    );
  }
}

export default App