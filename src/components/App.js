import React, { Component } from "react";
import AdminPanel from "./AdminPanel/AdminPanel";
import Order from "./Order/Order";
import Header from "./Header/Header";
import Inventory from "./Inventory/Inventory";
import "../index.css";

class App extends Component {
  state = {
    books: []
  };

  addBook = book => {
    const books = [...this.state.books];

    books.push(book);

    this.setState({
      books
    });
  };
  render() {
    const { books } = this.state;
    return (
      <div className="app container">
        <Header />
        <div className="row">
          <Order />
          <Inventory books={books} />
          <AdminPanel addBook={this.addBook} />
        </div>
      </div>
    );
  }
}
export default App;
