import React, { Component } from "react";
import Item from "./Item";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "all",
    };
  }

  handleCategoryChange(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  render() {
    const { items } = this.props;
    const { selectedCategory } = this.state;

    // Filter items based on the selected category
    const filteredItems = selectedCategory === "all"
      ? items
      : items.filter(item => item.category === selectedCategory);

    return (
      <div className="ShoppingList">
        <div className="category-dropdown">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(event) => this.handleCategoryChange(event)}
          >
            <option value="all">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* Add more options for other categories */}
          </select>
        </div>
        <ul className="Items">
          {filteredItems.map((item, index) => (
            <Item key={index} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
