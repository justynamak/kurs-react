import React, { Component } from "react";
import BookView from "../Views/BookView";
import { fbase } from "../../fbase";

class Inventory extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.ref = fbase.syncState("bookstore/books", {
      context: this,
      state: "books"
    });
  }
  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }
  render() {
    const booksList = Array.isArray(this.state.books)
      ? this.state.books.map(book => {
          return (
            <BookView
              key={book.name}
              book={book}
              addToOrder={this.props.addToOrder}
            />
          );
        })
      : "";
    return (
      <div className="offset-md-2 inventory col-md-5">
        <h2 className="text-center mb-2">Books inventory</h2>
        {booksList.length ? <ul className="w-100">{booksList}</ul> : null}
      </div>
    );
  }
}
export default Inventory;
