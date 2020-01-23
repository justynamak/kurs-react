import React, { Component } from "react";
import BookView from "../Views/BookView";

class Inventory extends Component {
  render() {
    // const booksList = this.props.books.map(book => (
    //   <BookView
    //     key={book.name}
    //     book={book}
    //     addToOrder={this.props.addToOrder}
    //   />
    // ));
    return (
      <div className="inventory col-md-6">
        {/* {booksList.length ? <ul className="w-100">{booksList}</ul> : null} */}
      </div>
    );
  }
}
export default Inventory;
