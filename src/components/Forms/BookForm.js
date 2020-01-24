import React, { Component } from "react";
import { fbase, firebaseApp } from "../../fbase";

class BookForm extends Component {
  state = {
    books: [],
    book: {
      name: "",
      author: "",
      description: "",
      onStock: true,
      image: ""
    }
  };
  handleChangeInput = e => {
    let book;

    if (e.target.name === "onStock") {
      book = {
        ...this.state.book,
        [e.target.name]: e.target.checked
      };
    } else {
      book = {
        ...this.state.book,
        [e.target.name]: e.target.value
      };
    }

    this.setState({
      book
    });
  };
  handleLogOut = () => {
    firebaseApp.auth().signOut();
    this.props.changeLoggedIn(false);
  };
  handleAddNewBook = e => {
    e.preventDefault();
    const newBook = { ...this.state.book };

    this.setState({
      books: Array.isArray(this.state.books)
        ? [...this.state.books, newBook]
        : [newBook],

      book: {
        name: "",
        author: "",
        description: "",
        onStock: true,
        image: ""
      }
    });
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
    const { name, author, description, onStock, image } = this.state.book;

    return (
      <div className="admin-panel">
        <button
          className="btn btn-outline-info d-block ml-auto"
          onClick={this.handleLogOut}
        >
          Logout
        </button>
        <h2>Admin Panel</h2>
        <form onSubmit={this.handleAddNewBook}>
          <div className="form-group">
            <input
              type="text"
              placeholder="name"
              name="name"
              className="form-control"
              id="bookName"
              value={name}
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="author"
              id="author"
              name="author"
              className="form-control"
              value={author}
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              id="description"
              placeholder="description"
              className="form-control"
              value={description}
              onChange={this.handleChangeInput}
            ></textarea>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="onStock"
              name="onStock"
              value={onStock}
              onChange={this.handleChangeInput}
            />
            <label htmlFor="onStock" className="form-check-label">
              On stock
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="image path"
              id="image"
              name="image"
              className="form-control"
              value={image}
              onChange={this.handleChangeInput}
            />
          </div>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
}

export default BookForm;
