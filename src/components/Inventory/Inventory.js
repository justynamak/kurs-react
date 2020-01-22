import React, { Component } from "react";
import BookView from "../BookView/BookView";

class Inventory extends Component {
  render() {
    const booksList = this.props.books.map(book => (
      <BookView key={book.name} book={book} />
    ));
    return (
      <div className="inventory col-md-6">
        {booksList.length ? <ul className="w-100">{booksList}</ul> : null}
      </div>
    );
  }
}
export default Inventory;
