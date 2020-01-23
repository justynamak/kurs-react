import React, { Component } from "react";
import AdminPanel from "./AdminPanel/AdminPanel";
import Order from "./Order/Order";
import Header from "./Header/Header";
import Inventory from "./Inventory/Inventory";
import "../index.css";

class App extends Component {
  state = {
    // books: [],
    order: []
  };

  // addBook = book => {
  //   const books = [...this.state.books];
  //   books.push(book);

  //   this.setState({
  //     books
  //   });
  // };
  addToOrder = book => {
    const order = [...this.state.order, book];
    this.setState({
      order
    });
  };
  removeFromOrder = title => {
    const order = this.state.order.filter(book => book.name !== title);
    this.setState({
      order
    });
  };
  render() {
    // const { books, order } = this.state;
    return (
      <div className="app container">
        <Header />
        <div className="row">
          {/* <Order removeFromOrder={this.removeFromOrder} order={order} />
          <Inventory books={books} addToOrder={this.addToOrder} /> */}
        </div>
      </div>
    );
  }
}
export default App;
